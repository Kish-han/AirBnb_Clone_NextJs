import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
      <section className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]'>
          <Image src={"https://bit.ly/3TiJzPh"} alt="" layout="fill" objectFit='cover' />
          <div className="absolute top-1/2 w-full text-center">
              <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
              <button className="text-sm sm:text-lg text-purple-500 bg-white px-6 sm:px-9 py-2 sm:py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I&apos;m flexiable</button>
          </div>
      </section>
  )
}

export default Banner