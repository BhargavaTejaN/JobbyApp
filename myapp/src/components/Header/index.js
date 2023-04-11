import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const Logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const onClickImage = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="website-logo-nav"
        onClick={onClickImage}
      />
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </div>
        <div>
          <button onClick={Logout} type="button" className="logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
