import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
const Search = ({searchResults}) => {

  const router = useRouter();

  console.log(searchResults)

  //ES6 method to get the query string
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate),"dd MMMM yy")
  const formattedEndDate = format(new Date(endDate),"dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  //Normal method to get the query string
  // const placename = router.query.location;
  // const startDate = router.query.startDate;
  // const endDate = router.query.endDate;
  // const noOfGuests = router.query.noOfGuests;

  
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className='flex'>
        <section className='w-full mt-3 pl-3'>
          <p className="text-xs">300+ Stays {range} for {noOfGuests} number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden space-x-4 lg:inline-flex flex items-center justify-evenly">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResults.map(({img, location, title, description, star, price, total}) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/NKKF").
    then(
      (res) => res.json()
    )
  return {
      props: {
          searchResults,
      }
  }
}