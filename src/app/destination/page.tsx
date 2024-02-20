import Header from '../components/Header'
import data from '../../../data.json'
import '../globals.css'
import Subtitle from '../components/Subtitle'

export default function DestinationPage (): JSX.Element {
  const [dest] = data.destinations

  return (
    <section className='destination h-screen'>
      <Header />
      <article className='min-h-full flex flex-col items-center justify-between text-center p-6'>
        <Subtitle />
        <img
          className='h-48'
          src='/assets/images/destination/image-moon.webp'
          alt={dest.name}
          title={dest.name}
        />
        <nav>
          <button></button>
        </nav>
        <h1>{dest.name.toUpperCase()}</h1>
        <p>{dest.description}</p>
        <hr></hr>
        <h2>{'Avg. distance'.toUpperCase()}</h2>
        <p>{dest.distance}</p>
        <h2>{'Est. travel time'.toUpperCase()}</h2>
        <p>{dest.travel}</p>
      </article>
    </section>
  )
}
