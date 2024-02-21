'use client'

import Header from '../components/Header'
import Subtitle from '../components/Subtitle'
import data from '../../../data.json'
import { useState } from 'react'

export default function TechnologyPage (): JSX.Element {
  const initialTech = data.technology.filter(e => e.name === 'Launch vehicle')
  const [currentTech, setCurrentTech] = useState(initialTech[0])

  const handleTech = (name: string): void => {
    const newTech = data.technology.filter(e => e.name === name)
    setCurrentTech(newTech[0])
  }

  const normalizedName = currentTech.name.toLowerCase().replace(' ', '-')

  return (
    <section className='technology h-screen'>
      <Header />
      <article className='page-h flex flex-col items-center justify-start text-center pb-4'>
        <Subtitle />
        <div className='flex flex-col items-center w-full'>
          <img
            className='h-40 mt-8'
            src={`/assets/images/technology/image-${normalizedName}-landscape.jpg`}
            alt={currentTech.name}
            title={currentTech.name}
          />
        </div>
        <nav className='flex gap-4 my-8'>
          {data.technology.map((e, i) =>
            <div
              onClick={() => { handleTech(e.name) }}
              key={e.name}
              className={`font-bell flex justify-center items-center w-11 h-11 rounded-full border border-opacity-40 border-white ${e.name === currentTech.name ? 'bg-white text-stone-950' : 'bg-transparent text-white'}`}
            >{i + 1}
            </div>
          )}
        </nav>
        <div>
          <div className='flex flex-col gap-1'>
            <p className='alter-font opacity-80 tracking-widest'>{'The terminology...'.toUpperCase()}</p>
            <h1 className='font-bell text-2xl tracking-wider mb-4'>{currentTech.name.toUpperCase()}</h1>
          </div>
          <p className='alter-font font-thin mb-8 tracking-widest px-6'>{currentTech.description}</p>
        </div>
      </article>
    </section>
  )
}
