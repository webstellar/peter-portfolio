import * as React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
