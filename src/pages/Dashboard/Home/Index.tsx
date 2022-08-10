import { useState } from 'react';
import TodoCard from './TodoCard';
import { Button, Tab } from 'arvara';
import Drawer from '../../../components/Drawer';
import RecentTransaction from './RecentTransaction';
import TopNav from "../../../components/topnav/Topnav";
import Star from '/src/assets/homeDashboard/Looper-2.svg';
import { PinForm } from '../../../components/forms/PinForm';
import { DataForms } from '../../../components/forms/DataForm';
import Hand from '/src/assets/homeDashboard/hand-with-coin.svg';
import { CableForm } from '../../../components/forms/CableForm';
import { MobileForms } from '../../../components/forms/MobileForm';
import { SendMoneyForm } from '../../../components/forms/SendMoneyForm';
import { UtilityBillForms } from '../../../components/forms/UtilityBillForm';
import { AIwallet3Outlin, AIsend2Bol, AIreceiptaddbol, AImobilebol } from 'arvara-icons';

const Dashboard = () => {
  const [isBill, setIsBill] = useState(false)
  const [isAirtel, setIsAirtel] = useState(false);
  const [isSendMoney, setIsSendMoney] = useState(false);
  const [step, setStep] = useState(0);

  const onFinishStep = () => {
    setStep(1);
  }
  const closeDrawer = () => {
    setStep(0);
    setIsSendMoney(false)
  }
  return (
    <>
      <TopNav title="Welcome Back!" titleUser="Hello Lord Gerald Kachi" icon />

      <div className="grid md:grid-cols-3 gap-10">
        {/* cols one */}
        <div className="col-span-2 ">
        <div className='md:flex md:flex-row'>
          <div className="bg-blue md:h-56 rounded-2xl p-5 pt-8 md:shrink-0 basis-2/3 col-span-1">
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
              <div className="absolute float-right">
                <img src={Star} className="justify-end" />
              </div>
            </div>

          </div>
            <div className="col-span-1 bg-meador md:w-64 sm:w-80 md:h-56 rounded-2xl md:p-5 p-2 pt-8 md:ml-10 ml-0 md:mt-0 mt-5 basis-1/3">
            <img src={Hand} />
            <p className="text-white text-base md:mt-4 mt-2">
              Get loans in minutes (up to NGN 500,000) in your Arvo wallet
            </p>
            <div className="mt-2 flex justify-center">
              <Button type="button" variant="outline"
                className="md:h-14 md:w-52 w-52 border-none">
                Apply for Loan
              </Button>
            </div>
          </div>
          </div>

          {/* for the three cards */}

          <div className="md:flex md:flex-row">

            <section className="grid md:grid-cols-3 md:gap-3 grid-cols-2 mt-8 w-full">
              <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsSendMoney(true)}>
                <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
                  <AIsend2Bol className="text-blue mx-3.5 my-4 cursor-pointer" />
                </div>
                <h1 className="mt-6 md:text-xl font-bold text-black text-center">Send money</h1>
                <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
                  Transfer money from your wallet to all banks
                </p>
              </div>
              <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsBill(true)}>
                <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
                  <AIreceiptaddbol className="text-blue mx-auto my-3.5 cursor-pointer" />
                </div>
                <h1 className="mt-6 md:text-xl font-bold text-black text-center">Bills</h1>
                <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
                  Take care of your essential bills
                </p>
              </div>
              <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsAirtel(true)}>
                <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
                  <AImobilebol className="text-blue mx-auto my-3.5 cursor-pointer" />
                </div>
                <h1 className="mt-6 md:text-xl font-bold text-black text-center">Airtime/Data</h1>
                <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
                  Recharge any mobile phone easily
                </p>
              </div>
            </section>
          </div>

          {/* end of the cards */}

          {/* list of .. */}

          {/* Todo section */}
          <TodoCard />

          {/* Recent Transactions */}
          <RecentTransaction />

          {/* list end ... */}
        </div>


        {/* cols 2 for adverts */}
        <div className="col-span-1 bg-grey-slate">
        Adverts
        </div>
      </div>
      <section className="p-5">

        <div className="md:flex md:flex-row">
          {/* <div className="bg-blue md:h-56 rounded-2xl p-5 pt-8 md:shrink-0 basis-2/3">
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
            <div className="absolute float-right">
              <img src={Star} className="justify-end"/>
            </div>
          </div>
        </div> */}


          {/* <div className="bg-meador md:w-64 sm:w-80 md:h-56 rounded-2xl md:p-5 p-2 pt-8 md:ml-10 ml-0 md:mt-0 mt-5 basis-1/3">
          <img src={Hand} />
          <p className="text-white text-base md:mt-4 mt-2">
            Get loans in minutes (up to NGN 500,000) in your Arvo wallet
          </p>
          <div className="mt-2 flex justify-center">
            <Button type="button" variant="outline"
            className="md:h-14 md:w-52 w-52 border-none">
              Apply for Loan
            </Button>
          </div>
        </div> */}
        </div>

        {/* <section className="grid md:grid-cols-3 md:gap-3 grid-cols-2 mt-8 w-full">
        <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsSendMoney(true)}>
          <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
          <AIsend2Bol className="text-blue mx-3.5 my-4 cursor-pointer"/>
          </div>
          <h1 className="mt-6 md:text-xl font-bold text-black text-center">Send money</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
            Transfer money from your wallet to all banks
          </p>
        </div>
        <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsBill(true)}>
          <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
          <AIreceiptaddbol className="text-blue mx-auto my-3.5 cursor-pointer"/>
          </div>
          <h1 className="mt-6 md:text-xl font-bold text-black text-center">Bills</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
            Take care of your essential bills
          </p>
        </div>
        <div className="bg-white md:h-56 h-auto rounded-2xl shadow-2xl md:p-5 p-2 md:mt-0 mt-3 small-card cursor-pointer hover:bg-white-azure" onClick={() => setIsAirtel(true)}>
          <div className="h-14 w-14 border border-grey-slate rounded-full mx-auto">
          <AImobilebol className="text-blue mx-auto my-3.5 cursor-pointer"/>
          </div>
          <h1 className="mt-6 md:text-xl font-bold text-black text-center">Airtime/Data</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs text-center">
            Recharge any mobile phone easily
          </p>
        </div>
      </section> */}

        {/* Todo section */}
        {/* <TodoCard /> */}

        {/* Recent Transactions */}
        {/* <RecentTransaction /> */}
      </section>

      {/* ********* Drawer section ********** */}
      {/* Send money */}
      <Drawer
        position="right"
        header={`${step === 0 ? "Send Money" : "Enter your pin"}`}
        open={isSendMoney}
        close={closeDrawer}
      >
        <>
          {step === 0 && <SendMoneyForm onFinishStep={onFinishStep} />}
          {step === 1 && <PinForm />}
        </>
      </Drawer>

      {/* Bills section */}
      <Drawer
        position="right"
        header={"Bills"}
        open={isBill}
        close={setIsBill}
      >
        <Tab
          className=""
          data={[
            {
              name: "Utility Bills",
              render: <>
                <UtilityBillForms />
              </>
            },
            {
              name: "Cable",
              render:
                <>
                  <CableForm />
                </>
            },
          ]}
        />
      </Drawer>

      {/* Airtime/Data section */}
      <Drawer
        position="right"
        header={"Mobile"}
        open={isAirtel}
        close={setIsAirtel}
      >
        <Tab
          className=""
          data={[
            {
              name: "Airtime",
              render: <>
                <MobileForms />
              </>
            },
            {
              name: "Data",
              render:
                <>
                  <DataForms />
                </>
            },
          ]}
        />
      </Drawer>
    </>
  );
};

export default Dashboard;
