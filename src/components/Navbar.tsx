import React, { useState, useEffect } from 'react'
import { sections } from '../contents/section'

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return { section: section, top: rect.top }
        }
        return null
      })
    

      const currentSection = offsets.find(
        (offset) => offset && offset.top >= 0
      ) 

      if (currentSection)
        setActiveSection(currentSection.section)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    
  }, [])

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between bg-navbar p-4 lg:px-48 py-4 md:py-8 fixed top-0 z-10">
      <div className='w-full flex justify-between items-center'>
        <div className="nav-left">
            <span className="text-3xl font-bold text-primary">Port<span className="text-white">folio</span></span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-content" 
          aria-expanded={isOpen}
        >
          <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button> 

      </div>
      <div className={`nav-right flex-col items-start space-y-4 md:space-x-10 md:space-y-0 md:flex-row md:flex md:items-center ${isOpen ? 'flex mt-4 md:mt-0' : 'hidden'}`}>
        {
          sections.map((section, index) => (
            <a 
              key={index} 
              href={`#${section}`} 
              className={`${activeSection === section ? 'bg-primary px-4 py-1 rounded-lg transition-colors font-bold' : ''} ` }
            >
              {section}
            </a>
          ))
        }
      </div>
    </nav> 
  )
}

export default Navbar