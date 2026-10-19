import React from 'react'
import HeroText from './HeroText'
import Overall from './Overall'
import Buttons from './Buttons'
const LeftContent = () => {
    return (
        <div className='flex flex-col items-center lg:items-start'>
       <HeroText /> 
    <Overall />
<Buttons />
        </div>
    )
}

export default LeftContent