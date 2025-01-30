import { type MotionProps } from 'framer-motion'

// Reusable animation variants
export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const slideUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
}

export const slideInLeft: MotionProps = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.5 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
}

export const calculateTiltTransform = (
  e: React.MouseEvent<HTMLElement>,
  intensity = 15
) => {
  const element = e.currentTarget
  const rect = element.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * intensity
  const rotateY = ((centerX - x) / centerX) * intensity

  return { rotateX, rotateY }
}
