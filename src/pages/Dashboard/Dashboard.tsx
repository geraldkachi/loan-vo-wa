import { Button } from 'arvara';
import Star from '../../assets/dashboard/Looper-2.svg';
import Hand from '../../assets/dashboard/hand-with-coin.svg';
import PersonalInfo from '../../assets/dashboard/freepik.svg';
import VerifyEmail from '../../assets/dashboard/illustration.svg';
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
          <p className="text-grey-slate mt-3 md:text-sm text-xs">Take care of your essential bills</p>
        </div>
        <div className="bg-white md:w-56 w-40 md:h-56 h-40 rounded-2xl shadow-2xl md:p-5 p-2 pt-8 md:mt-0 mt-5 md:ml-5 ml-20">
          <AImobilebol className="text-blue mx-auto md:mt-5" />
          <h1 className="mt-6 md:text-xl font-bold">Airtime/Data</h1>
          <p className="text-grey-slate mt-3 md:text-sm text-xs">Recharge any mobile phone easily</p>
        </div>
      </div>
      <div className="p-7 ml-3 flex">
        <div className="block p-6 rounded-2xl bg-yellow long-card1">
          <div className="flex">
          <img src={VerifyEmail} />
          <div className="text-left">
          <h5 className="text-white md:text-base text-sm leading-tight mb-2 ml-5">Verify your email address</h5>
            <p className="text-white mr-2 md:text-sm text-xs ml-5">Click to get full access</p>
          </div>
          </div>
        </div>
      </div>
      <div className="ml-10 flex">
        <div className="block p-6 rounded-2xl shadow-xl border-grey-beau border bg-white long-card">
          <div className="flex">
          <img src={PersonalInfo} />
          <div className="text-left">
          <h5 className="md:text-base text-sm leading-tight mb-2 ml-10">Personal Info required</h5>
          <p className="md:text-sm text-xs text-grey-slate ml-10">Gender, Date of Birth, marital status...</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
