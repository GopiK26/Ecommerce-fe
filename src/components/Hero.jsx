import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 bg-[#121212] rounded-2xl border border-white mb-10'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8'>
        <div className='text-[#414141] max-w-md'>
          <div className='flex items-center gap-3 mb-4'>
            <p className='w-12 h-[2px] bg-white'></p>
            <p className='font-medium text-sm text-white md:text-base tracking-wider'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-white  text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6'>Latest Arrivals</h1>
          <div className='flex items-center gap-3 hover:gap-5 transition-all duration-300 cursor-pointer group'>
            <p className='font-semibold text-sm text-white md:text-base tracking-wider'>SHOP NOW</p>
            <p className='w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-300'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2 overflow-hidden'>
        <img 
          className='w-full h-full object-cover transition-transform duration-700 hover:scale-110 rounded-2xl' 
          src={assets.hero_img} 
          alt="Latest Arrivals" 
        />
      </div>
    </div>
  )
}

export default Hero
