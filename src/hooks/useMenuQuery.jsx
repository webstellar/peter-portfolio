import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      menu: wpMenu(name: { eq: "primary" }) {
        menuItems {
          nodes {
            label
            url
            id
          }
        }
      }
    }
  `)

  return data
}
