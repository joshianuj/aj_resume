import PropTypes from "prop-types"
import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"

import "./index.scss"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const SkillsRow = ({ data }) => {
  let percentage = data.rating / 10 * 100
  return (
    <li key={data.id} id={data.id}>
      {data.name}
      <Progress percent={percentage} theme={{
        default: {
          symbol: '',
        }
      }} />
    </li>
  )
}
const Skills = ({ siteTitle, data }) => {
  return (
    <div
      className="app-skills"
    >
      <div>
        <h2>Personal Skills</h2>
        <ul>
          {data && data.allSkillsJson.edges && data.allSkillsJson.edges.map((d) =>
            <SkillsRow key={d.node.id} data={d.node} />
          )}
        </ul>
      </div>
    </div>
  )
}

Skills.propTypes = {
  siteTitle: PropTypes.string,
}

Skills.defaultProps = {
  siteTitle: ``,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allSkillsJson {
          edges {
            node {
              id
              name
              rating
            }
          }
        }
      }
    `}
    render={data => <Skills data={data} {...props} />}
  />
)

