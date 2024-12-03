import { experiences } from '../contents/experience'

function Experience() {
  return (
    <section id="Experience" className="w-full mt-32 lg:px-48">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">Experience</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 flex flex-col">
        {
          experiences.map((data, index) => (
            <div key={index} className="grid grid-cols-[40%_60%] mb-16">
              <div className="">
                <p>{data.created}</p>
                <img 
                  src={`/src/assets/images/experience/${data.title.replaceAll(' ', '').toLowerCase()}.png`} 
                  alt={data.title} 
                  className='mt-2 w-[90%]'
                />
              </div>
              <div className="">
                <a href={data.link} className="inline-block mb-4">
                  <span className="text-2xl font-bold mr-4">{data.title}</span>
                  <i className="fa-brands fa-github text-2xl"></i>
                </a>
                <ul className="list-inside list-disc mb-12">
                  {
                    data.descripttion.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))
                  }
                </ul>
                <div className='space-x-4'>
                  {
                    data.skill.map((value, index) => (
                      <span key={index} className='bg-content rounded-lg py-1.5 px-3 text-xs'>{value}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience