import React, { useState } from 'react'

const Navbar = () => {

  const [dropdown, setdropdown] = useState(false);

  const handleMouseOver = ()=> {
    setdropdown(!dropdown);
  }

  return (
    <nav className='flex justify-between items-center mx-auto px-4 h-24 text-[#30475E] bg-white w-full sticky top-0 z-50'>
      <h1 className='w-full text-3xl font-bold  '>St Mary High School</h1>
        <ul className='list-none flex text-xl'>
            <li className='p-4 btn'>Home</li>
            <li className='p-4 btn'>About</li>
            <li className='p-4 btn'>Contact</li>
            <li className='p-4 btn' onMouseEnter = {handleMouseOver} onMouseLeave = {handleMouseOver}>More
            
            {dropdown && (
               <ul className='relative top-12 bg-white border border-gray-200 '>
               <li className='p-2'>Admission</li>
               <li className='p-2'>Gallery</li>
               <li className='p-2'>Alumni</li>
               <li className='p-2'>Calendar</li>
             </ul>
            )}
            </li>
            <li className='p-4 btn'>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar

