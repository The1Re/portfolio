import Line from '../components/Line'

function Contact() {
  return (
    <section id="Contact" className="w-full mt-32 px-4 lg:px-48 mb-32">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">Contact Me</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div className="bg-content py-2 px-4 space-x-4">
          <i className="fa-solid fa-envelope text-primary"></i>
          <span>kanesh132@gmail.com</span>
        </div>
        <div className="bg-content py-2 px-4 space-x-4">
          <i className="fa-solid fa-phone text-primary"></i>
          <span>097-003-4319</span>
        </div>
        <div className="bg-content py-2 px-4 space-x-4">
          <i className="fa-solid fa-location-dot text-primary"></i>
          <span>Pathum Thani, Thailand</span>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://github.com/The1Re" className="text-primary text-3xl hover:transition-transform hover:scale-125">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/คเณศ-อรชุณเลิศไมตรี-a6063133b" className="text-primary text-3xl hover:transition-transform hover:scale-125">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/iiamthefirst" className="text-primary text-3xl hover:transition-transform hover:scale-125">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className='mt-24'>
        <Line />
      </div>
    </section>
  )
}

export default Contact