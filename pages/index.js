import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCards from '../components/MediumCards'
import SmallCards from '../components/SmallCards'
import styles from '../styles/Home.module.css'

export default function Home({ expoloreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnb Nextclone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://toppng.com/uploads/preview/airbnb-a-icon-vector-logo-airbnb-logo-vector-115628719165xnp0e2zd1.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:p-16'>
        {/* Explore Nearby */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4'>
            {/* Fetch data using Api made using JsonKeeper without destructure it */}
            {expoloreData?.map((item) => (
              <SmallCards
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'> Live Anywhere </h2>
          <div className='flex overflow-x-scroll scrollbar-hide overflow-y-hidden p-8 space-x-4'>
            {/* Fetch data using Api made using JsonKeeper and destructure it */}
            {cardsData?.map(({ img, title }) => (
              <MediumCards
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img={"https://bit.ly/3KtgfBt"}
          title="The Greatest Outdoors"
          description={"Wishlists curated by Airbnb"}
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}

{/* Pull some data from a server (Static Rending) */ }

export async function getStaticProps() {
  const expoloreData = await fetch('https://jsonkeeper.com/b/BO8I').then(
    (res) => res.json()
  )

  const cardsData = await fetch("https://jsonkeeper.com/b/OKUS").
    then(
      (
        (res) => res.json()
      )
    )
  return {
    props: {
      expoloreData,
      cardsData,
    }
  }
}
