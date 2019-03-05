import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import Leapfrog from './Leapfrog'

const ExperiencesRow = ({ data }) =>
  <li key={data.id} id={data.id}>
    <div className="logo">
      <Leapfrog />
    </div>
    <div className="title">
      {data.name}
    </div>
    <div className="date">
      {data.startDate} - {data.endDate}
    </div>
    <div className="description">
      {data.company}
    </div>
  </li>

const Experiences = ({ siteTitle, data }) => {
  console.log(data)
  return (
    <div
      className="app-experiences"
    >
      <div>
        <h2>Experiences</h2>
        <ul>
          {data && data.allExperiencesJson.edges && data.allExperiencesJson.edges.map((d) =>
            <ExperiencesRow data={d.node} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allExperiencesJson {
          edges {
            node {
              id
              name
              endDate
              startDate
              company
            }
          }
        }
      }
    `}
    render={data => <Experiences data={data} {...props} />}
  />
)

