import Header from '../components/Header'
import data from '../../../data.json'
import '../globals.css'

export default function DestinationPage (): JSX.Element {
  const [dest] = data.destinations

  /* {
      "name": "Moon",
      "images": {
        "png": "./src/app/assets/images/destination/image-moon.png",
        "webp": "./src/app/assets/images/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    }, */

  return (
    <section className='destination h-screen'>
      <Header />
      <article className='min-h-full flex flex-col items-center justify-between text-center'>
        <p>
          <span>01</span>{'pick your destination'.toUpperCase()}
        </p>
        <img src='/assets/images/destination/image-moon.webp' />
        <nav>
          <button></button>
        </nav>
        <h1>{dest.name.toUpperCase()}</h1>
        <p>{dest.description}</p>
        <hr></hr>
        <h2>{'AVG. DISTANCE'.toUpperCase()}</h2>
        <p>{dest.distance}</p>
        <h2>{'EST. TRAVEL TIME'.toUpperCase()}</h2>
        <p>{dest.travel}</p>
      </article>
    </section>
  )
}
