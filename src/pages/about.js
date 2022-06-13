import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="section">
        <div className="section-heading">About</div>
        <div className="section-content">
          <div>
            <p>
          A career in architecture kindled a passion for building tools that
          solve problems, integrate technologies, and help people. I'm a new
          software engineer driven to contriute to elegant solutions with user
          experience as a guiding principal. I thrive in diverse, collaborative
          spaces, and I am fueled by curiosity and focused determination.
            </p>
          </div>
          <div className="about-image">
            <StaticImage
              className="about-image"
              src="../images/weston-photo.jpg"
              alt="Weston Headshot"
              width={450}
              quality={100}
              placeholder={"blurred"}
              formats={["AUTO", "webp"]}
              layout={"constrained"}
              aspectRatio={1 / 1}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
