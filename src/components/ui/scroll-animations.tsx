'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const slideIn = {
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  up: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  })

  return (
    <motion.div ref={ref} style={{ y: smoothProgress }}>
      {children}
    </motion.div>
  )
}

export function ParallaxSection({
  children,
  offset = 50,
}: {
  children: React.ReactNode
  offset?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  })

  return (
    <motion.div
      ref={ref}
      initial={slideIn[direction].initial}
      animate={scrollYProgress > 0 ? slideIn[direction].animate : undefined}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
