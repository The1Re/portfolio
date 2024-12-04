import PropTypes from "prop-types"

function SkillCard({title}) {
  return (
    <div className='p-10 bg-content flex flex-col items-center rounded-lg space-y-8 lg:basis-1/6'>
        <img 
        src={`/images/skill/${title.toLowerCase()}.png`} 
        alt={title}
        className='h-[60px] lg:h-[120px]'
        />
        <p>{title}</p>
    </div>
  )
}

SkillCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string
}

export default SkillCard