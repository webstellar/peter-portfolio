import * as React from "react"

const Footer = () => (
  <footer className="bg-white md:p-6 p-3">
    <nav
      className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-6 bg-gray-950 rounded-large"
      aria-label="Global"
    >
      <div className="flex justify-start"></div>
      <div className="flex justify-center text-white">
        © {new Date().getFullYear()} &middot; Built by
        {` `}
        <a href="https://www.peteronyegbule.ng" className="font-josefin">
          Peter Onyegbule
        </a>
      </div>
      <div className="flex justify-end"></div>
    </nav>
  </footer>
)

export default Footer
