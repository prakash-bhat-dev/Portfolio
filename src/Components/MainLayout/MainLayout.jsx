import React from 'react'
import Home from '../HomePage/Home'
import About from '../AboutPage/About'
import Skills from '../SkillsPage/Skills'
import Project from '../ProjectPage/Project'
const main = (props) => {

  return (
    <main className='p-2'>
<Home />
<About />
<Skills />
<Project />
    </main>
  )
}

export default main