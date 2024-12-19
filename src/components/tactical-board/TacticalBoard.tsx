'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function TacticalBoard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#1a1a1a')

    // Camera setup
    const camera = new THREE.OrthographicCamera(
      -2, // left
      2, // right
      1.5, // top
      -1.5, // bottom
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    )
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create pitch lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0053ff,
      opacity: 0.2,
      transparent: true,
    })

    // Main pitch outline
    const pitchOutline = new THREE.BufferGeometry()
    const outlineVertices = new Float32Array([
      -1.8, 1.3, 0, 1.8, 1.3, 0, 1.8, 1.3, 0, 1.8, -1.3, 0, 1.8, -1.3, 0, -1.8,
      -1.3, 0, -1.8, -1.3, 0, -1.8, 1.3, 0,
    ])
    pitchOutline.setAttribute(
      'position',
      new THREE.BufferAttribute(outlineVertices, 3)
    )
    const outlineLines = new THREE.LineSegments(pitchOutline, lineMaterial)
    scene.add(outlineLines)

    // Center line
    const centerLine = new THREE.BufferGeometry()
    const centerVertices = new Float32Array([0, 1.3, 0, 0, -1.3, 0])
    centerLine.setAttribute(
      'position',
      new THREE.BufferAttribute(centerVertices, 3)
    )
    const centerLineSegment = new THREE.LineSegments(centerLine, lineMaterial)
    scene.add(centerLineSegment)

    // Center circle
    const circleSegments = 64
    const circleRadius = 0.3
    const circleGeometry = new THREE.BufferGeometry()
    const circleVertices = new Float32Array((circleSegments + 1) * 3)

    for (let i = 0; i <= circleSegments; i++) {
      const theta = (i / circleSegments) * Math.PI * 2
      circleVertices[i * 3] = Math.cos(theta) * circleRadius
      circleVertices[i * 3 + 1] = Math.sin(theta) * circleRadius
      circleVertices[i * 3 + 2] = 0
    }

    circleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(circleVertices, 3)
    )
    const circleLine = new THREE.Line(circleGeometry, lineMaterial)
    scene.add(circleLine)

    // Penalty areas
    // Left penalty area
    const leftPenaltyArea = new THREE.BufferGeometry()
    const leftPenaltyVertices = new Float32Array([
      -1.8, 0.6, 0, -1.3, 0.6, 0, -1.3, 0.6, 0, -1.3, -0.6, 0, -1.3, -0.6, 0,
      -1.8, -0.6, 0,
    ])
    leftPenaltyArea.setAttribute(
      'position',
      new THREE.BufferAttribute(leftPenaltyVertices, 3)
    )
    const leftPenaltyLines = new THREE.LineSegments(
      leftPenaltyArea,
      lineMaterial
    )
    scene.add(leftPenaltyLines)

    // Right penalty area
    const rightPenaltyArea = new THREE.BufferGeometry()
    const rightPenaltyVertices = new Float32Array([
      1.8, 0.6, 0, 1.3, 0.6, 0, 1.3, 0.6, 0, 1.3, -0.6, 0, 1.3, -0.6, 0, 1.8,
      -0.6, 0,
    ])
    rightPenaltyArea.setAttribute(
      'position',
      new THREE.BufferAttribute(rightPenaltyVertices, 3)
    )
    const rightPenaltyLines = new THREE.LineSegments(
      rightPenaltyArea,
      lineMaterial
    )
    scene.add(rightPenaltyLines)

    // Create static players (dots)
    const playerGeometry = new THREE.CircleGeometry(0.05, 32)
    const playerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0053ff,
      opacity: 0.5,
      transparent: true,
    })

    // Static player positions
    const staticPositions = [
      [-1.5, 0], // GK
      [-0.6, -0.9], // RB
      [-1.0, -0.4], // RCB
      [-1.0, 0.4], // LCB
      [-0.6, 0.9], // LB
      [0, 0.4], // LCM
      [0, -0.4], // RCM
      [1.2, 0], // ST
      [0.6, 0.95], // LF
      [0.6, -0.95], // RF
    ]
    const players: THREE.Mesh[] = []
    staticPositions.forEach(([x, y]) => {
      const player = new THREE.Mesh(playerGeometry, playerMaterial)
      player.position.set(x, y, 0)
      scene.add(player)
      players.push(player)
    })

    const RB = players[1]
    const RCB = players[2]
    const LCB = players[3]
    const LB = players[4]
    const LCM = players[5]
    const RCM = players[6]
    const LF = players[8]
    const RF = players[9]
    const ST = players[7]

    // Create moving DMC
    let DMC
    DMC = new THREE.Mesh(
      playerGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x0053ff,
        opacity: 0.8,
        transparent: true,
      })
    )
    DMC.position.set(0, 0, 0)
    scene.add(DMC)

    // Animation
    let time = 0
    let cbsStartMoving = false // Flag to track when CBs and FBs should start moving

    let transitionTo3412 = false // Flag to indicate transition
    let transitionBackTo3421 = false // Flag for the second transition

    let transitionTime = 0 // Separate time counter for transition
    let elapsedTime = 0 // Track time elapsed

    const animate = () => {
      time += 0.005

      // DMC movement pattern
      DMC.position.x = -0.8 + Math.sin(time) * 0.25 // Move horizontally between center backs
      // Check if DMC is close enough to the center-backs
      if (Math.abs(DMC.position.x - RCB.position.x) < 0.2) {
        cbsStartMoving = true
      }

      // CBs movement pattern (start only when DMC approaches)
      RCB.position.y = 0.38 - Math.sin(time) * 0.15 // Move down
      LCB.position.y = -0.38 + Math.sin(time) * 0.15 // Move up

      // RB and LB movement pattern (mirror DMC inversely)
      const rbLbMovement = Math.sin(time) * 0.35
      RB.position.x = -0.7 - rbLbMovement // RB retreats when DMC moves forward
      LB.position.x = -0.65 - rbLbMovement // LB retreats when DMC moves forward

      // Central Midfielders move back slightly on x-axis
      const cmMovement = Math.sin(time) * 0.25
      LCM.position.x = -0.1 + cmMovement // Move back
      RCM.position.x = -0.1 + cmMovement // Move back

      // LF&RF movement pattern (start only when DMC approaches)
      // LF & RF movement pattern for 3-4-2-1
      if (!transitionTo3412) {
        LF.position.y = -0.6 - Math.sin(time) * 0.25 // Move down
        RF.position.y = 0.6 + Math.sin(time) * 0.25 // Move up
      }

      // ST moves slightly on x-axis
      ST.position.x = 0.9 + Math.sin(time) * 0.05 // Move back

      // Transition logic to 3-4-1-2
      if (time > 10) {
        // Start transition after 10 seconds
        transitionTo3412 = true
      }

      if (transitionTo3412) {
        transitionTime += 0.005

        // Adjust ST movement
        ST.position.x = 0.7 - Math.sin(transitionTime) * 0.35 // Smooth back-and-forth motion

        // LF movement (dynamic with sinusoidal oscillation)
        LF.position.y = -0.4 + Math.sin(transitionTime) * 0.1 // Oscillates around -0.4
        LF.position.x = 0.85 + Math.sin(transitionTime) * 0.05 // Oscillates forward/backward around 0.7

        // RF movement (dynamic with sinusoidal oscillation)
        RF.position.y = 0.4 - Math.sin(transitionTime) * 0.1 // Oscillates around 0.4
        RF.position.x = 0.85 + Math.sin(transitionTime) * 0.05 // Oscillates forward/backward around 0.7
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    if (elapsedTime > 8 && transitionTo3412) {
      transitionBackTo3421 = true
      transitionTo3412 = false // End first transition
      transitionTime = 0 // Reset time for the new transition
    }

    // Transition back to 3-4-2-1
    if (transitionBackTo3421) {
      transitionTime += 0.005

      // Adjust ST movement back to 3-4-2-1
      ST.position.x = 0.9 + Math.sin(transitionTime) * 0.05

      // LF movement (return dynamic oscillation to wider position)
      LF.position.y = -0.6 - Math.sin(transitionTime) * 0.1 // Oscillates back to wider position
      LF.position.x = 0.6 - Math.sin(transitionTime) * 0.05 // Oscillates backward slightly

      // RF movement (return dynamic oscillation to wider position)
      RF.position.y = 0.6 + Math.sin(transitionTime) * 0.1 // Oscillates back to wider position
      RF.position.x = 0.6 - Math.sin(transitionTime) * 0.05 // Oscillates backward slightly
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.left = -2 * (width / height)
      camera.right = 2 * (width / height)
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current) {
        containerRef.current?.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-secondary/50 backdrop-blur-sm">
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  )
}
