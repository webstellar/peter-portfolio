import * as React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PortfolioCard = ({ item }) => {
  const portfolioImage = getImage(
    item?.portfolioImage?.localFile?.childImageSharp?.gatsbyImageData
  )

  console.log(portfolioImage)

  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-large bg-gray-200 shadow-lg">
        <a
          href={item.portfolioUrl}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <GatsbyImage
            className="rounded-t-lg w-full h-[10rem] md:h-[18rem]"
            image={portfolioImage}
            alt={item?.portfolioTitle}
          />
        </a>
        <div className="p-4">
          <div className="flex justify-between mx-auto items-center">
            <div className="w-5/6 text-left">
              <h5 className="text-[15px] font-bold leading-tight text-neutral-800">
                {item.portfolioTitle}
              </h5>
            </div>
            <div className="w-1/6 text-right">
              <button
                type="button"
                className="inline-block rounded-large bg-primary px-6 pt-2.5 pb-2 text-base font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <a href={item.portfolioUrl}>
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
