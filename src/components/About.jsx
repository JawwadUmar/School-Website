import React from 'react'
import Vision from '../assets/20943892 [Converted].svg'
import Goal from '../assets/Goal.svg'

const About = () => {
  return (
    <div className='mt-12 flex-col'>
      <h1 className='text-4xl font-bold m-6 text-center text-[#30475E]'>Our Vision</h1>
      <div className='md:flex'>
      <img className='w-1/2 m-auto md:w-1/3 md:h-full' src={Vision} alt="" />
       <p className='text-wrap w-2/3 m-auto text-xl p-12 mt-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore, quod recusandae itaque est magni qui, quae expedita fugiat sunt illo. Deleniti amet quam exercitationem quibusdam debitis, ad nesciunt voluptatem obcaecati doloremque iste dolores eligendi illo dolore quisquam animi architecto totam facilis esse earum. Voluptates ad dolores eaque. Sint, explicabo sequi minima modi provident dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum nobis, doloribus aperiam dicta corrupti vel animi obcaecati minus labore, omnis veritatis sunt porro. Cupiditate voluptate maiores modi necessitatibus quos!</p>
       </div>
      <h1 className='text-4xl font-bold m-6 text-center text-[#30475E]'>Our Goals</h1>
      <div className='md:flex justify-end'>
      <img className='w-1/2 m-auto md:w-1/3 md:h-full order-2' src={Goal} alt="" />
      <p className='text-wrap w-2/3 m-auto text-xl p-12 mt-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore, quod recusandae itaque est magni qui, quae expedita fugiat sunt illo. Deleniti amet quam exercitationem quibusdam debitis, ad nesciunt voluptatem obcaecati doloremque iste dolores eligendi illo dolore quisquam animi architecto totam facilis esse earum. Voluptates ad dolores eaque. Sint, explicabo sequi minima modi provident dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum nobis, doloribus aperiam dicta corrupti vel animi obcaecati minus labore, omnis veritatis sunt porro. Cupiditate voluptate maiores modi necessitatibus quos!</p>
       </div>
    </div>
    
  )
}

export default About



