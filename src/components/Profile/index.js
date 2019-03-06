import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import profile from '../../data/images/profile.jpg'

import { FaGithub, FaLinkedin, FaEnvelope, FaXing, FaPhone, FaAddressBook } from 'react-icons/fa';


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
          <div class="title">Anuj joshi</div>
          <span class="role">Full Stack Developer</span>
          <div class="description">
            Hardworking, self-confident individual seeking an opportunity to prove my skills and leadership qualities while contributing to the organizational growth.
          </div>
          <div class="contact">
            <ul>
              <li>joshi.anujo7@gmail.com</li>
              <li><FaPhone /> +4917645782221</li>
              <li><FaAddressBook /> Bockenheimer Landstraße 135 <br />60325, Frankfurt am Main<br />Germany</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
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

