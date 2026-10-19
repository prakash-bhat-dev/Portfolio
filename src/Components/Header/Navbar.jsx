import React from 'react'
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
     
            <header>
                <nav className='navbar-section container fixed m-auto flex justify-between h-25 items-center'>
                    <div className="logo-container">
                        <img className='h-25' src={Logo} alt="" />
                    </div>
                    <div className="tab-item">
                        <ul className='flex gap-10 text-xl'>
                          <li><a href="#home" className='inline-block  pl-2 pr-2 border-b-4 border-transparent hover:border-[#018FFF]'>Home</a></li>
                          <li><a href="#about" className='inline-block  pl-2 pr-2 border-b-4 border-transparent hover:border-[#018FFF]'>About</a></li>
                          <li><a href="#skills" className='inline-block  pl-2 pr-2 border-b-4 border-transparent hover:border-[#018FFF]'>Skills</a></li>
                          <li><a href="#project" className='inline-block  pl-2 pr-2 border-b-4 border-transparent hover:border-[#018FFF]'>Project</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
     
    )
}

export default Navbar