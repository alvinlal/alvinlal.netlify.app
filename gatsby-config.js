require("dotenv").config()
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://alvinlal.netlify.app",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = {
  siteMetadata: {
    title: "Alvin lal",
    image: "./al.png",
    description:
      "personal portfolio of alvin lal and a blog for everything about web development",
    twitterUsername: "@alvinlal7",
    author: "Alvin lal",
    siteUrl: siteUrl,
  },
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
         
          
        }`,

        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              priority: edge.node.path === "/blog/" ? 1 : 0.5,
            }
          }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `alvinlal`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "postFeatureimages",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extension: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              withWebp: true,
              tracedSVG: true,
              wrapperStyle: `margin:2rem auto;`,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        // prettier-ignore
        fonts: ["roboto\:400,600,700", "fira code"],
        display: "swap",
      },
    },
  ],
}
