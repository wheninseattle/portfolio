import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Shuksan } from "../assets/icons/Shuksan"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>
        Welcome <b>!</b>
      </h1>
    </div>
    <div className="intro-graphic">
      <Shuksan className="intro-graphic" />
    </div>
  </Layout>
)

export default IndexPage
