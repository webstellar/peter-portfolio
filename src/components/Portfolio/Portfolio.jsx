import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import PortfolioCard from "../PortfolioCard/PortfolioCard"
import PortfolioButton from "../PortfolioButton/PortfolioButton"

//export const UserContext = React.createContext()

const Portfolio = () => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  const portfolio = aboutMe?.portofilio

  const [item, setItem] = React.useState(portfolio)

  const menuItems = [...new Set(portfolio?.map(Val => Val.portfolioTag))]

  const filterItem = curcat => {
    const newItem = portfolio.filter(newVal => {
      return newVal.portfolioTag === curcat
    })
    setItem(newItem)
  }

  return (
    <div className="bg-white p-6" id="portfolio">
      <div className="mx-auto max-w-screen-2xl items-center justify-between bg-gray-950 rounded-large py-20 lg:px-16">
        <div className="text-center w-full">
          <p className="text-xl text-yellow-orange">My Portfolio</p>
        </div>

        <div className="text-center w-full">
          <PortfolioButton
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-14 px-6">
          {item.map((item, i) => (
            <PortfolioCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
