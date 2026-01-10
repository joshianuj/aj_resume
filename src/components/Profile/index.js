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
  let file = data.allFile.edges[0].node
  return (
    <div
      className="app-profile"
    >
      <div className="about">
        <div className="image">
          <img src={profile} alt="anuj_profile" />
        </div>

        <div className="bio">
          <div className="title">Anuj joshi </div>
          <span className="role">Full Stack Developer</span>

          <div className="description">
            Hardworking, self-confident individual seeking an opportunity to prove my skills and leadership qualities while contributing to the organizational growth.
          </div>
          <div className="contact">
            <ul>
              <li><a href={file.publicURL} download="resume_anuj_joshi">
                Download Resume
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <ul className="icons-list">
            <li className="icon">
              <a href="https://www.github.com/joshianuj" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.linkedin.com/in/joshianujo7" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.xing.com/profile/AnujJoshi2/cv" target="_blank" rel="noopener noreferrer">
                <FaXing />
              </a>
            </li>
            <li className="icon">
              <a href="mailto:joshi.anujo7@gmail.com" target="_blank" rel="noopener noreferrer">
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
const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "images/profile.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allFile(filter: { extension: { eq: "pdf" } }) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`
export default props => (
  <StaticQuery
    query={query}
    render={data => <Profile data={data} {...props} />}
  />
)

