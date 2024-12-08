import React from 'react'
import { skills } from '../contents/skill'
import SkillCard from '../components/SkillCard'
import { ISkill } from '../types'

function Skill() {
  return (
    <section id="Skill" className="mt-32">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">My skills</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 flex flex-wrap gap-6 lg:gap-12 flex-grow-0 justify-center">
        {
          skills.map((skill: ISkill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              image={skill.image}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Skill