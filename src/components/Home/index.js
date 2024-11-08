import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="instructions">
        <h1 className="heading">Instructions</h1>
        <ol className="ol-container">
          <li className="list">Total Questions: 10</li>
          <li className="list">Types of Questions: MCQS</li>
          <li className="list">Duration: 10 Mins</li>
          <li className="list">
            Marking Scheme: Every Correct response, get 1 mark
          </li>
          <li className="list">
            ALl the progress will be lost, if you reload during the assessment
          </li>
        </ol>
        <Link to="/assessment">
          <button type="button" className="start-btn">
            Start Assessment
          </button>
        </Link>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/drz669sta/image/upload/v1721800720/lg3udlvlewv8zrbifl7t.png"
          alt="assessment"
          className="home-img"
        />
      </div>
    </div>
  </>
)
export default Home
