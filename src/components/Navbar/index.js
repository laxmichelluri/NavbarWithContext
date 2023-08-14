// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'
      const websiteLogoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'dark-text-theme'
        : 'light-text-theme'

      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <div className="navbar-content">
            <img
              src={websiteLogoImgUrl}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-name">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              onClick={onToggleTheme}
              className="theme-button"
            >
              <img src={themeImageUrl} alt="theme" className="theme-img" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
