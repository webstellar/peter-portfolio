import * as React from "react"

const Footer = () => (
  <footer className="bg-white p-6">
    <nav className="p-4 lg:px-6 bg-slate-900 rounded-large" aria-label="Global">
      <div className="flex justify-start"></div>
      <div className="flex justify-center text-white">
        © {new Date().getFullYear()} &middot; Built with
        <a href="https://www.gatsbyjs.com" className="no underline">
          {" "}
          Gatsby
        </a>
      </div>
      <div className="flex justify-end"></div>
    </nav>
  </footer>
)

export default Footer
