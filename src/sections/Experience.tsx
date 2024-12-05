import React from 'react'
import { experiences } from '../contents/experience'
import ExperienceCard from '../components/ExperienceCard'
import { IExperience } from '../types'

function Experience() {
  return (
    <section id="Experience" className="mt-32">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">Experience</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 flex flex-col">
        {
          experiences.map((data: IExperience, index) => (
            <ExperienceCard 
              key={index}
              title={data.title}
              created={data.created}
              description={data.description}
              skill={data.skill}
              image={data.image}
              link={data.link}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Experience