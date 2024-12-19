'use client'

import { motion } from 'framer-motion'

interface StaggerListProps {
  children: React.ReactNode[]
  className?: string
  delay?: number
  staggerDelay?: number
}

export function StaggerList({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1
}: StaggerListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
