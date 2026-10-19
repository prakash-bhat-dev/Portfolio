import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const HeroSection = () => {
  return (
    <div className='grid container md:grid-cols-1 place-items-center lg:grid-cols-2 '>
<LeftContent />
<RightContent />
    </div>
  )
}

export default HeroSection