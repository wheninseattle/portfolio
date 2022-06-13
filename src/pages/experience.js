import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JobTab from "../components/experience/JobTab"

// Styling
import {
  experienceContent, jobTabs,
  jobTab,activeTab,jobPanel
} from "../components/experience/experience.module.css"
import JobPanel from "../components/experience/JobPanel"

const ExperiencePage = ({ data }) => {
  const [activeJob, setActiveJob] = useState(0)

  const jobs = data.jobs.edges;
  const onActivateJob = (i) => {
    setActiveJob(i)
  }
  return (
    <Layout>
      <Seo title="Experience" />
      <div className={"section"}>
        <div className="section-heading">Experience</div>
        <div className={experienceContent}>
          <ul className={jobTabs}>
            {jobs.map(({ node },i) => {
              const jobInfo = node.frontmatter
              const {company} =jobInfo;
              const activeClass = activeJob===i ? activeTab : '';
              return (
                <JobTab
                  jobInfo={jobInfo}
                  key={i}
                  id={`job-tab${i}`}
                  className={`${jobTab} ${activeClass}`}
                  company={company}
                  onClick={()=>{onActivateJob(i)}}
                />
              )
            })}
          </ul>
          <JobPanel id={`job-panel${activeJob}`} jobInfo={jobs[activeJob]} className={jobPanel}/>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            company
            title
            date
            employed
            location
            url
          }
          html
        }
      }
    }
  }
`

export default ExperiencePage
