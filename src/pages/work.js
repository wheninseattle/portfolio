import * as React from "react"
import { Link } from "gatsby"
import ProjectPanel from "../components/work/projectPanel"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <div className="section">
        <div className="section-heading">Work</div>
        <p>Coming soon!</p>
        <ProjectPanel/>
      </div>
    </Layout>
  )
}

export default WorkPage
