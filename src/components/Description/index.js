import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"

const Description = ({ siteTitle, data }) => {
  return (
    <header
      className="app-description"
    >
      Hi, its me Anuj
      Full Stack Developer
    </header>
  )
}

Description.propTypes = {
  siteTitle: PropTypes.string,
}

Description.defaultProps = {
  siteTitle: ``,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allHeaderJson {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={data => <Description data={data} {...props} />}
  />
)

