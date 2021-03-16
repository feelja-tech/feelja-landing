require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Get Feelja",
    siteUrl: "https://feelja.com",
    description: "Find someone who gets you",
    url: "https://feelja.com",
    image: "/images/logo.png",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.jsx"),
      },
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GTAG_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Get Feelja",
        short_name: "Get Feelja",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ff0000",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
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
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "fq63bkgget5a",
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
  ],
};
