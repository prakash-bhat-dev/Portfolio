import React from 'react'
import AboutData from '../../data/AboutData'

const AboutCards = (props) => {

  return (
    <div>
      <div className="card cursor-pointer">
          <div className='mb-5'><span className='text-4xl'>{props.AboutData.AboutIcon}</span></div>
          <div>
            <h1 className='text-3xl font-semibold mb-4'>{props.AboutData.AboutTitle}</h1>
            <p>{props.AboutData.TitleInfo}</p>
            </div>
      </div>
    </div>
  )
}

export default AboutCards