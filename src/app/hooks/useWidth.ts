import { useState, useEffect } from 'react'

export default function useWidth (): number {
  const isBrowser = typeof window !== 'undefined'

  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 1024)

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
