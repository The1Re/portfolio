import React from "react"

interface IExperienceCard {
    title: string,
    created: string,
    description: string[],
    skill: string[],
    link: string
}

function ExperienceCard({title, created, description, skill, link} : IExperienceCard) {
  return (
    <div className="grid grid-cols-[40%_60%] mb-16">
        <div className="">
            <p>{created}</p>
            <img 
                src={`/images/experience/${title.replaceAll(' ', '').toLowerCase()}.png`} 
                alt={title} 
                className='mt-2 w-[90%]'
            />
        </div>
        <div className="">
            <a href={link} className="inline-block mb-4">
                <span className="text-2xl font-bold mr-4">{title}</span>
                <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <ul className="list-inside list-disc mb-12">
                {
                description.map((value, index) => (
                    <li key={index}>{value}</li>
                ))
                }
            </ul>
            <div className='space-x-4'>
                {
                skill.map((value, index) => (
                    <span key={index} className='bg-content rounded-lg py-1.5 px-3 text-xs'>{value}</span>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard