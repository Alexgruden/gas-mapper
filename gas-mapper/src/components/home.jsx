import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    //Use <ul> unordered list with <li> inside for list components
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4'>
        <h1 className='w-full text-3xl font-bold m-6'>GASMAPS</h1>
        <ul className='hidden md:flex'>
            <li className='p-6'>HOME</li>
            <li className='p-6'>company</li>
            <li className='p-6'>resources</li>
            <li className='p-6'>content</li>
            <li className='p-6'>shop</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-[rgb(247,221,179)]' : 'fixed left-[-100%] ease-in-out duration-700'}>
            <h1 className='w-full text-3xl font-bold m-6'>GASMAPS</h1>
            <ul className='pt-12 uppercase'>
                <li className='p-6 border-b border-b-black'>HOME</li>
                <li className='p-6 border-b border-b-black'>company</li>
                <li className='p-6 border-b border-b-black'>resources</li>
                <li className='p-6 border-b border-b-black'>content</li>
                <li className='p-6'>shop</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar