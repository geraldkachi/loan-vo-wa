import TopNav from "../../components/topnav/Topnav"
import NoTransactionIcon from "./no-transaction-icon.svg"
import SettingsIcon from "./settings.svg"

import { Card, Avatar, Drawer } from 'arvara';
import Male from '../../assets/homeDashboard/male.svg';
import Female from '../../assets/homeDashboard/female.svg';
import { AIreceiptaddbol, AImobilebol } from 'arvara-icons';
import { useState } from "react"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import TransactionsItems from "./TransactionsItems/TransactionsItems";
import Dropdown from "../../components/DropDown/DropDown";


const transacType = [
  {
    "heading": "All",
  },
  {
    "heading": "Repayment",
  },
  {
    "heading": "Disbursement",
  },
  {
    "heading": "Transfers",
  },
]

const Transactions = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleTransactionDetails = () => setOpen(!open)

  const [openDate, setOpenDate] = useState(false)
  const [openDateEnd, setOpenDateEnd] = useState(false)
  const [date, setDate] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])

  const renderTransacTypeItems = (item: any, index: number) => (
    <div className="flex px-2 py-5  hover:bg-opacity-5 hover:bg-black w-full hover:rounded-xl text-center gap-x-10" key={index}>
      <div className="text-[#141C1F] text-sm font-semibold">{item.heading}</div>
    </div>
  )

  return (
    <div>
      <TopNav title="Transactions" />
      <div className="flex flex-wrap items-center my-2 justify-between">

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-x-5">
            <p onClick={() => setOpenDate(prev => !prev)} className="border p-4 border-[#C2D0D6] border-1 text-[#065373] rounded-lg cursor-pointer ">Start Date</p>
            {/* <span onClick={() => setOpenDate(prev => !prev)} className="border p-4 border-[#C2D0D6] text-[#065373] border-1 cursor-pointer rounded-lg">{`- ${format(date[0].startDate, "MM/dd/yyyy")}`}</span> */}
            {openDate
              &&
              <DateRange
                editableDateInputs
                moveRangeOnFirstSelection={false}
                onChange={(i: any) => setDate([i.selection])}
                ranges={date}
                className="date absolute top-48 z-10"
                minDate={new Date()}
              />
            }
          </div>

          <div className="sm:flex items-center gap-x-5 hidden">
            <p onClick={() => setOpenDateEnd(prev => !prev)} className="border p-4 border-[#C2D0D6] border-1 text-[#065373] rounded-lg cursor-pointer ">End Date</p>
            {/* <span className="border p-4 border-[#C2D0D6] text-[#065373] border-1  rounded-lg cursor-pointer " onClick={() => setOpenDateEnd(prev => !prev)}>{`- ${format(date[0].endDate, "MM/dd/yyyy")}`}</span> */}
            {openDateEnd
              &&
              <DateRange
                editableDateInputs
                onChange={(i: any) => setDate([i.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date absolute top-48 z-10"
                minDate={new Date()}
              />
            }
          </div>


          <Dropdown
            className="z-[2]"
            contentData={transacType}
            renderItems={(item: any, index: number) => renderTransacTypeItems(item, index)}
          >

            <div className="flex items-center gap-x-5">
              <span className="border p-4 border-[#C2D0D6] text-[#065373] border-1  rounded-lg cursor-pointer">
                <img className="inline-flex gap-x-3" src={SettingsIcon} alt="settings" />  &nbsp;
                Transaction Type
              </span>
            </div>
          </Dropdown>

        </div>
        <div className="items-center lg:flex gap-10 hidden ">
          <p>1-10 of 100 Items</p>
          <p className="px-3 rounded-md bg-[#065373] text-white">1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-2">


          <>
            <div className="mt-10">
              <h1 className="text-grey-slate text-left">TODAY</h1>
            </div>


            <div onClick={handleTransactionDetails} className="cursor-pointer">
              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
                <section className="flex justify-between">
                  <div className="flex">
                    <div className="border-none w-12 h-12 rounded-full bg-yellow bg-opacity-25">
                      <AIreceiptaddbol className="text-yellow mx-3.5 my-2" />
                    </div>
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5 ">
                      <h1 className="text-black font-bold">Dstv Subscription</h1>
                      <p className="md:text-sm text-xs text-grey-slate md:float-left">24/02/2022 - 07:40 AM</p>
                    </div>
                  </div>
                  <div className="se">
                    <h1 className="text-red text-center"> -₦5,000</h1>
                  </div>
                </section>
              </Card>
            </div>

            <div onClick={handleTransactionDetails} className="cursor-pointer">
              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
                <section className="flex justify-between">
                  <div className="flex">
                    <Avatar image={Male} className="text-yellow ml-1.5 my-2" />
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Daniel Abayomi</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">24/02/2022 - 09:40 AM</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-red text-center"> -₦7,000</h1>
                  </div>
                </section>
              </Card>
            </div>

            <div onClick={handleTransactionDetails} className="cursor-pointer">
              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
                <section className="flex justify-between">
                  <div className="flex">
                    <Avatar image={Female} className="text-yellow" />
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Simi Ayodele</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">29/05/2022 - 03:40 PM</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-meador text-center"> -₦2,500</h1>
                  </div>
                </section>
              </Card>
            </div>

            <div onClick={handleTransactionDetails} className="cursor-pointer">
              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
                <section className="flex justify-between">
                  <div className="flex">
                    <div className="border-none md:w-12 md:h-12 rounded-full bg-bluetiful bg-opacity-25">
                      <AImobilebol className="text-bluetiful mx-auto md:mt-2.5 mt-2.5" />
                    </div>
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Airtime Top-up</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">Sent</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-red text-center"> -₦20,000</h1>
                  </div>
                </section>
              </Card>
            </div>
          </>



          {/* Yesterday */}

          <>
            <div className="mt-10">
              <h1 className="text-grey-slate text-left">YESTERDAY</h1>
            </div>


            <div onClick={handleTransactionDetails} className="cursor-pointer">
              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
                <section className="flex justify-between">
                  <div className="flex">
                    <div className="border-none w-12 h-12 rounded-full bg-yellow bg-opacity-25">
                      <AIreceiptaddbol className="text-yellow mx-3.5 my-2" />
                    </div>
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5 ">
                      <h1 className="text-black font-bold">Dstv Subscription</h1>
                      <p className="md:text-sm text-xs text-grey-slate md:float-left">24/02/2022 - 07:40 AM</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-red text-center"> -₦5,000</h1>
                  </div>
                </section>
              </Card>
            </div>
            <div onClick={handleTransactionDetails} className="cursor-pointer">

              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
                <section className="flex justify-between">
                  <div className="flex">
                    <Avatar image={Male} className="text-yellow ml-1.5 my-2" />
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Daniel Abayomi</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">24/02/2022 - 09:40 AM</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-red text-center"> -₦7,000</h1>
                  </div>
                </section>
              </Card>
            </div>
            <div onClick={handleTransactionDetails} className="cursor-pointer">

              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
                <section className="flex justify-between">
                  <div className="flex">
                    <Avatar image={Female} className="text-yellow" />
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Simi Ayodele</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">29/05/2022 - 03:40 PM</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-meador text-center"> -₦2,500</h1>
                  </div>
                </section>
              </Card>
            </div>
            <div onClick={handleTransactionDetails} className="cursor-pointer">

              <Card className="my-5 block p-6 cursor-pointer rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
                <section className="flex justify-between">
                  <div className="flex">
                    <div className="border-none md:w-12 md:h-12 rounded-full bg-bluetiful bg-opacity-25">
                      <AImobilebol className="text-bluetiful mx-auto md:mt-2.5 mt-2.5" />
                    </div>
                    <div className="md:text-base text-sm leading-tight mb-2 ml-5">
                      <h1 className="text-black font-bold">Airtime Top-up</h1>
                      <p className="md:text-sm text-xs text-grey-slate float-left">Sent</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-red text-center"> -₦20,000</h1>
                  </div>
                </section>
              </Card>
            </div>
          </>
        </div>

        {/* for Adeverts */}
        <div className="col-span-1 h-max"></div>
      </div>



      {/* NO Transactiosn */}

      <div className="flex  justify-center ">
        {/* <img src={NoTransactionIcon} alt="NoTransactionIcon" /> */}
      </div>

      {/* Draweer */}
      <Drawer
        header="Transactions Details"
        open={open}
        close={() => setOpen(!open)}
        position="right"
        subheader={"Transactions Details"}

      >
        <TransactionsItems {...{ handleTransactionDetails }} {...{open}} {...{setOpen}} />
      </Drawer>
    </div>
  )
}

export default Transactions
