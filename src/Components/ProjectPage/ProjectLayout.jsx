import React from 'react'
import ProjectsData from '../../data/ProjectsData'
import ProjectCardDesign from './ProjectCardDesign'
const ProjectLayout = () => {
    
    return (
        <div className='grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2'>
           {ProjectsData.map(function(ele){
              return <ProjectCardDesign PorjectsData={ele} />
           })}
        </div>
    )
}

export default ProjectLayout