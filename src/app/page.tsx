'use client'

import Header from './components/Header'
import './globals.css'

export default function Home (): JSX.Element {
  const subtitle = 'So, you want to travel to'

  return (
    <section className='home h-screen'>
      <Header />
      <main className="page-h flex flex-col items-center text-center justify-between p-6 md:justify-around lg:flex-row home-h-desktop lg:items-center">
        <article className='md:w-min lg:text-left'>
          <p className='alter-font text-lg font-thin tracking-widest lg:text-2xl'>{subtitle.toUpperCase()}</p>
          <h1 className='text-7xl my-2 md:text-10xl lg:my-4 lg:text-9xl'>SPACE</h1>
          <p className='font-thin tracking-widest'>Let’s face it; if you want to go to space,
            you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because
            we’ll give you a truly out of this world experience!
          </p>
        </article>
        <div className='font-bell flex justify-center items-center bg-white text-xl w-36 h-36 text-black rounded-full mb-6 md:w-64 md:h-64 md:text-4xl lg:w-56 lg:h-56 lg:mb-0 hover-shadow'>
          EXPLORE
        </div>
      </main>
    </section>
  )
}
