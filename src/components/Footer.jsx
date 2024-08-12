import React from 'react'
import { FaGithubSquare, } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>RaferaX</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-6xl'>
                <a href='https://github.com/RaferaX' className='hover:scale-110 transition-transform duration-300'>
                <FaGithubSquare/></a>
                <a href='https://www.linkedin.com/in/rafael-leonardo-820b4328a/' className='hover:scale-110 transition-transform duration-300'>
                  <FaLinkedin/></a>
            </div>
        </div>

        <p className='text-gray-400'>Rafael Silva @ - 2024</p>

    </div>
  )
}

export default Footer