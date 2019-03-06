import React, { useState } from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import logo from './images/logo'
import Truncate from 'react-truncate'

const ProjectsRow = ({ data }) => {
  const [lines, setLines] = useState(3);

  return (
    <li key={data.id} id={data.id}>
      <div className="logo">
        {logo[data.name && data.name.replace(/\s/g, '').toLowerCase()]}
      </div>
      <div className="title">
        {data.name}
      </div>
      <div className="date">
        {data.startDate}
      </div>
      <p className="description">
        <Truncate lines={lines} onClick={() => setLines(-1)}>
          {data.description}
        </Truncate>
      </p>
    </li>
  )
}


const Projects = ({ siteTitle, data }) => {
  return (
    <div
      className="app-projects"
    >
      <div>
        <h2>Projects</h2>
        <ul>
          {data && data.allProjectsJson.edges && data.allProjectsJson.edges.map((d) =>
            <ProjectsRow data={d.node} />
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
        allProjectsJson {
          edges {
            node {
              id
              name
              endDate
              startDate
              company
              description
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
)

