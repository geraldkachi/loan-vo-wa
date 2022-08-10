import TopNav from "../../components/topnav/Topnav"
import { Drawer } from "arvara"

import ProfileIcon from "./profile icon.svg"
import PasswordIcon from "./password icon.svg"
import DebitCardIcon from "./DebitCardIcon.svg"
import BeneficiaryIcon from "./beneficiary icon.svg"
import TermsIcon from "./Terms of Use icon.svg"
import FaqsIcon from "./FAQs iocn.svg"
import ContactIcon from "./contact us icon.svg"
import RateUsIcon from "./Rate us icon.svg"
import CameraIcon from "./camera.svg"
import { useState } from "react"
import Switch from "./Switch"



const transactionCard = [
  ""
]


const Account = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleProfileDropdown = () => {
    setOpen(!open)
  }
  const handlePasswordDropdown = () => {
    setOpen(!open)
  }


  const listAccountDetail = [
    {
      img: ProfileIcon,
      title: "Profile",
      onclick: handleProfileDropdown,
    }, {
      img: PasswordIcon,
      title: "Password",
      onclick: handlePasswordDropdown
    }, {
      img: DebitCardIcon,
      title: "Debit Cards",
    }, {
      img: BeneficiaryIcon,
      title: "Beneficiary",
    }, {
      img: TermsIcon,
      title: "Term of UISe",
    }, {
      img: FaqsIcon,
      title: "FAQs",
    }, {
      img: ContactIcon,
      title: "Contact Us",
    }, {
      img: RateUsIcon,
      title: "Rate Us"
    }]

  return (
    <section>
      <TopNav title="Account!" />
      <div className="grid grid-cols-3">

        <div className="col-span-3"></div>
        <div className="col-span-1"></div>
      </div>
      <div className="flex gap-16 ">
        {/* first col */}
        <div className="flex flex-col  gap-5 w-max px-4 text-[#141C1F]">
          {listAccountDetail.map((item, i) =>
            <span className="cursor-pointer flex items-center gap-3" key={i}
              onClick={item.onclick}
            > <img src={item.img} alt="icons" /> {item.title}</span>
          )}
        </div>

        {/* second col */}
        <div className=" flex-1 xl:mr-60">
          <div className="flex items-center gap-5">
            <Drawer position="right" close={() => setOpen(!open)} header="" ></Drawer>

            <div className="relative w-20 md:w-40">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" className="rounded-full cursor-pointer w-40 shadow-lg" />
              <img src={CameraIcon} alt="CameraIcon" className="absolute bottom-0 -right-2 md:right-4 scale-75" />
            </div>

            <div className="flex flex-col items-start my-4 space-y-2">
              <h1 className="font-bold text-[#141C1F] text-2xl md:text-4xl">Gerald Onyekachi</h1>
              <p>fitzgeraldkachi@gmail.com</p>
              <p>09039278115</p>
            </div>

          </div>

          <div>

            <div className="grid md:grid-cols-2 gap-6 my-10 flex-3">
              <div className="border p-5 space-y-2 rounded-2xl">
                <p>Wallet ID</p>
                <p>09039278115</p>
              </div>
              <div className="border rounded-2xl p-5 space-y-2">
                <p>Wallet ID</p>
                <p>09039278115</p>
              </div>
              <div className="border rounded-2xl p-5 space-y-2">
                <p>Wallet ID</p>
                <p>09039278115</p>
              </div>
              <div className="border rounded-2xl p-5 space-y-2">
                <p>Wallet ID</p>
                <p>09039278115</p>
              </div>
            </div>

          </div>
          <div className="flex items-center gap-x-10">
            <p className="text-[#141C1F] font-medium">Show Dashboard Balances</p>
            <Switch label="" className="" />
          </div>

        </div>

        {/* stop here */}
        <Drawer
          open={open}
          close={() => setOpen(!open)}
          position="right"
        >
          <p>profile me</p>
        </Drawer>

        <Drawer
          header="Profile"
          open={open}
          close={() => setOpen(!open)}
          position="right"
        >
          <p>profile me</p>
        </Drawer>
        <Drawer
          header="Password"
          open={open}
          close={() => setOpen(!open)}
          position="right"
        >
          <p>Password me</p>
        </Drawer>


      </div>

    </section>
  )
}

export default Account
