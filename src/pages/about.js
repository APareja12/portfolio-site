import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>  
      <Head title="About"/>  
      <h1>About Me</h1>
      <p>“Having toured internationally playing original music to teaching yoga and music to students from all walks of life, I continuously aim to reinvent myself. This has drawn me to align my creative passion to the field of Software Engineering. Being part of an innovative culture that can thrive together and reimagine technology inspires my full-stack developing skills with forward thinking vision and discovery of new ways to integrate all types of challenges.” 
      </p>
      <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
    </Layout>
    )
}

export default AboutPage  