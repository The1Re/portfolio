import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home")

  const sections = [
    "Home",
    "About",
    "Skill",
    "Experience",
    "Contact"
  ]

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
    <nav className="w-full flex justify-between bg-navbar p-4 lg:px-48 py-8 fixed top-0 z-10">
        <div className="nav-left">
            <span className="text-3xl font-bold text-primary">Port<span className="text-white">folio</span></span>
        </div>
        <div className="nav-right flex space-x-10 items-center">
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