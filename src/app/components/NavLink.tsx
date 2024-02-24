'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavLinkProps {
  path: string
  index?: string
  name: string
}

export default function NavLink ({ path, index, name }: NavLinkProps): JSX.Element {
  const currentPath = usePathname()

  return (
    <Link href={path}>
      <h2 className={`alter-font font-thin tracking-widest ${path === currentPath && 'md:underline'} md:underline-offset-custom md:decoration-4 md:text-sm md:hover:underline md:hover:decoration-stone-400`}>
        <span className='inline md:hidden lg:inline font-semibold lg:text-lg'>{index}</span>
        <span className='text-stone-200 font-normal lg:text-lg lg:font-thin'> {name.toUpperCase()}</span>
      </h2>
    </Link>
  )
}
