import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    < h1 > Learn to <br/> design and code React apps </h1>
    < p > Complete courses about the best tools and design systems.Prototype and build apps with React and Swift. < /p>
    < p > Now go build something great. </p>
    < p > // gives an error because the tag isn't closed.</p >
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
