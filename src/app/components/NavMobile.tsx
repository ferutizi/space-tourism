'use client'

import { IconHamburger, IconClose } from '../../../public/assets/icons/shared'
import NavLink from './NavLink'
import { useState } from 'react'

export default function NavMobile (): JSX.Element {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
      <>
        {openMenu
          ? <section className='md:hidden over-blur h-screen w-60 top-0 right-0 absolute z-10'>
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
          : <button className='md:hidden' type='button' onClick={() => { setOpenMenu(!openMenu) }}><IconHamburger height={24} width={21} /></button>
        }
      </>
  )
}
