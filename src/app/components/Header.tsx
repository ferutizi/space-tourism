import { Logo } from '../../../public/assets/icons/shared'
import NavLink from './NavLink'
import NavMobile from './NavMobile'

export default function Header (): JSX.Element {
  return (
    <header className='flex justify-between items-center p-6 md:p-0 md:pl-6 w-screen'>
      <Logo height={48} width={48}/>
      <NavMobile />
      {/* change color */}
      <div className='hidden md:flex gap-6 text-white p-8 bg-slate-900 text-lg z-20'>
        <NavLink path='/' name={'Home'} />
        <NavLink path='/destination' name={'Destination'} />
        <NavLink path='/crew' name={'Crew'} />
        <NavLink path='/technology' name={'Technology'} />
      </div>
    </header>
  )
}
