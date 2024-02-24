'use client'

import Header from '../components/Header'
import Subtitle from '../components/Subtitle'
import data from '../../../data.json'
import { useState } from 'react'
import useWidth from '../hooks/useWidth'

export default function TechnologyPage (): JSX.Element {
  const initialTech = data.technology.filter(e => e.name === 'Launch vehicle')
  const [currentTech, setCurrentTech] = useState(initialTech[0])

  const handleTech = (name: string): void => {
    const newTech = data.technology.filter(e => e.name === name)
    setCurrentTech(newTech[0])
  }

  // Current user width screen
  const currentWidth = useWidth()

  const normalizedName = currentTech.name.toLowerCase().replace(' ', '-')

  const NavComponent = (): JSX.Element => {
    return (
      <nav className='flex gap-4 my-8 md:my-2 lg:flex-col lg:gap-8 lg:order-1'>
        {data.technology.map((e, i) =>
          <div
            onClick={() => { handleTech(e.name) }}
            key={e.name}
            className={`font-bell flex justify-center items-center w-11 h-11 rounded-full border border-opacity-40 border-white md:w-14 md:h-14 md:text-xl lg:h-20 lg:w-20 lg:text-3xl cursor-pointer ${e.name === currentTech.name ? 'bg-white text-stone-950' : 'bg-transparent text-white hover:border-opacity-100'}`}
          >{i + 1}
          </div>
        )}
      </nav>
    )
  }

  const DetailsComponent = (): JSX.Element => {
    return (
      <div className='mb-6 lg:text-start'>
        <div className='flex flex-col gap-1 lg:gap-6'>
          <p className='alter-font opacity-80 tracking-widest md:font-thin md:text-lg md:mb-2'>{'The terminology...'.toUpperCase()}</p>
          <h1 className='font-bell text-2xl tracking-wider mb-4 md:text-4xl lg:text-5xl'>{currentTech.name.toUpperCase()}</h1>
        </div>
        <p className='alter-font font-thin mb-8 tracking-widest px-6 md:px-40 lg:max-w-md lg:text-lg lg:px-0'>{currentTech.description}</p>
      </div>
    )
  }

  return (
    <section className='technology h-screen'>
      <Header />
      <Subtitle />
      <article className='page-h flex flex-col items-center justify-start text-center pb-4 page-h-tablet md:justify-around lg:flex-row-reverse page-h-desktop lg:justify-center lg:gap-32 lg:pb-0'>
        <div className='flex flex-col items-center w-full lg:w-100'>
          <img
            className='h-40 mt-8 md:w-full md:h-full lg:mt-0'
            src={`/assets/images/technology/image-${normalizedName}-${currentWidth <= 1024 ? 'landscape' : 'portrait'}.jpg`}
            alt={currentTech.name}
            title={currentTech.name}
          />
        </div>
        <NavComponent />
        <DetailsComponent />
      </article>
    </section>
  )
}
