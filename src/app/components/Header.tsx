import { Logo } from '../../../public/assets/icons/shared'
import NavLink from './NavLink'
import NavMobile from './NavMobile'

export default function Header (): JSX.Element {
  return (
    <header className='flex justify-between items-center p-6 md:p-0 md:pl-6 w-screen lg:pt-8 lg:pl-8'>
      <div>
        <Logo height={48} width={48} className='z-100'/>
      </div>
      <hr className='hidden lg:inline w-99 translate-x-12 z-30 opacity-40'></hr>
      <NavMobile />
      {/* change color */}
      <div className='hidden md:flex gap-6 text-white p-8 bg-white bg-opacity-5 text-lg z-20 lg:w-3/5 over-blur-desktop lg:pl-18 lg:pr-10 lg:justify-center'>
        <NavLink path='/' name={'Home'} index='00' />
        <NavLink path='/destination' name={'Destination'} index='01' />
        <NavLink path='/crew' name={'Crew'} index='02' />
        <NavLink path='/technology' name={'Technology'} index='03' />
      </div>
    </header>
  )
}
