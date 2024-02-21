import Link from 'next/link'

interface NavLinkProps {
  path: string
  index: string
  name: string
}

export default function NavLink ({ path, index, name }: NavLinkProps): JSX.Element {
  return (
    <Link href={path}>
      <h2 className='alter-font font-thin tracking-widest'>
        <span className='pr-4 font-semibold'>{index}</span>
        {name.toUpperCase()}
      </h2>
    </Link>
  )
}
