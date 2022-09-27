import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Damian Ertel Portfolio`,
    siteUrl: `https://damianertel.github.io/de-portfolio`,
  },
  pathPrefix: "de-portfolio",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcms",
        url: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8kdighz1o4201ulaw4139sa/master",
      },
    },
  ],
};

export default config;
