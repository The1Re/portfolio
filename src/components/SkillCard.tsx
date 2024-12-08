import React from "react"

interface ISkillCard {
  title: string
}

function SkillCard({title} : ISkillCard) {
  return (
    <div className='p-10 bg-content flex flex-col items-center rounded-lg space-y-8 lg:basis-1/6 hover:scale-105 transition-transform'>
        <img 
        src={`/images/skill/${title.toLowerCase()}.png`} 
        alt={title}
        className='h-[60px] lg:h-[120px]'
        />
        <p>{title}</p>
    </div>
  )
}


export default SkillCard