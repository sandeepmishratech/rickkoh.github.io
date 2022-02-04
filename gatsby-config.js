module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rickkoh-portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "./src/posts",
            },
          },
          {
            resolve: "gatsby-remark-highlight-code", 
            options: {
              terminal: "carbon",
              theme: "blackboard",
            }
          },
        ]
      },
    },
  ],
};
