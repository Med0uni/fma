'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

const PITCH_DIMENSIONS = {
  width: 3.6, // 105m scaled
  height: 2.6, // 68m scaled
  centerCircleRadius: 0.31, // 9.15m scaled
  penaltyAreaWidth: 0.88, // 40.2m (44 yards) scaled
  penaltyAreaDepth: 0.54, // 16.5m (18 yards) scaled
  goalAreaWidth: 0.37, // 18.3m (20 yards) scaled
  goalAreaDepth: 0.2, // 5.5m (6 yards) scaled
  cornerArcRadius: 0.034, // 1m scaled
  penaltyArcRadius: 0.31, // 9.15m (10 yards) - same as center circle
  penaltySpotDistance: 0.44, // 11m (12 yards) from goal line
}

export default function TacticalBoard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    const getThemeColors = () => {
      const isDark = theme === 'dark'
      return {
        background: isDark
          ? { color: '#1a1e2b', alpha: 0.5 }
          : { color: '#ffffff', alpha: 0.01 },
        lines: isDark ? '#3b82f6' : '#1d4ed8',
        players: isDark ? '#60a5fa' : '#2563eb',
        grid: isDark ? '#2a3142' : '#f1f5f9',
      }
    }

    const colors = getThemeColors()

    const scene = new THREE.Scene()
    //scene.background = new THREE.Color(colors.background)

    const camera = new THREE.OrthographicCamera(
      -PITCH_DIMENSIONS.width / 2,
      PITCH_DIMENSIONS.width / 2,
      PITCH_DIMENSIONS.height / 2,
      -PITCH_DIMENSIONS.height / 2,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    )
    renderer.setClearColor(
      new THREE.Color(colors.background.color),
      colors.background.alpha
    )
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(colors.lines),
      opacity: 0.6,
      transparent: true,
    })

    // Pitch outline
    const pitchOutline = new THREE.BufferGeometry()
    const outlineVertices = new Float32Array([
      -PITCH_DIMENSIONS.width / 2,
      PITCH_DIMENSIONS.height / 2,
      0,
      PITCH_DIMENSIONS.width / 2,
      PITCH_DIMENSIONS.height / 2,
      0,
      PITCH_DIMENSIONS.width / 2,
      -PITCH_DIMENSIONS.height / 2,
      0,
      -PITCH_DIMENSIONS.width / 2,
      -PITCH_DIMENSIONS.height / 2,
      0,
      -PITCH_DIMENSIONS.width / 2,
      PITCH_DIMENSIONS.height / 2,
      0,
    ])
    pitchOutline.setAttribute(
      'position',
      new THREE.BufferAttribute(outlineVertices, 3)
    )
    const outlineLines = new THREE.Line(pitchOutline, lineMaterial)
    scene.add(outlineLines)

    // Halfway line
    const halfwayLine = new THREE.BufferGeometry()
    const halfwayVertices = new Float32Array([
      0,
      PITCH_DIMENSIONS.height / 2,
      0,
      0,
      -PITCH_DIMENSIONS.height / 2,
      0,
    ])
    halfwayLine.setAttribute(
      'position',
      new THREE.BufferAttribute(halfwayVertices, 3)
    )
    const halfwayLineSegment = new THREE.Line(halfwayLine, lineMaterial)
    scene.add(halfwayLineSegment)

    // Center circle
    const centerCirclePoints = []
    const centerCircleSegments = 64
    for (let i = 0; i <= centerCircleSegments; i++) {
      const angle = (i / centerCircleSegments) * Math.PI * 2
      centerCirclePoints.push(
        Math.cos(angle) * PITCH_DIMENSIONS.centerCircleRadius,
        Math.sin(angle) * PITCH_DIMENSIONS.centerCircleRadius,
        0
      )
    }
    const centerCircleGeometry = new THREE.BufferGeometry()
    centerCircleGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(centerCirclePoints, 3)
    )
    const centerCircle = new THREE.LineLoop(centerCircleGeometry, lineMaterial)
    scene.add(centerCircle)

    // Center dot
    const centerDotGeometry = new THREE.CircleGeometry(0.02, 32)
    const centerDotMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colors.lines),
      opacity: 0.6,
      transparent: true,
    })
    const centerDot = new THREE.Mesh(centerDotGeometry, centerDotMaterial)
    scene.add(centerDot)

    // Corner arcs
    const createCornerArc = (isLeft: boolean, isTop: boolean) => {
      const points = []
      const arcSegments = 16
      const startAngle = isLeft
        ? isTop
          ? Math.PI / 2
          : Math.PI
        : isTop
          ? 0
          : -Math.PI / 2

      for (let i = 0; i <= arcSegments; i++) {
        const angle = startAngle + (i / arcSegments) * (Math.PI / 2)
        const x =
          (isLeft ? -PITCH_DIMENSIONS.width / 2 : PITCH_DIMENSIONS.width / 2) +
          Math.cos(angle) * PITCH_DIMENSIONS.cornerArcRadius
        const y =
          (isTop ? PITCH_DIMENSIONS.height / 2 : -PITCH_DIMENSIONS.height / 2) +
          Math.sin(angle) * PITCH_DIMENSIONS.cornerArcRadius
        points.push(x, y, 0)
      }

      const arcGeometry = new THREE.BufferGeometry()
      arcGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(points, 3)
      )
      return new THREE.Line(arcGeometry, lineMaterial)
    }

    scene.add(createCornerArc(true, true))
    scene.add(createCornerArc(true, false))
    scene.add(createCornerArc(false, true))
    scene.add(createCornerArc(false, false))

    // Penalty Areas
    const createPenaltyArea = (isLeft: boolean) => {
      const xOffset = isLeft
        ? -PITCH_DIMENSIONS.width / 2
        : PITCH_DIMENSIONS.width / 2
      const xDirection = isLeft ? 1 : -1

      const penaltyArea = new THREE.BufferGeometry()
      const vertices = new Float32Array([
        xOffset,
        PITCH_DIMENSIONS.penaltyAreaWidth / 2,
        0,
        xOffset + xDirection * PITCH_DIMENSIONS.penaltyAreaDepth,
        PITCH_DIMENSIONS.penaltyAreaWidth / 2,
        0,
        xOffset + xDirection * PITCH_DIMENSIONS.penaltyAreaDepth,
        -PITCH_DIMENSIONS.penaltyAreaWidth / 2,
        0,
        xOffset,
        -PITCH_DIMENSIONS.penaltyAreaWidth / 2,
        0,
      ])
      penaltyArea.setAttribute(
        'position',
        new THREE.BufferAttribute(vertices, 3)
      )
      return new THREE.LineLoop(penaltyArea, lineMaterial)
    }

    scene.add(createPenaltyArea(true))
    scene.add(createPenaltyArea(false))

    // Penalty Arcs (The D)
    const createPenaltyArc = (isLeft: boolean) => {
      const points = []
      const arcSegments = 64 // Increased for smoother arc
      const xOffset = isLeft
        ? -PITCH_DIMENSIONS.width / 2 + PITCH_DIMENSIONS.penaltySpotDistance
        : PITCH_DIMENSIONS.width / 2 - PITCH_DIMENSIONS.penaltySpotDistance

      // Calculate the intersection points with penalty box
      const halfPenaltyWidth = PITCH_DIMENSIONS.penaltyAreaWidth / 2
      const penaltyDepth = PITCH_DIMENSIONS.penaltyAreaDepth

      // Calculate the angles for the D shape
      const intersectAngle = Math.asin(
        halfPenaltyWidth / PITCH_DIMENSIONS.penaltyArcRadius
      )

      // For left penalty area, arc goes from -intersectAngle to +intersectAngle
      // For right penalty area, arc goes from Math.PI-intersectAngle to Math.PI+intersectAngle
      const startAngle = isLeft ? -intersectAngle : Math.PI - intersectAngle
      const endAngle = isLeft ? intersectAngle : Math.PI + intersectAngle

      // Create the arc points with higher resolution
      for (let i = 0; i <= arcSegments; i++) {
        const t = i / arcSegments
        const angle = startAngle + t * (endAngle - startAngle)
        const x = xOffset + Math.cos(angle) * PITCH_DIMENSIONS.penaltyArcRadius
        const y = Math.sin(angle) * PITCH_DIMENSIONS.penaltyArcRadius
        points.push(x, y, 0)
      }

      const arcGeometry = new THREE.BufferGeometry()
      arcGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(points, 3)
      )
      return new THREE.Line(arcGeometry, lineMaterial)
    }

    // Penalty spots
    const createPenaltySpot = (isLeft: boolean) => {
      const xOffset = isLeft
        ? -PITCH_DIMENSIONS.width / 2 + PITCH_DIMENSIONS.penaltySpotDistance
        : PITCH_DIMENSIONS.width / 2 - PITCH_DIMENSIONS.penaltySpotDistance

      const spotGeometry = new THREE.CircleGeometry(0.02, 32)
      const spot = new THREE.Mesh(
        spotGeometry,
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(colors.lines),
          opacity: 0.6,
          transparent: true,
        })
      )
      spot.position.set(xOffset, 0, 0)
      return spot
    }

    scene.add(createPenaltyArc(true))
    scene.add(createPenaltyArc(false))
    scene.add(createPenaltySpot(true))
    scene.add(createPenaltySpot(false))

    // Goal Areas
    const createGoalArea = (isLeft: boolean) => {
      const xOffset = isLeft
        ? -PITCH_DIMENSIONS.width / 2
        : PITCH_DIMENSIONS.width / 2
      const xDirection = isLeft ? 1 : -1

      const goalArea = new THREE.BufferGeometry()
      const vertices = new Float32Array([
        xOffset,
        PITCH_DIMENSIONS.goalAreaWidth / 2,
        0,
        xOffset + xDirection * PITCH_DIMENSIONS.goalAreaDepth,
        PITCH_DIMENSIONS.goalAreaWidth / 2,
        0,
        xOffset + xDirection * PITCH_DIMENSIONS.goalAreaDepth,
        -PITCH_DIMENSIONS.goalAreaWidth / 2,
        0,
        xOffset,
        -PITCH_DIMENSIONS.goalAreaWidth / 2,
        0,
      ])
      goalArea.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
      return new THREE.LineLoop(goalArea, lineMaterial)
    }

    scene.add(createGoalArea(true))
    scene.add(createGoalArea(false))

    // Player setup
    const playerGeometry = new THREE.CircleGeometry(0.05, 32)
    const playerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colors.players),
      opacity: 0.8,
      transparent: true,
    })

    const staticPositions = [
      [-1.5, 0],
      [-0.6, -0.9],
      [-1.0, -0.4],
      [-1.0, 0.4],
      [-0.6, 0.9],
      [0, 0.4],
      [0, -0.4],
      [1.2, 0],
      [0.6, 0.95],
      [0.6, -0.95],
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

    let DMC = new THREE.Mesh(
      playerGeometry,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(colors.players),
        opacity: 0.8,
        transparent: true,
      })
    )
    DMC.position.set(0, 0, 0)
    scene.add(DMC)

    let time = 0
    let cbsStartMoving = false
    let transitionTo3412 = false
    let transitionBackTo3421 = false
    let transitionTime = 0
    let elapsedTime = 0

    const animate = () => {
      time += 0.005

      DMC.position.x = -0.8 + Math.sin(time) * 0.25
      if (Math.abs(DMC.position.x - RCB.position.x) < 0.2) {
        cbsStartMoving = true
      }

      RCB.position.y = 0.38 - Math.sin(time) * 0.15
      LCB.position.y = -0.38 + Math.sin(time) * 0.15

      const rbLbMovement = Math.sin(time) * 0.35
      RB.position.x = -0.7 - rbLbMovement
      LB.position.x = -0.65 - rbLbMovement

      const cmMovement = Math.sin(time) * 0.25
      LCM.position.x = -0.1 + cmMovement
      RCM.position.x = -0.1 + cmMovement

      if (!transitionTo3412) {
        LF.position.y = -0.6 - Math.sin(time) * 0.25
        RF.position.y = 0.6 + Math.sin(time) * 0.25
      }

      ST.position.x = 0.9 + Math.sin(time) * 0.05

      if (time > 10) {
        transitionTo3412 = true
      }

      if (transitionTo3412) {
        transitionTime += 0.005

        ST.position.x = 0.7 - Math.sin(transitionTime) * 0.35

        LF.position.y = -0.5 + Math.sin(transitionTime) * 0.15
        LF.position.x = 0.85 + Math.sin(transitionTime) * 0.3

        RF.position.y = 0.5 - Math.sin(transitionTime) * 0.15
        RF.position.x = 0.85 + Math.sin(transitionTime) * 0.3
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current || !renderer) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      const aspect = width / height
      const pitchAspect = PITCH_DIMENSIONS.width / PITCH_DIMENSIONS.height

      if (aspect > pitchAspect) {
        camera.top = PITCH_DIMENSIONS.height / 2
        camera.bottom = -PITCH_DIMENSIONS.height / 2
        camera.left = (-PITCH_DIMENSIONS.height * aspect) / 2
        camera.right = (PITCH_DIMENSIONS.height * aspect) / 2
      } else {
        camera.left = -PITCH_DIMENSIONS.width / 2
        camera.right = PITCH_DIMENSIONS.width / 2
        camera.top = PITCH_DIMENSIONS.width / aspect / 2
        camera.bottom = -PITCH_DIMENSIONS.width / aspect / 2
      }

      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current) {
        containerRef.current?.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [theme])

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-secondary/50 backdrop-blur-sm">
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  )
}
