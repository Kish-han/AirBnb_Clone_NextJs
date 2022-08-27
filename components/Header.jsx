import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon
} from "@heroicons/react/solid"


const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-5 md:px-10' >
            {/* left */}
            <div className=" relative flex items-center h-10 my-auto  ">
                <Image
                    className='cursor-pointer'
                    src={"https://bit.ly/3PXHbdI"}
                    layout="fill"
                    objectFit='contain'
                    objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2 shadow-sm md:shadow-md">
                <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your Search' />
                <SearchIcon className='h-8 text-white bg-red-400 rounded-full p-2 mr-2 cursor-pointer hidden md:inline-flex' />
            </div>
            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-block cursor-pointer">Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className="flex border-2 rounded-full p-2 space-x-2">
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>
            </div>
        </header>
    )
}

export default Header