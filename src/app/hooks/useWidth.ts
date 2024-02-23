'use client'

import { useState, useEffect } from 'react'

export default function useWidth (): number | undefined {
  const isBrowser = typeof window !== 'undefined'

  const [width, setWidth] = useState<number | undefined>(isBrowser ? window.innerWidth : undefined)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setWidth(window.innerWidth)
  }

  return width
}
