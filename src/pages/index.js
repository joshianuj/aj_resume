import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Description from '../components/Description'
import Profile from '../components/Profile'

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`anuj`, `resume`, `cv`]} />
    <div class="app-index">
      <Profile />
      <div>
        <Experiences />
        <Projects />
      </div>
    </div>

  </Layout>
)

export default IndexPage
