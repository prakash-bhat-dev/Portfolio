import React from 'react'

const Overall = () => {
    return (
        <div className='mt-10 grid grid-cols-3 gap-10'>
            <div className=" flex flex-col items-center justify-center  pt-2.5 pb-2.5 pl-5 pr-5 bg-[linear-gradient(120deg,rgba(10,25,58,0.88),rgba(15,45,95,0.72))] backdrop-blur-[20px] border border-[rgba(96,165,250,0.22)] rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span><h1 className='text-[50px] lg:text-[55px] font-black'>8</h1></span>
                <span className='text-[30px] font-black text text-[#7635E3]'>+</span>
                <span className='uppercase text-gray-400 lg:text-[16px] font-semibold'>Projects</span>
            </div>
             <div className=" flex flex-col items-center justify-center  pt-2.5 pb-2.5 pl-5 pr-5 bg-[linear-gradient(120deg,rgba(10,25,58,0.88),rgba(15,45,95,0.72))] backdrop-blur-[20px] border border-[rgba(96,165,250,0.22)] rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span><h1 className='lg:text-[55px] font-black'>4</h1></span>
                
                <span className='uppercase text-gray-400 text-[12px] lg:text-[15px] font-semibold'>core skills</span>
            </div>
             <div className=" flex flex-col items-center justify-center pt-2.5 pb-2.5 pl-5 pr-5 bg-[linear-gradient(120deg,rgba(10,25,58,0.88),rgba(15,45,95,0.72))] backdrop-blur-[20px] border border-[rgba(96,165,250,0.22)] rounded-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span><h1 className='lg:text-[55px] font-black'>2</h1></span>
               
                <span className='uppercase text-gray-400 lg:text-[15px] font-semibold'>top clones</span>
            </div>
        </div>
    )
}

export default Overall