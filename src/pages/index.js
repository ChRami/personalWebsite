import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return(
    <Layout>
      <div>
        <h1>Hello World!</h1>
        <p>Contact me:
          Here is my github <a href="https://github.com/ChRami" target="_blank">GitHub</a>
        </p>
      </div>
    </Layout>
  )
  // return(
  //     <Layout>
  //       <SEO title="Home" />
  //       <h1>Hi people</h1>
  //       <p>Welcome to my Website.</p>
  //       <p>This will be my own personal website.</p>
  //       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //         <Image />
  //       </div>
  //       <Link to="/page-2/">Go to page 2</Link> <br />
  //       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //     </Layout>
  //   )

}





export default IndexPage
