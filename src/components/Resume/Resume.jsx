import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"

const Resume = () => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  return (
    <div className="bg-white md:p-6 p-3" id="resume">
      <div className="mx-auto max-w-screen-2xl items-center justify-between bg-gray-950 rounded-large py-20 lg:px-16">
        <div className="text-center w-full">
          <p className="text-xl text-yellow-orange">My Resume</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 text-left grid  grid-flow-dense lg:w-full">
            <div>
              <p className="text-base uppercase text-yellow-orange font-light">
                Experience
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {aboutMe?.resumeStatement}
              </h2>
            </div>
          </div>

          <div className="p-6 lg:w-full">
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
              {aboutMe?.jobExperience?.map((item, i) => (
                <li key={i}>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      {item?.organization}
                    </p>
                  </div>
                  <div className="mt-2 ml-4 mb-6">
                    <h4 className="mb-1.5 text-xl font-semibold text-white">
                      {item?.jobTitle}
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      {item?.jobDescription}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
