import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Profile from '../components/Profile'
import {
  StaticQuery,
  graphql
} from "gatsby"
import _ from 'lodash'
import "./index.scss"

const projectsQuery = graphql`
query {
  allProjectsJson {
    edges {
      node {
        id
        name
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

const individualProjectsQuery = graphql`
query {
  allIndividualProjectsJson {
    edges {
      node {
        id
        name
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`anuj`, `resume`, `cv`]} />
    <div className="app-index">
      <div className="sidebar">
        <Profile />
      </div>
      <div className="main">
        <Experiences />
        <StaticQuery
          query={projectsQuery}
          render={data => <Projects title="Projects" data={data.allProjectsJson.edges} />}
        />
        <StaticQuery
          query={individualProjectsQuery}
          render={data => <Projects title="Personal Projects" data={data.allIndividualProjectsJson.edges} />}
        />
      </div>
    </div>

  </Layout>
)

export default IndexPage
