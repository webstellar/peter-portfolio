import * as React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
      </div>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default Layout
