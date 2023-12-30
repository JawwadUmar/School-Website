// import React from 'react'

// const Navbar = () => {
//   // const navbarHeight = 24; 
//   return (
//     <nav className='flex justify-between items-center mx-auto px-4 h-24 max-w-[1240px] text-[#DDDDDD]'>
//       <h1 className='w-full text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>St Mary High School</h1>
//         <ul className='list-none flex text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
//             <li className='p-4 btn'>Home</li>
//             <li className='p-4 btn'>About</li>
//             <li className='p-4 btn'>Announcements</li>
//             <li className='p-4 btn'>Admission</li>
//             <li className='p-4 btn'>Contact</li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mx-auto px-4 h-24 max-w-[1240px] text-[#30475E]'>
      <h1 className='w-full text-3xl font-bold  '>St Mary High School</h1>
        <ul className='list-none flex text-xl'>
            <li className='p-4 btn'>Home</li>
            <li className='p-4 btn'>About</li>
            <li className='p-4 btn'>Announcements</li>
            <li className='p-4 btn'>Admission</li>
            <li className='p-4 btn'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar