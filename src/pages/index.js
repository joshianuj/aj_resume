import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Profile from '../components/Profile'
import Skills from '../components/Skills'

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`anuj`, `resume`, `cv`]} />
    <div className="app-index">
      <div className="sidebar">
        <Profile />
      </div>
      <div className="main">
        <Experiences />
        <Skills />
        <Projects title="Projects" />
        <Projects title="Individual Projects" />
      </div>
    </div>

  </Layout>
)

export default IndexPage
