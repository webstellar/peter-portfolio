import * as React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"

import { Dialog, Popover } from "@headlessui/react"
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2"
import Logo from "../../images/peteronyegbule-white.png"
import BlackLogo from "../../images/peteronyegbule.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { site, menu } = useMenuQuery()

  return (
    <header className="bg-white md:p-6 p-3">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-16 bg-gray-950 rounded-large"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <span className="sr-only">Peter Onyegbule</span>
            <img
              className="mb-0 h-9 w-auto"
              src={Logo}
              alt={site.siteMetadata.title}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3BottomRight
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          {menu.menuItems.nodes?.map(item => (
            <Link
              key={item?.id}
              to={item?.url}
              className="text-sm  no-underline font-semibold font-Josefin leading-6 text-white decoration-0"
            >
              {item?.label}
            </Link>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Peter Onyegbule</span>
              <img
                className="h-8 w-auto"
                src={BlackLogo}
                alt={site.siteMetadata.title}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menu.menuItems.nodes?.map(item => (
                  <Link
                    key={item?.id}
                    to={item?.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
