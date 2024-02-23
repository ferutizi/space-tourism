'use client'

import Header from '../components/Header'
import data from '../../../data.json'
import '../globals.css'
import Subtitle from '../components/Subtitle'
import { useState } from 'react'
import useWidth from '../hooks/useWidth'

export default function DestinationPage (): JSX.Element {
  const initialDest = data.destinations.filter(e => e.name === 'Moon')
  const [currentDest, setCurrentDest] = useState(initialDest[0])

  // Current user width screen
  const currentWidth = useWidth()

  const underlineText = 'underline underline-offset-8 font-normal decoration-4'

  const handleDestination = (name: string): void => {
    const newDestination = data.destinations.filter(e => e.name === name)
    setCurrentDest(newDestination[0])
  }

  const MainContent = (): JSX.Element => {
    return (
      <>
        <nav className='flex gap-4 my-2 md:gap-16 lg:gap-8'>
          {data.destinations.map(e =>
            <button
              onClick={() => { handleDestination(e.name) }}
              key={e.name}
              className={`alter-font ${e.name === currentDest.name && underlineText} tracking-widest text-sm font-thin md:text-xl lg:text-base`}
            >{e.name.toUpperCase()}
            </button>
          )}
        </nav>
        <h1 className='text-5xl md:text-7xl'>{currentDest.name.toUpperCase()}</h1>
        <p className='font-thin md:px-20 lg:px-0 max-w-96 md:max-w-none'>{currentDest.description}</p>
        <hr className='w-full opacity-40 my-3 md:w-9/12 md:my-0'></hr>
        <div className='mb-6 flex flex-col gap-5 md:flex-row'>
          <div className='flex flex-col gap-2'>
            <h3 className='alter-font text-sm font-thin tracking-widest opacity-80 md:text-md'>{'Avg. distance'.toUpperCase()}</h3>
            <p className='font-bell text-2xl opacity-80 md:text-3xl'>{currentDest.distance.toUpperCase()}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='alter-font text-sm font-thin tracking-widest opacity-80 md:text-md'>{'Est. travel time'.toUpperCase()}</h3>
            <p className='font-bell text-2xl opacity-80 md:text-3xl'>{currentDest.travel.toUpperCase()}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <section className='destination min-h-screen md:h-screen'>
      <Header />
      <Subtitle />
      <article className='min-h-screen flex flex-col items-center justify-between text-center pb-4 px-6 md:min-h-1 md:justify-around page-h-tablet lg:flex-row lg:mx-40 lg:gap-32 page-h-desktop lg:min-h-1 lg:pb-0'>
        <img
          className='h-48 md:h-72 md:w-72 mt-6 lg:w-98 lg:h-98'
          src={`/assets/images/destination/image-${currentDest.name.toLowerCase()}.webp`}
          alt={currentDest.name}
          title={currentDest.name}
        />
          {currentWidth !== undefined && currentWidth <= 1024
            ? <MainContent />
            : <div className='lg:flex lg:flex-col lg:items-left lg:w-1/3 lg:text-left lg:gap-6'><MainContent /></div>
          }
      </article>
    </section>
  )
}
