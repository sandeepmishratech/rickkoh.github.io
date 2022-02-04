import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement, defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";

import "./md.css";

export default function Template({ data }) {
    const { markdownRemark: post } = data

    useEffect(() => {
        deckDeckGoHighlightElement();
    }, [])

    return (
        <main id='md'>
            <div className='container'>
                <Link className='back' to="/">Back</Link>
                <h1 className='title'>{post.frontmatter.title}</h1>
                <p className='date'>Posted on {post.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </main>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`