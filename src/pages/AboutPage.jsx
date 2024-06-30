 import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'



function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi enim at consectetur reprehenderit ab est saepe totam soluta a.</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to="/">Back To Home</Link>
        </p>
        </div>
    </Card>
  )
}

export default AboutPage
