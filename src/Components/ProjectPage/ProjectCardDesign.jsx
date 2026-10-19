import React from 'react'

const ProjectCardDesign = (props) => {
   console.log(props)
  return (
    <div className="card cursor-pointer">
              <div className='mb-5'><span className='text-4xl'><img className='w-20' src={props.PorjectsData.projectIcon} alt="" /></span></div>
              <div>
                <h1 className='text-3xl font-semibold mb-4'>{props.PorjectsData.projectTitle}</h1>
                <p>{props.PorjectsData.aboutProject}</p>
                <button className='mt-10'><a href="" className='bg-blue-500 rounded-full pr-4 pl-4 pt-2 pb-2 text-2xl font-semibold'>Github</a></button>
                </div>
          </div>
  )
} 

export default ProjectCardDesign