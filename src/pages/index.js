import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Profile from '../components/Profile'

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`anuj`, `resume`, `cv`]} />
    <div class="app-index">
      <div class="sidebar">
        <Profile />
      </div>
      <div class="main">
        <Experiences />
        <Projects />
        <Projects />

      </div>
    </div>

  </Layout>
)

export default IndexPage
