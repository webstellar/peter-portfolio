import * as React from "react"
import { Link } from "gatsby"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Intro = () => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  const imageData = getImage(
    aboutMe?.openingPhoto?.localFile?.childImageSharp?.gatsbyImageData
  )

  return (
    <div className="bg-white md:p-6 p-3" id="home">
      <div className="mx-auto lg:flex flex-row max-w-screen-2xl items-center justify-between py-20 p-6 lg:px-16 bg-gray-950 rounded-large">
        <div className="order-last md:order-first text-left grid grid-rows-1 gap-y-8 lg:w-2/3">
          <p className="text-xl uppercase text-white">
            {aboutMe?.openingSentence}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-yellow-orange sm:text-6xl capitalize">
            {aboutMe?.jobTitle}
          </h1>
          <div className="flex items-start justify-start gap-x-6">
            <Link
              to="#contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-950 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div className="order-first md:order-last mx-auto lg:w-1/3">
          <GatsbyImage
            image={imageData}
            alt="message"
            className="lg:h-4/6 lg:w-4/6 w-4/6 h-4/6"
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
