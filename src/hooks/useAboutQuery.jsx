import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      wpPage(databaseId: { eq: 33 }) {
        id
        content
        aboutMe {
          excerpt
          certificationStatement
          certifications {
            certificateDescription
            certificateTitle
            yearAttained
          }
          jobExperience {
            accomplishments
            endYear
            jobDescription
            jobTitle
            organization
            startYear
          }
          jobTitle
          resumeStatement
          skillStatement
          skills {
            skillset
            skillsCount
          }
          socials {
            social
            url
          }
          toolStatement
          tools {
            toolset
            toolsetCount
          }
          openingSentence
          portofilio {
            portfolioTitle
            portfolioUrl
            portfolioTag
            portfolioYear
            portfolioImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          openingPhoto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1371)
              }
            }
          }
        }
      }
    }
  `)

  return data
}
