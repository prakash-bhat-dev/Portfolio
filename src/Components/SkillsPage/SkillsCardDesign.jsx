import React from 'react'

const SkillsCardDesign = (props) => {
  return (
    <div >
      <div className="card cursor-pointer">
                <div className='mb-5'><span className='text-4xl'><img className='w-15' src={props.SkillsData.titleIcon} alt="" /></span></div>
                <div>
                  <h1 className='text-3xl font-semibold mb-4'>{props.SkillsData.title}</h1>
                  <p>{props.SkillsData.aboutTitle}</p>
                  </div>
            </div>
    </div>
  )
}

export default SkillsCardDesign