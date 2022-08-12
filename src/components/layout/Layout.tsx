import "./layout.css"
import { Outlet } from "react-router-dom"
// import TopNav from "../topnav/Topnav"
import Sidebar from "../sidebar/Sidebar"
import NotificationFeature from "./NotificationFeature"
import { useWindowDimensions } from "arvara/lib"
import { useState } from "react"
import BottomNav from "../bottomnav/BottomNav"



const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { width } = useWindowDimensions()

  return (
    <>
      <section className={`layout`}>
        <Sidebar {...{ open }} {...{ setOpen }} />
        <div className={`layout__content ${open ? "pl-60" : "pl-20"} `}>
          {/* <TopNav /> */}
          <div className="layout__content-main">
            <Outlet />
          </div>
          {/* <NotificationFeature /> */}
        </div>
        <BottomNav />
      </section>
    </>
  )
}

export default Layout
