'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

export default function TacticalBoard() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-secondary/50 backdrop-blur-sm">
      <div className="absolute inset-0" />
    </div>
  )
}
