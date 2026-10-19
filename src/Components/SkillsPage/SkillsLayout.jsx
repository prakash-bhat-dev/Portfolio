import React from 'react'
import SkillsCardDesign from './SkillsCardDesign'
import SkillsData from '../../data/SkillsData'
const SkillsLayout = () => {
  
  return (
<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
   {SkillsData.map(function (ele) {

    return <SkillsCardDesign key={ele.id} SkillsData={ele}/>
})}
</div>
  )
}

export default SkillsLayout