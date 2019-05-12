import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { getUser, isLoggedIn } from "../services/auth"

const IndexPage = () => ( 
  <Layout>
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {
      isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )
    }
      
  </Layout>
)

export default IndexPage
