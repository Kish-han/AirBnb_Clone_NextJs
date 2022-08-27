import React, { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from "@heroicons/react/solid"


const Header = () => {
    const [searchInput, setSearchInput] = useState("")

    const [startDate, setStartDate] = useState(new Date())

    const [endDate, setEndDate] = useState(new Date())

    const [noOfGuests, setNoOfGuests] = useState(2)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-5 md:px-10' >
            {/* left */}
            <div className=" relative flex items-center h-10 my-auto  ">
                <Image
                    className='cursor-pointer'
                    src={"https://bit.ly/3PXHbdI"}
                    alt=""
                    layout="fill"
                    objectFit='contain'
                    objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2 shadow-sm md:shadow-md">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your Search' />
                <SearchIcon className='h-8 text-white bg-red-400 rounded-full p-2 mr-2 cursor-pointer hidden md:inline-flex' />
            </div>
            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-block cursor-pointer">Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className="flex border-2 rounded-full p-2 space-x-2">
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>
            {searchInput && (
                <div className='flex flex-col col-span-3 md:mx-auto mt-5'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type="number"
                            value={noOfGuests}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <button onClick={()=>setSearchInput("")} className='text-gray-500 '>Cancel</button>
                        <button className='text-red-400'>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header