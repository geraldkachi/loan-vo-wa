import "./layout.css"
import { Outlet } from "react-router-dom"
import TopNav from "../topnav/Topnav"
import Sidebar from "../sidebar/Sidebar"



const Layout = () => {

  return (
    <>
      <section className={`layout`}>
        {/* <Sideb /> */}
        <Sidebar />
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
