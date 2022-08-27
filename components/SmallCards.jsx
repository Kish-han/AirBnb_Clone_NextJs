import React from 'react'
import Image from 'next/image'

const SmallCards = ({ img, location, distance }) => {
    return (
        <div className='flex items-center m-3 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out'>
            <section className="relative h-16 w-16">
                <Image
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </section>
            <section>
                <h2>{location}</h2>
                <h3>{distance}</h3>
            </section>
        </div>
    )
}

export default SmallCards