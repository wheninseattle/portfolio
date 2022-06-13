import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Shuksan } from "../assets/icons/Shuksan"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="section">
      <div className="welcome-content">
        <h2 className="welcome">
          Hi I'm,{" "}
          <span style={{ color: "var(--color-primary)" }}>Weston Norwood</span>
          .
          <br />
          Let's build something!
        </h2>
        <p>
          A career in architecture kindled a passion for building tools that
          solve problems, integrate technologies, and help people. I'm a new
          software engineer driven to contriute to elegant solutions with user
          experience as a guiding principal.. I thrive in diverse, collaborative
          spaces, and I am fueled by curiosity and focused determination.
        </p>
      </div>
    </div>
    <div className="intro-graphic-container">
      <Shuksan className="intro-graphic" />
    </div>
  </Layout>
)

export default IndexPage
