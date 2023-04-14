import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { TagCloud } from "react-tagcloud"

const Tool = () => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  let tools = aboutMe?.tools

  let tagCloud = tools.map((item, i) => {
    return {
      key: i,
      value: item.toolset,
      count: item.toolsetCount,
    }
  })

  return (
    <div className="bg-white md:p-6 p-3" id="#resume">
      <div className="mx-auto max-w-screen-2xl items-center justify-between bg-gray-950 rounded-large py-20 lg:px-16">
        <div className="text-center w-full">
          <p className="text-xl text-yellow-orange">My Tools</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 text-left grid  grid-flow-dense lg:w-full">
            <div>
              <p className="text-base uppercase text-yellow-orange font-light pb-5">
                Tools
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {aboutMe?.toolStatement}
              </h2>
            </div>
          </div>

          <div className="p-6 lg:w-full">
            <TagCloud
              randomSeed
              shuffle
              minSize={12}
              maxSize={35}
              tags={tagCloud}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tool
