'use client'

import { useState } from 'react'
import { Logo, IconHamburger, IconClose } from '../../../public/assets/icons/shared'
import NavLink from './NavLink'

export default function Header (): JSX.Element {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <header className='flex justify-between items-center p-6 w-screen'>
      <Logo height={48} width={48}/>
      <>
        {openMenu
          ? <section className='over-blur h-screen w-60 top-0 right-0 absolute z-10'>
            <button
              className='absolute right-5 top-9'
              type='button'
              onClick={() => { setOpenMenu(!openMenu) }}
            >
              <IconClose height={24} width={24} />
            </button>
            <div className='flex flex-col gap-6 text-white mt-32 pl-8 text-lg z-20'>
              <NavLink path='/' index='00' name={'Home'} />
              <NavLink path='/destination' index='01' name={'Destination'} />
              <NavLink path='/crew' index='02' name={'Crew'} />
              <NavLink path='/technology' index='03' name={'Technology'} />
            </div>
          </section>
          : <button type='button' onClick={() => { setOpenMenu(!openMenu) }}><IconHamburger height={24} width={21} /></button>
        }
      </>
    </header>
  )
}
