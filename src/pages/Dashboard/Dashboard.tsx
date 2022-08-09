import { Avatar, Button, Card } from 'arvara';
import Male from '../../assets/homeDashboard/male.svg';
import Female from '../../assets/homeDashboard/female.svg';
import Star from '../../assets/homeDashboard/Looper-2.svg';
import Bvn from '../../assets/homeDashboard/bvnDetails.svg';
import Hand from '../../assets/homeDashboard/hand-with-coin.svg';
import PersonalInfo from '../../assets/homeDashboard/freepik.svg';
import VerifyEmail from '../../assets/homeDashboard/illustration.svg';
import Transaction from '../../assets/homeDashboard/transactionPin.svg';
import Employment from '../../assets/homeDashboard/employmentRecord.svg';
import { AIwallet3Outlin, AIsend2Bol, AIreceiptaddbol, AImobilebol } from 'arvara-icons';

const Dashboard = () => {
  return (
    <>
      <div className="p-12 md:flex">
        <div className="bg-blue md:w-1/4 sm:w-96 md:h-56 rounded-2xl p-5 pt-8 md:shrink-0">
          <div className="flex justify-between">
            <h1 className="text-grey-slate text-base">Wallet Balance</h1>
            <div className="flex">
              <p className="text-white">0090123499</p>
              <AIwallet3Outlin className="text-white ml-1" />
            </div>
          </div>
          <div className="text-white text-2xl mt-1 absolute font-bold">NGN 150,000</div>
          <div className="grid grid-flow-row auto-rows-max">
            <div className="md:mt-16 mt-8 ">
              <Button type="button" variant="outline" className="md:h-14 md:w-44 w-40">
                Fund Wallet
              </Button>
            </div>
            <div className="absolute md:ml-20 md:-mt-14 -mt-0">
              <img src={Star} className="" />
            </div>
          </div>
        </div>
        <div className="bg-meador md:w-64 sm:w-80 md:h-56 rounded-2xl md:p-5 p-2 pt-8 md:ml-10 ml-0 md:mt-0 mt-5">
          <img src={Hand} />
          <p className="text-white text-base md:mt-4 mt-2">
            Get loans in minutes (up to NGN 500,000) in your Arvo wallet
          </p>
          <div className="mt-2 flex justify-center">
            <Button type="button" variant="outline" className="md:h-14 md:w-52 w-52 border-none">
              Apply for Loan
            </Button>
          </div>
        </div>
      </div>
      <div className="md:ml-10 ml-7 grid md:grid-cols-3 md:gap-3 grid-cols-2 small-card">
        <div className="bg-white md:w-56 w-40 md:h-56 h-40 rounded-2xl shadow-2xl md:p-5 p-2 pt-8 md:mt-0 mt-5">
          <AIsend2Bol className="text-blue mx-auto md:mt-5 -mt-5" />
          <h1 className="mt-6 md:text-xl font-bold">Send money</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs">
            Transfer money from your wallet to all banks
          </p>
        </div>
        <div className="bg-white md:w-56 w-40 md:h-56 h-40 rounded-2xl shadow-2xl md:p-5 p-2 pt-8 md:mt-0 mt-5 md:ml-3 ml-24">
          <AIreceiptaddbol className="text-blue mx-auto md:mt-5" />
          <h1 className="mt-6 md:text-xl font-bold">Bills</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs">
            Take care of your essential bills
          </p>
        </div>
        <div className="bg-white md:w-56 w-40 md:h-56 h-40 rounded-2xl shadow-2xl md:p-5 p-2 pt-8 md:mt-0 mt-5 md:ml-5 ml-20">
          <AImobilebol className="text-blue mx-auto md:mt-5" />
          <h1 className="mt-6 md:text-xl font-bold">Airtime/Data</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs">
            Recharge any mobile phone easily
          </p>
        </div>
      </div>

      <Card className="ml-10 my-5 long-card block p-6 rounded-2xl shadow-xl bg-yellow hover:bg-grey-beau">
        <div className="flex">
          <img src={VerifyEmail} />
          <div className="text-left">
            <h5 className="text-white md:text-base text-sm leading-tight mb-2 ml-5">
              Verify your email address
            </h5>
            <p className="text-white mr-2 md:text-sm text-xs ml-5">Click to get full access</p>
          </div>
        </div>
      </Card>

      <Card className="ml-10 my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={PersonalInfo} />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-10">
              Personal Info required
            </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-10">
              Gender, Date of Birth, marital status...
            </p>
          </div>
        </div>
      </Card>
      <Card className="ml-10 my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Bvn} />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-10">BVN Details</h5>
            <p className="md:text-sm text-xs text-grey-slate ml-10">Click to submit your BVN</p>
          </div>
        </div>
      </Card>
      <Card className="ml-10 my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Transaction} className="-ml-3" />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-5">Transaction Pin </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-5">
              Click to set your transaction pin
            </p>
          </div>
        </div>
      </Card>
      <Card className="ml-10 my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Employment} className="-ml-3" />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-5">Employment Records </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-5">
              Click to update your employment records
            </p>
          </div>
        </div>
      </Card>

      <div className="ml-10 mt-10">
        <h1 className="text-grey-slate text-left">Recent Transactions</h1>
      </div>

      <Card className="ml-10 my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
        <section className="flex justify-between">
          <div className="flex">
            <div className="border-none w-12 h-12 rounded-full bg-yellow bg-opacity-25">
              <AIreceiptaddbol className="text-yellow mx-3.5 my-2" />
            </div>
            <div className="md:text-base text-sm leading-tight mb-2 ml-5">
              <h1>Dstv Subscription</h1>
              <p className="md:text-sm text-xs text-grey-slate ml-5">24/02/2022 - 07:40 AM</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-red"> -₦5,000</h1>
          </div>
        </section>
      </Card>
      <Card className="ml-10 my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
        <section className="flex justify-between">
          <div className="flex">
              <Avatar image={Male} className="text-yellow ml-1.5 my-2" />
            <div className="md:text-base text-sm leading-tight mb-2 ml-5">
              <h1>Daniel Abayomi</h1>
              <p className="md:text-sm text-xs text-grey-slate ml-5">24/02/2022 - 09:40 AM</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-red"> -₦7,000</h1>
          </div>
        </section>
      </Card>
      <Card className="ml-10 my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
        <section className="flex justify-between">
          <div className="flex">
              <Avatar image={Female} className="text-yellow ml-1.5 my-2" />
            <div className="md:text-base text-sm leading-tight mb-2 ml-10">
              <h1 className="mr-12">Simi Ayodele</h1>
              <p className="md:text-sm text-xs text-grey-slate float-left">29/05/2022 - 03:40 PM</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-meador"> -₦2,500</h1>
          </div>
        </section>
      </Card>
      <Card className="ml-10 my-5 block p-6 rounded-2xl shadow-xl border-grey-beau border bg-opacity-50 long-card">
        <section className="flex justify-between">
          <div className="flex">
            <div className="border-none w-12 h-12 rounded-full bg-bluetiful bg-opacity-25">
            <AImobilebol className="text-bluetiful mx-auto md:mt-2.5" />
            </div>
            <div className="md:text-base text-sm leading-tight mb-2 ml-10">
              <h1 className="">Airtime Top-up</h1>
              <p className="md:text-sm text-xs text-grey-slate float-left">Sent</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-red"> -₦20,000</h1>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Dashboard;
