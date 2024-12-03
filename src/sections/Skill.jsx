import { skills } from '../contents/skill'

function Skill() {
  return (
    <section id="Skill" className="w-full mt-32 lg:px-48">
      <div className="inline-block">
        <h1 className="text-primary text-4xl font-bold">My skills</h1>
        <div className="w-[40%] h-[5px] bg-primary mt-4"></div>
      </div>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-14 grid-flow-row">
        {
          skills.map((skill, index) => (
            <div key={index} className='p-10 bg-content flex flex-col items-center rounded-lg space-y-8'>
              <img 
                src={`/src/assets/images/skill/${skill.toLowerCase()}.png`} 
                alt={skill}
                className='h-[120px]'
              />
              <p>{skill}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skill