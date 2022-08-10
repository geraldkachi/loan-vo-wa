import { Card, Avatar } from 'arvara';
import Male from '../../../assets/homeDashboard/male.svg';
import Female from '../../../assets/homeDashboard/female.svg';
import { AIreceiptaddbol, AImobilebol } from 'arvara-icons';

const RecentTransaction = () => {
  return (
    <>
    <div className="mt-10">
        <h1 className="text-grey-slate text-left">Recent Transactions</h1>
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
  )
}

export default RecentTransaction