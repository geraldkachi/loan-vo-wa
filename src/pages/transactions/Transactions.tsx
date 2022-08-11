import TopNav from "../../components/topnav/Topnav"
import NoTransactionIcon from "./no-transaction-icon.svg"

import { Card, Avatar } from 'arvara';
import Male from '../../assets/homeDashboard/male.svg';
import Female from '../../assets/homeDashboard/female.svg';
import { AIreceiptaddbol, AImobilebol } from 'arvara-icons';
import { useState } from "react"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const Transactions = () => {

  const [openDate, setOpenDate] = useState(false)
  const [openDateEnd, setOpenDateEnd] = useState(false)
  const [date, setDate] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])
  return (
    <div>
      <TopNav title="Transactions!" />
      <div className="flex items-center my-2 justify-between">

        <div className="flex items-center gap-3" onClick={() => setOpenDate(prev => !prev)}>
          <div className="flex items-center border p-4 border-[#065373] cursor-pointer rounded-sm">
            <p>Start Date</p>
            <span className="gap-x-10 space-x-10">{`- ${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
            {openDate
              &&
              <DateRange
                editableDateInputs
                moveRangeOnFirstSelection={false}
                onChange={(i: any) => setDate([i.selection])}
                range={date}
                className="date absolute top-48 z-10"
                ninDate={new Date()}
              />
            }
          </div>

          <div className="flex items-center border p-4 border-[#065373] cursor-pointer rounded-sm" onClick={() => setOpenDateEnd(prev => !prev)}>
            <p >End Date</p>
            <span>{`- ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDateEnd
              &&
              <DateRange
                editableDateInputs
                onChange={(i: any) => setDate([i.selection])}
                moveRangeOnFirstSelection={false}
                range={date}
                className="date absolute top-48 z-10"
                ninDate={new Date()}
              />
            }
          </div>

        </div>
        <div className="items-center flex gap-10">
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

            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
              <section className="md:flex md:justify-between">
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
          </>



          {/* Yesterday */}

          <>
            <div className="mt-10">
              <h1 className="text-grey-slate text-left">YESTERDAY</h1>
            </div>

            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
              <section className="md:flex md:justify-between">
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
            <Card className="my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
              <section className="md:flex md:justify-between">
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
          </>
        </div>

        {/* for Adeverts */}
        <div className="col-span-1 h-max"></div>
      </div>



      {/* NO Transactiosn */}

      <div className="flex  justify-center ">
        <img src={NoTransactionIcon} alt="NoTransactionIcon" />
      </div>

    </div>
  )
}

export default Transactions
