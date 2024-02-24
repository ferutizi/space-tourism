'use client'

import Header from '../components/Header'
import Subtitle from '../components/Subtitle'
import data from '../../../data.json'
import { useState } from 'react'

export default function MemberPage (): JSX.Element {
  const initialMember = data.crew.filter(e => e.name === 'Douglas Hurley')
  const [currentMember, setCurrentMember] = useState(initialMember[0])

  const handleMember = (name: string): void => {
    const newMember = data.crew.filter(e => e.name === name)
    setCurrentMember(newMember[0])
  }

  const normalizedName = currentMember.name.toLowerCase().replace(' ', '-')

  const NavComponent = (): JSX.Element => {
    return (
        <nav className='flex gap-4 my-8 md:my-2 justify-center lg:justify-start'>
        {data.crew.map(e =>
          <div
            onClick={() => { handleMember(e.name) }}
            key={e.name}
            className={`w-3 h-3 bg-white rounded-full lg:w-4 lg:h-4 ${e.name === currentMember.name ? 'opacity-100' : 'opacity-50'}`}
          >
          </div>
        )}
        </nav>
    )
  }

  const DetailsComponent = (): JSX.Element => {
    return (
      <div>
        <div className='flex flex-col gap-1 md:gap-2 lg:gap-4'>
          <p className='font-bell text-stone-400 text-lg md:text-2xl lg:text-3xl'>{currentMember.role.toUpperCase()}</p>
          <h1 className='font-bell text-2xl tracking-wider mb-4 md:text-4xl lg:text-5xl lg:w-max'>{currentMember.name.toUpperCase()}</h1>
        </div>
        <p className='alter-font font-thin mb-8 tracking-widest md:px-20 lg:px-0 max-w-xl lg:max-w-md lg:text-lg'>{currentMember.bio}</p>
      </div>
    )
  }

  return (
    <section className='crew h-screen'>
      <Header />
      <Subtitle />
      <article className='page-h flex flex-col items-center justify-start text-center pb-4 px-6 md:flex-col-reverse md:justify-between md:pb-0 md:pt-6 page-h-tablet lg:flex-row-reverse lg:px-40 page-h-desktop lg:justify-center lg:gap-40'>
        <div className='flex flex-col items-center'>
          <img
            className='h-52 mt-8 md:h-100 lg:h-full lg:m-0'
            src={`/assets/images/crew/image-${normalizedName}.webp`}
            alt={currentMember.name}
            title={currentMember.name}
            />
          <hr className='w-full opacity-40 lg:hidden'></hr>
        </div>
        <div className='md:flex md:flex-col-reverse lg:text-left lg:gap-24 lg:pb-0'>
          <NavComponent />
          <DetailsComponent />
        </div>
      </article>
    </section>
  )
}
