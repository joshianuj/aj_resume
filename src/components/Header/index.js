import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"

const HeaderRow = ({ data }) =>
  <li key={data.id} id={data.id}>
    {data.name}
  </li>

const Header = ({ siteTitle, data }) => {
  console.log(data)
  return (
    <header
      className="app-header"
    >
      <div>
        <Link
          to="/"
        >
          <ul>
            {data && data.allHeaderJson.edges && data.allHeaderJson.edges.map((d) =>
              <HeaderRow data={d.node} />
            )}
          </ul>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
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
    render={data => <Header data={data} {...props} />}
  />
)

