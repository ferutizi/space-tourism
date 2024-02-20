'use client'

import Header from '../components/Header'
import data from '../../../data.json'
import '../globals.css'
import Subtitle from '../components/Subtitle'
import { useState } from 'react'

export default function DestinationPage (): JSX.Element {
/*   const destinations = {

  } */

  const [currentDestination, setCurrentDestination] = useState()
  const [dest] = data.destinations

  return (
    <section className='destination min-h-screen'>
      <Header />
      <article className='min-h-screen flex flex-col items-center justify-between text-center pb-4 px-6'>
        <Subtitle />
        <img
          className='h-48'
          src='/assets/images/destination/image-moon.webp'
          alt={dest.name}
          title={dest.name}
        />
        <nav className='flex gap-4 my-2'>
          {data.destinations.map(e =>
            <button
              key={e.name}
              className='alter-font tracking-widest text-sm font-thin'
            >{e.name.toUpperCase()}
            </button>
          )}
        </nav>
        <h1 className='text-5xl'>{dest.name.toUpperCase()}</h1>
        <p className='font-thin'>{dest.description}</p>
        <hr className='w-full opacity-40 my-4'></hr>
        <h3 className='alter-font text-sm font-thin tracking-widest opacity-80'>{'Avg. distance'.toUpperCase()}</h3>
        <p className='font-bell text-2xl opacity-80'>{dest.distance.toUpperCase()}</p>
        <h3 className='alter-font text-sm font-thin tracking-widest opacity-80'>{'Est. travel time'.toUpperCase()}</h3>
        <p className='font-bell text-2xl opacity-80 mb-6'>{dest.travel.toUpperCase()}</p>
      </article>
    </section>
  )
}
