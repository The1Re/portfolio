import profile from '../assets/images/profile.png'

function Home() {
  return (
    <section id="Home" className="h-screen w-full flex p-4 lg:px-48 -translate-y-[100px]">
      <div className="lg:grid lg:grid-cols-[60%_40%] w-full">
        <div className="flex flex-col justify-center space-y-40">
          <div>
            <p className="text-2xl mb-2">I&apos;M <span className="text-5xl text-primary font-bold">Kanesh Orachunlertmitri</span></p>
            <p className="text-2xl mb-4">Software developer</p>
            <div className="inline-flex space-x-4">
              <button className="bg-primary text-white font-bold py-2 px-4 rounded">Download CV</button>
              <button className="bg-transparent text-primary font-semibold py-2 px-4 border border-primary rounded">Contact</button>
            </div>
          </div>
          <div className="inline-flex space-x-6">
            <a href="https://github.com/The1Re" className="text-white text-3xl"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/คเณศ-อรชุณเลิศไมตรี-a6063133b" className="text-white text-3xl"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/iiamthefirst" className="text-white text-3xl"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="lg:mt-[120px]">
          <img id="profile" src={profile} alt="profile" className='w-[428px] h-[608px] rounded-lg'/>
        </div>
      </div>
    </section>
  )
}

export default Home