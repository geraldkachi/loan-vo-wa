import "./layout.css"
import { Outlet } from "react-router-dom"
// import TopNav from "../topnav/Topnav"
import Sidebar from "../sidebar/Sidebar"
import NotificationFeature from "./NotificationFeature"



const Layout = () => {

  return (
    <>
      <section className={`layout`}>
        <Sidebar />
        <div className="layout__content">
          {/* <TopNav /> */}
          <div className="layout__content-main">
            <Outlet />
          </div>
            <NotificationFeature />
        </div>
      </section>
    </>
  )
}

export default Layout
