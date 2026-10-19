import React from 'react'
import Card from './Card'
import AboutData from '../../data/AboutData'
const AboutCards = () => {

  return (
 <div className='grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3 p'>
{AboutData.map(function (ele) {

    return <Card key={ele.id} AboutData={ele}/>
})}
 </div>
  )
}

export default AboutCards