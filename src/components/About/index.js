// Write your code here

import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <div className={`about-app-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img src={aboutImgUrl} alt="about" className="about-img" />
              <h1 className="about-heading">{aboutTextClassName}</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
