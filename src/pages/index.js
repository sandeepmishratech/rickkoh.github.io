import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import resume from "../assets/rickkoh-resume.pdf";

import "./global.css";

// markup
const Index = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() - 7);

  return (
    <main className="unresponsive-main">
      <div className="container">
        <title>Home Page</title>
        <StaticImage src="../assets/profile-picture.jpg" className="profile-picture" alt="rickkoh-profile-picture" />
        <p className="paragraph">
          Fullstack developer (stronger on backend). Developer of{" "}
          <a href="https://t.me/mortypabot" className="link float">
            MortyPA
          </a>
          . Right now my favorite technologies are Python, Nodejs, Reactjs and SQLite.
        </p>
        <p className="paragraph">
          Check me out on{" "}
          <a href="https://hackerrank.com/legenderick" className="link float">
            Hackerrank
          </a>
          . Follow me on{" "}
          <a href="https://github.com/rickkoh" className="link">
            Github
          </a>{" "}
          or{" "}
          <a href="https://linkedin.com/in/rick-koh-128163165" className="link float">
            LinkedIn
          </a>
          .
        </p>
        <p className="paragraph">
          Download a copy of my resume{" "}
          <a href={resume} className="link" download>
            here
          </a>
          .
        </p>
        <p className="paragraph">
          Or reach me directly at{" "}
          <a href="mailto: rick.kohjiaxuan@gmail.com" className="link float">
            rick.kohjiaxuan@gmail.com
          </a>
        </p>
        <ul className="list">
          <li className="doc link">Blog Posts</li>
          {edges.map((edge) => (
            <li className="list-item float" key={edge.node.id} style={{ color: edge.node.frontmatter.color }}>
              <span>
                <Link to={"blog/" + edge.node.frontmatter.path} className="link">
                  {edge.node.frontmatter.title}
                </Link>
                {newDate < new Date(edge.node.frontmatter.date) && (
                  <span className="badge" aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p className="description">{edge.node.frontmatter.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            color
          }
        }
      }
    }
  }
`;
