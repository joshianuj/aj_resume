import React, { useState } from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import logo from './logo'
import Truncate from 'react-truncate';

const ExperiencesRow = ({ data }) => {
  const [lines, setLines] = useState(2);
  return (
    <li key={data.id} id={data.id}>
      <a href={data.website} target='_blank' rel="noopener noreferrer">
        <div className="logo">
          {logo[data.company]}
        </div>
      </a>
      <div className="title">
        {data.name}
      </div>
      <div className="date">
        {data.startDate} - {data.endDate}
      </div>
      <p className="description">
        <Truncate lines={lines} onClick={() => setLines(-1)}>
          {data.description}
        </Truncate>
      </p>

    </li>
  )
}



const Experiences = ({ siteTitle, data }) => {
  return (
    <div
      className="app-experiences"
    >
      <div>
        <h2>Experiences</h2>
        <ul>
          {data && data.allExperiencesJson.edges && data.allExperiencesJson.edges.map((d) =>
            <ExperiencesRow key={d.node.id} data={d.node} />
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
              website
              endDate
              startDate
              company
              description
            }
          }
        }
      }
    `}
    render={data => <Experiences data={data} {...props} />}
  />
)

