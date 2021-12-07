import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Alexis, a full-stack developer living in northern New Jersey </h2>
      <p>Check out my work! <a href="https://github.com/APareja12" target="_blank">Github</a> </p>
      <p>Need a developer? <Link to="contact">Contact me</Link> </p>

    </Layout>
  )
}

export default IndexPage 