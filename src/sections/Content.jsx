import { Line } from '../components'
import { Home, About, Skill, Experience, Contact } from './index'

function Content() {
  return (
    <div className='w-full px-4 lg:px-48'>
        <Home />
        <div><Line /></div>
        <About />
        <Skill />
        <Experience />
        <Contact />
        <div className='mt-24 mb-32'><Line /></div>
    </div>
  )
}

export default Content