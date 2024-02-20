'use client'

import { usePathname } from 'next/navigation'

export default function Subtitle (): JSX.Element {
  const path = usePathname()

  const info: Record<string, string[]> = {
    '/destination': ['01', 'Pick your destination'],
    '/crew': ['02', 'Meet your crew'],
    '/technology': ['03', 'Space Launch 101']
  }

  return (
    <h2 className='alter-font text-center text-white text-md tracking-widest'>
      <span className='me-2 text-stone-400 font-semibold'>
        {info[path][0]}
      </span>
      {info[path][1].toUpperCase()}
    </h2>
  )
}
