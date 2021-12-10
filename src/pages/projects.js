import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import { posts, post } from './project.module.scss'
import Head from '../components/head'


const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)


    return (
        <Layout>
            <Head title="Projects"/>
            <h1>Projects</h1>
            <ol className={posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={post}>
                            <Link to={`/projects/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ProjectPage