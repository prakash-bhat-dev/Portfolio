import React from 'react'
import Github from '../../assets/github.svg'
const Buttons = () => {
    return (
        <div className='mt-10'>
            <div className='gap-6 flex justify-center lg:justify-start'>
                <button className='bg-[#018FFF] pt-3.5 pb-3.5 pl-8.5 pr-8.5 cursor-pointer rounded-full font-semibold transition-transform duration-200 ease-in-out  hover:shadow-[0_0_25px_5px_rgba(1,143,255,0.6)]
  hover:-translate-y-1'>View Work</button>
                <button className='bg-[#018FFF] pt-3.5 pb-3.5 pl-8.5 pr-8.5 cursor-pointer rounded-full font-semibold flex justify-center items-center gap-2 transition-transform duration-200 hover:shadow-[0_0_25px_5px_rgba(1,143,255,0.6)]
  hover:-translate-y-1'><img src={Github} className='h-8 ' alt="" />Github</button>
            </div>
        </div>
    )
}

export default Buttons