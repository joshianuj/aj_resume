import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import profile from '../../data/images/profile.jpg'

import { FaGithub, FaLinkedin, FaEnvelope, FaXing } from 'react-icons/fa';


const Profile = ({ siteTitle, data }) => {
  return (
    <div
      className="app-profile"
    >
      <div className="about">
        <div className="image">
          <img src={profile} alt="anuj_profile" />
        </div>
        <div className="bio">
          Hi, its me Anuj <br />A Full Stack Developer
        </div>
      </div>
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/joshianuj" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/joshianujo7" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.xing.com/in/joshianujo7" target="_blank">
              <FaXing />
            </a>
          </li>
          <li className="icon">
            <a href="mailto:joshi.anujo7@gmail.com" target="_blank">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Profile.propTypes = {
  siteTitle: PropTypes.string,
}

Profile.defaultProps = {
  siteTitle: ``,
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => <Profile data={data} {...props} />}
  />
)

