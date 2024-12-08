import React from "react"

function Home() {
  return (
    <section id="Home" className="h-screen flex py-[100px]">
      <div className="lg:grid lg:grid-cols-[60%_40%] w-full">
        <div className="flex flex-col justify-center space-y-40">
          <div>
            <p className="text-2xl mb-2">I&apos;M <span className="text-5xl text-primary font-bold">Kanesh Orachunlertmitri</span></p>
            <p className="text-2xl mb-4">Software developer</p>
            <div className="inline-flex space-x-4">
              <a href="/portfolio/resume.pdf" className="bg-primary text-white font-bold py-2 px-4 rounded">Download CV</a>
              <a href="#Contact" className="bg-transparent text-primary font-semibold py-2 px-4 border border-primary rounded">Contact</a>
            </div>
          </div>
          <div className="inline-flex space-x-6">
            <a href="https://github.com/The1Re" className="text-white text-3xl hover:transition-transform hover:scale-125">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/คเณศ-อรชุณเลิศไมตรี-a6063133b" className="text-white text-3xl hover:transition-transform hover:scale-125">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/iiamthefirst" className="text-white text-3xl hover:transition-transform hover:scale-125">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center scale-50 md:scale-100">
          <div className='relative inline-block'>
            <div className="absolute top-6 left-6 w-full h-full bg-content rounded-lg z-[1]"></div>
            <img id="profile" src='/portfolio/profile.png' alt="profile" className='relative z-[2] md:max-w-[428px] md:max-h-[608px] rounded-lg'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home