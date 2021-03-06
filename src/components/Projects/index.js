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
      <a href={data.website} target='_blank' rel="noopener noreferrer">
        <div className="logo">
          {logo[data.iconName && data.iconName.replace(/\s/g, '').toLowerCase()]}
        </div>
      </a>
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


const Projects = ({ data, title }) => {
  return (
    <div
      className="app-projects"
    >
      <div>
        <h2>{title}</h2>
        <ul>
          {data && data.map((d) =>
            <ProjectsRow key={d.node.id} data={d.node} />
          )}
        </ul>
      </div>
    </div>
  )
}

const query = graphql`
query {
  allProjectsJson {
    edges {
      node {
        id
        name
        website
        iconName
        endDate
        startDate
        company
        description
      }
    }
  }
  allIndividualProjectsJson {
    edges {
      node {
        id
        name
        website
        iconName
        endDate
        startDate
        company
        description
      }
    }
  }
}
`


export default ({ title }) => {
  return (
    <StaticQuery
      query={query}
      render={data => <Projects title={title} data={title === 'Projects' ? data.allProjectsJson.edges : data.allIndividualProjectsJson.edges} />}
    />)
}

