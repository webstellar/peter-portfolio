import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"

const PortfolioButton = ({ filterItem, menuItems, setItem }) => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  const portfolio = aboutMe?.portofilio

  return (
    <div>
      <ul className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row">
        <li className="flex-auto text-center">
          <button
            className="cursor-pointer my-2 rounded bg-transparent px-7 pt-4 pb-3.5 text-base font-medium capitalize leading-tight text-white data-[te-nav-active]:!bg-transparent data-[te-nav-active]:text-yellow-orange dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
            id="pills-profile-tab01"
            onClick={() => setItem(portfolio)}
          >
            All
          </button>
        </li>
        {menuItems?.map((tag, i) => (
          <li key={i} className="flex-auto text-center">
            <button
              className="cursor-pointer my-2 rounded bg-transparent px-7 pt-4 pb-3.5 text-base font-medium capitalize leading-tight text-white data-[te-nav-active]:!bg-transparent data-[te-nav-active]:text-yellow-orange dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
              id="pills-home-tab02"
              onClick={() => filterItem(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PortfolioButton
