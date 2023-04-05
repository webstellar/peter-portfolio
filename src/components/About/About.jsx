import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = () => {
  const {
    wpPage: { aboutMe, featuredImage, content },
  } = useAboutQuery()

  const featuredImageData = getImage(
    featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
  )

  return (
    <div className="bg-white p-6" id="about">
      <div className="mx-auto lg:flex flex-row max-w-screen-2xl items-center justify-between bg-gray-950 rounded-large">
        <div className="text-left grid grid-rows-1 gap-y-6 lg:w-2/4 py-20 p-6 lg:px-16 ">
          <p className="text-[20px] uppercase text-yellow-orange">About me</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {aboutMe?.openingSentence}
          </h2>
          <div
            className="text-lg text-white"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="lg:w-2/4 p-0">
          <GatsbyImage
            image={featuredImageData}
            alt="message"
            className="w-full h-full min-h-full max-h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
