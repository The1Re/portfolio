import { experiences } from '../contents/experience'
import ExperienceCard from '../components/ExperienceCard'

function Experience() {
  return (
    <section id="Experience" className="w-full mt-32 px-4 lg:px-48">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">Experience</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 flex flex-col">
        {
          experiences.map((data, index) => (
            <ExperienceCard 
              key={index}
              title={data.title}
              created={data.created}
              descripttion={data.descripttion}
              skill={data.skill}
              link={data.link}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Experience