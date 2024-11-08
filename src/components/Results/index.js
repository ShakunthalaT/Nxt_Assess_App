import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Results = props => {
  const {location} = props
  const {state} = location
  const {score, formattedTimer, timeUp} = state || {}
  return (
    <>
      <Header />
      <div className="result-main-container">
        {timeUp ? (
          <div className="result-container">
            <img
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1705260308/calender_1_1_fttxjx.jpg"
              alt="time up"
              className="result-image"
            />
            <h1 className="complete-head">Time is up!</h1>
            <p className="about-time">
              You did not complete the assessment within the time
            </p>
            <div className="text-container">
              <p className="time-text">Time Taken:</p>
              <p className="time-text">{formattedTimer}</p>
            </div>
            <div className="text-container">
              <p className="score-text">Your score:</p>
              <p className="score-text">{score}</p>
            </div>
            <Link to="/assessment">
              <button type="button" className="result-btn">
                Reattempt
              </button>
            </Link>
          </div>
        ) : (
          <div className="result-container">
            <img
              src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1704821915/Layer_2_prwvp6.jpg"
              alt="submit"
              className="result-image"
            />
            <h1 className="complete-head">
              Congrats! You completed the assessment.
            </h1>
            <div className="text-container">
              <p className="time-text">Time Taken: </p>
              <p className="time-text"> {formattedTimer}</p>
            </div>
            <div className="text-container">
              <p className="score-text">Your score: </p>
              <p className="score-text"> {score}</p>
            </div>
            <Link to="/assessment">
              <button type="button" className="result-btn">
                Reattempt
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
export default Results
