import TopNav from "../../components/topnav/Topnav"
import { Drawer, Tab } from "arvara"

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
import Password from "./AccountItems/Password"
import Profile from "./AccountItems/Profile"
import Contacts from "./AccountItems/Contacts"
import Bank from "./AccountItems/Bank"
import Mobile from "./AccountItems/Mobile"
import Terms from "./AccountItems/Terms"
import RateUs from "./AccountItems/RateUs"
import Faqs from "./AccountItems/Faqs"
import DebitCards from "./AccountItems/DebitCards"


const Account = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openPassword, setOpenPassword] = useState<boolean>(false);
  const [openDebit, setOpenDebit] = useState<boolean>(false);
  const [openBenificiary, setOpenBenificiary] = useState<boolean>(false);
  const [openTerms, setOpenTerms] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<boolean>(false);
  const [openContacts, setOpenContacts] = useState<boolean>(false);
  const [openRate, setOpenRate] = useState<boolean>(false);

  const handleProfileDropdown = () => setOpen(!open)

  const handlePasswordDropdown = () => setOpenPassword(!openPassword)

  const handleDebitDropdown = () => setOpenDebit(!openDebit)

  const handleBenificiaryDropdwon = () => setOpenBenificiary(!openBenificiary)

  const TermsDropdwon = () => setOpenTerms(!openTerms)

  const FaqsDropdwon = () => setOpenFaqs(!openFaqs)

  const ContactDropdwon = () => setOpenContacts(!openContacts)

  const RateDropdwon = () => setOpenRate(!openRate)

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
      title: "Debit Cards & Bank",
      onclick: handleDebitDropdown
    }, {
      img: BeneficiaryIcon,
      title: "Beneficiary",
      onclick: handleBenificiaryDropdwon
    }, {
      img: TermsIcon,
      title: "Term of Use",
      onclick: TermsDropdwon
    }, {
      img: FaqsIcon,
      title: "FAQs",
      onclick: FaqsDropdwon
    }, {
      img: ContactIcon,
      title: "Contact Us",
      onclick: ContactDropdwon
    }, {
      img: RateUsIcon,
      title: "Rate Us",
      onclick: RateDropdwon
    }]

  return (
    <section>
      <TopNav title="Account!" />
      <div className="grid grid-cols-3">

        <div className="col-span-3"></div>
        <div className="col-span-1"></div>
      </div>
      <div className="flex gap-16  mt-8">
        {/* first col */}
        <div className="flex flex-col gap-5 w-max px-4 text-[#141C1F]">
          {listAccountDetail.map((item, i) =>
            <span className="cursor-pointer flex items-center gap-3" key={i}
              onClick={item.onclick}
            > <img src={item.img} alt="icons" /> {item.title}</span>
          )}
        </div>

        {/* second col */}
        <div className=" flex-1 xl:mr-60">
          <div className="flex items-center gap-5">
            {/* <Drawer position="right" close={() => setOpen(!open)} header="" ></Drawer> */}
            <div className="relative w-32 md:w-40">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" className="rounded-full cursor-pointer shadow-lg" />
              <img src={CameraIcon} className="right-4 bottom-0 absolute" alt="CameraIcon" />
            </div>


            <div className="flex flex-col items-start my-4 space-y-2">
              <h1 className="font-bold text-[#141C1F] text-2xl md:text-4xl">Gerald Onyekachi</h1>
              <p className="text-[#668A99]">fitzgeraldkachi@gmail.com</p>
              <p className="text-[#668A99]">09039278115</p>
            </div>

          </div>

          <div>

            <div className="grid md:grid-cols-2 gap-6 my-10 flex-3">
              <div className="border p-5 space-y-2 border-[#065373] text-[#065373] rounded-2xl">
                <p className="text-base">Wallet ID</p>
                <p className="font-bold">09039278115</p>
              </div>
              <div className="border border-[#065373] text-[#065373] rounded-2xl p-5 space-y-2">
                <p className="text-base">Loan Balance</p>
                <p className="font-bold">₦ 250,000</p>
              </div>
              <div className="border border-[#065373] text-[#065373] rounded-2xl p-5 space-y-2">
                <p className="text-base">Next Repayment</p>
                <p className="font-bold">₦ 450,000</p>
              </div>
              <div className="border border-[#065373] text-[#065373] rounded-2xl p-5 space-y-2">
                <p className="text-base">Default Charges</p>
                <p className="font-bold">₦ 180</p>
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
          header="Profile"
          open={open}
          close={() => setOpen(!open)}
          position="right"
        >
          <Profile />

        </Drawer>

        <Drawer
          header="Password"
          open={openPassword}
          close={() => setOpenPassword(!openPassword)}
          position="right"
        >
          {/* <p>Password</p> */}
          <Password />
        </Drawer>
        <Drawer
          header={`Manage Cards & Bank`}
          open={openDebit}
          close={() => setOpenDebit(!openDebit)}
          position="right"
        >
          <DebitCards />
        </Drawer>
        <Drawer
          header="Beneficiary"
          open={openBenificiary}
          close={() => setOpenBenificiary(!openBenificiary)}
          position="right"
        >
          <Tab
            className=""
            data={[
              {
                name: "Bank",
                render: <>
                  <Bank />
                </>
              },
              {
                name: "Mobile",
                render:
                  <>
                    <Mobile />
                  </>
              },
            ]}
          />
        </Drawer>

        <Drawer
          header="Terms"
          open={openTerms}
          close={() => setOpenTerms(!openTerms)}
          position="right"
        >
          <Terms />
        </Drawer>
        <Drawer
          header="Faqs"
          open={openFaqs}
          close={() => setOpenFaqs(!openFaqs)}
          position="right"
        >
          <Faqs />
        </Drawer>
        <Drawer
          header="Contacts"
          open={openContacts}
          close={() => setOpenContacts(!openContacts)}
          position="right"
        >
          <Contacts />
        </Drawer>
        <Drawer
          header="Rate"
          open={openRate}
          close={() => setOpenRate(!openRate)}
          position="right"
        >
          <RateUs />
        </Drawer>


      </div>

    </section>
  )
}

export default Account
