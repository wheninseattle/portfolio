import * as React from "react"
import ProjectPanel from "../components/work/ProjectPanel"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = ({data}) => {

  const projects = data.projects.edges;
  console.table(projects)

  return (
    <Layout>
      <Seo title="Work" />
      <div className="section">
        <div className="section-heading">Work</div>
        {projects.map((project,i)=> {
          return(
          <ProjectPanel key={i} projectInfo={project.node}/>
        )
        })}
      </div>
    </Layout>
  )
}

export default WorkPage

export const data = graphql`
{
  projects: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/projects/" } }
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          date
          name
          activeTime
          url
          github
          stack
          featuredImage
          description
        }
        html
      }
    }
  }
}
`
