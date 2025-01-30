'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useState } from 'react'

interface ImageProps extends NextImageProps {
  fallback?: string
}

export default function Image({
  alt,
  fallback = '/image-placeholder.png',
  ...props
}: ImageProps) {
  const [error, setError] = useState(false)

  return (
    <NextImage
      {...props}
      alt={alt}
      src={error ? fallback : props.src}
      onError={() => setError(true)}
      className={`transition-opacity duration-300 ${props.className || ''}`}
      loading="lazy"
      quality={85}
    />
  )
}
