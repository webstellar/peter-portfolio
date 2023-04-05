import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"

const PortfolioButton = ({ filterItem, menuItems, setItem }) => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  const portfolio = aboutMe?.portofilio

  return (
    <div>
      <ul
        className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
        role="tablist"
        data-te-nav-ref
      >
        {menuItems?.map((tag, i) => (
          <li key={i} role="presentation" className="flex-auto text-center">
            <button
              className="my-2 block rounded bg-transparent px-7 pt-4 pb-3.5 text-base font-medium capitalize leading-tight text-white data-[te-nav-active]:!bg-transparent data-[te-nav-active]:text-yellow-orange dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
              id="pills-home-tab01"
              data-te-toggle="pill"
              data-te-target="#pills-home01"
              data-te-nav-active
              role="tab"
              aria-controls="pills-home01"
              aria-selected="true"
              onClick={() => filterItem(tag)}
            >
              {tag}
            </button>
          </li>
        ))}

        <li role="profile" className="flex-auto text-center">
          <button
            className="my-2 block rounded  bg-transparent px-7 pt-4 pb-3.5 text-base font-medium capitalize leading-tight text-white data-[te-nav-active]:!bg-transparent data-[te-nav-active]:text-yellow-orange dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
            id="pills-profile-tab01"
            data-te-toggle="pill"
            data-te-target="#pills-profile01"
            role="tab"
            aria-controls="pills-profile01"
            aria-selected="false"
            onClick={() => setItem(portfolio)}
          >
            All
          </button>
        </li>
      </ul>
    </div>
  )
}

export default PortfolioButton
