import * as React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioCard = ({ item }) => {
  const portfolioImage = getImage(
    item?.portfolioImage?.localFile?.childImageSharp?.gatsbyImageData
  )

  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-large bg-gray-200 shadow-lg">
        <a
          href={item.portfolioUrl}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <GatsbyImage
            className="rounded-t-lg min-w-full md:w-full h-[20rem] md:h-[15rem] bg-cover bg-top"
            image={portfolioImage}
            alt={item?.portfolioTitle}
          />
        </a>
        <div className="px-4 py-2 w-full">
          <div className="flex justify-between mx-auto items-center">
            <div className="w-5/6 text-left">
              <h5 className="text-[15px] font-bold leading-tight text-neutral-800">
                {item.portfolioTitle}
              </h5>
            </div>
            <div className="w-1/6 text-right">
              <button type="button" className="" data-te-ripple-color="light">
                <a href={item.portfolioUrl} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
