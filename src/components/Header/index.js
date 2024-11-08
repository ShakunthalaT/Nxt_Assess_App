import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="header-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/drz669sta/image/upload/v1721801028/t8ly0gxfdlyey8u6xpqf.png"
            alt="website logo"
          />
        </Link>
      </div>
      <button type="button" onClick={onClickLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  )
}
export default withRouter(Header)
