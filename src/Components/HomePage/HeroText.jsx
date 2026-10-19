import React from 'react'

const HeroText = () => {
  return (
    <div>
            <div className='text-cyan-400 text-center  border-cyan-400 inline-block rounded-4xl  pl-6 pr-6 font-semibold text-2xl capitalize border  mt-10 mb-10'>
                <div className='flex justify-center items-center pt-2 pb-2'>
                    <span className='w-2 h-2  inline-block mr-2 bg-cyan-400 rounded-full'></span><span className='inline-block text-[18px] uppercase  '>frontend developer</span>
                </div>
            </div>
            <div>
                <h1 className='text-7xl font-black leading-none text-center lg:text-left'>Hi, i<span className='font-bold bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent'>'m <br />Prakash Bhat</span>
                </h1>
                <p className='text-[#94a3b8] text-[17px] pr-5 mt-5 leading-<4> text-center lg:text-left'>Crafting pixel-perfect, interactive web experiences
                    with modern HTML, CSS & JavaScript.</p>
            </div>
    </div>
  )
}

export default HeroText