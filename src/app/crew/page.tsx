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

  return (
    <section className='crew h-screen'>
      <Header />
      <article className='page-h flex flex-col items-center justify-start text-center pb-4 px-6'>
        <Subtitle />
        <div className='flex flex-col items-center w-full'>
          <img
            className='h-52 mt-8'
            src={`/assets/images/crew/image-${normalizedName}.webp`}
            alt={currentMember.name}
            title={currentMember.name}
          />
          <hr className='w-full opacity-40'></hr>
        </div>
        <nav className='flex gap-4 my-8'>
          {data.crew.map(e =>
            <div
              onClick={() => { handleMember(e.name) }}
              key={e.name}
              className={`w-3 h-3 bg-white rounded-full opacity-50 ${e.name === currentMember.name && 'opacity-100'}`}
            >
            </div>
          )}
        </nav>
        <div>
          <div className='flex flex-col gap-1'>
            <p className='font-bell text-stone-400 text-lg'>{currentMember.role.toUpperCase()}</p>
            <h1 className='font-bell text-2xl tracking-wider mb-4'>{currentMember.name.toUpperCase()}</h1>
          </div>
          <p className='alter-font font-thin mb-8 tracking-widest'>{currentMember.bio}</p>
        </div>
      </article>
    </section>
  )
}
