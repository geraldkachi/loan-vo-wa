import "./layout.css"
import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
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
        <div className={`layout__content ${open ? "sm:pl-60" : "sm:pl-20"} `}>
          {/* <TopNav /> */}
          <div className={`layout__content-main p-5 ${""}`}>
            <Outlet />
          </div>
        </div>
        <BottomNav />
      </section>
    </>
  )
}

export default Layout
