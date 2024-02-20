import Header from './components/Header'
import './globals.css'

export default function Home (): JSX.Element {
  const subtitle = 'So, you want to travel to'

  return (
    <section className='home h-screen'>
      <Header />
      <main className="page-h flex flex-col items-center text-center justify-between p-6">
        <article>
          <p className='alter-font text-lg font-thin tracking-widest'>{subtitle.toUpperCase()}</p>
          <h1 className='text-7xl my-2'>SPACE</h1>
          <p className='font-light'>Let’s face it; if you want to go to space,
            you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because
            we’ll give you a truly out of this world experience!
          </p>
        </article>
        <div className='font-bell flex justify-center items-center bg-white text-xl w-36 h-36 text-black rounded-full mb-6'>
          EXPLORE
        </div>
      </main>
    </section>
  )
}
