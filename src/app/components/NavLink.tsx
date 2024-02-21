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
      <h2 className={`alter-font font-thin tracking-widest ${path === currentPath && 'md:underline'} md:underline-offset-custom md:decoration-4 md:text-sm`}>
        <span className='pr-4 font-semibold'>{index}</span>
        {name.toUpperCase()}
      </h2>
    </Link>
  )
}
