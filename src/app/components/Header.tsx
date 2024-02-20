import { Logo, IconHamburger } from '../assets/icons/shared'

export default function Header (): JSX.Element {
  return (
    <header className='flex justify-between items-center p-6 w-screen'>
      <Logo height={48} width={48}/>
      <IconHamburger height={24} width={21} />
    </header>
  )
}
