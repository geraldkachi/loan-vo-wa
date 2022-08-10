import TopNav from "../../components/topnav/Topnav"

import ProfileIcon from "./profile icon.svg"
import PasswordIcon from "./password icon.svg"
import DebitCardIcon from "./DebitCardIcon.svg"
import BeneficiaryIcon from "./beneficiary icon.svg"
import TermsIcon from "./Terms of Use icon.svg"
import FaqsIcon from "./FAQs iocn.svg"
import ContactIcon from "./contact us icon.svg"
import RateUsIcon from "./Rate us icon.svg"
import CameraIcon from "./camera.svg"

const listAccountDetail = [
  {
    img: ProfileIcon,
    title: "Profile",
  }, {
    img: PasswordIcon,
    title: "Password",
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

const transactionCard = [
  ""
]


const Transactions = () => {
  return (
    <div>
      <TopNav title="Transactions!" />
      <div className="flex gap-16 bg-blue basis-1/2">
        {/* first col */}
        <div className="flex flex-col  gap-5 w-max px-4 text-[#141C1F]">
          {listAccountDetail.map((item, i) => {
            return (
              <span className="cursor-pointer flex items-center gap-3" key={i}> <img src={item.img} alt="icons" /> {item.title}</span>
            )
          })}
        </div>

        {/* second col */}
        <div className="">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" className="rounded-full cursor-pointer w-48 shadow-lg" />
              <img src={CameraIcon} alt="CameraIcon" className="absolute bottom-0 right-4" />
            </div>

            <div className="flex flex-col items-start my-4 space-y-2">
              <h1 className="font-bold text-[#141C1F] text-4xl">Inyamah Gabriel</h1>
              <p>fitzgeraldkachi@gmail.com</p>
              <p>09039278115</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 my-10">
            <div className="border p-5 space-y-2 rounded-2xl">
              <p>Wallet ID</p>
              <p>09039278115</p>
            </div>
            <div className="border rounded-2xl p-5 space-y-2">
              <p>Wallet ID</p>
              <p>09039278115</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Transactions
