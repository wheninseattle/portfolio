import React from "react"
import { Link } from "gatsby"
// Styling
import { jobTitle, jobEmployment } from "./experience.module.css"

const JobPanel = ({ className, jobInfo }) => {
  console.table(jobInfo)
  console.table(jobInfo.node.frontmatter)
  const { company, employed, location, title, url } = jobInfo.node.frontmatter
  const jobExperience = jobInfo.node.html
  return (
    <div className={className}>
      <div className={jobTitle}>
        {title} @{" "}
        <Link to={url} target={"_blank"} rel={"noopener noreferrer"}>
          {company}
        </Link>
      </div>
      <div className={jobEmployment}>
        {employed} | {location}
      </div>

      <div
        className={jobExperience}
        dangerouslySetInnerHTML={{ __html: jobExperience }}
      />
    </div>
  )
}

export default JobPanel
