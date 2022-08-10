import { Card } from 'arvara';
import Bvn from '../../../assets/homeDashboard/bvnDetails.svg';
import PersonalInfo from '../../../assets/homeDashboard/freepik.svg';
import VerifyEmail from '../../../assets/homeDashboard/illustration.svg';
import Transaction from '../../../assets/homeDashboard/transactionPin.svg';
import Employment from '../../../assets/homeDashboard/employmentRecord.svg';

const TodoCard = () => {
  return (
    <>
    <section className="mt-16">
      <div className="">
        <h1 className="text-grey-slate text-left font-bold">To-Do Tasks</h1>
      </div>
      <Card className="my-5 long-card block p-6 rounded-2xl shadow-xl bg-yellow hover:bg-grey-beau">
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

      <Card className="my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={PersonalInfo} />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-10 text-black font-bold">
              Personal Info required
            </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-10">
              Gender, Date of Birth, marital status...
            </p>
          </div>
        </div>
      </Card>
      <Card className="my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Bvn} />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-10 text-black font-bold">BVN Details</h5>
            <p className="md:text-sm text-xs text-grey-slate ml-10">Click to submit your BVN</p>
          </div>
        </div>
      </Card>
      <Card className="my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Transaction} className="-ml-3" />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-5 text-black font-bold">Transaction Pin </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-5">
              Click to set your transaction pin
            </p>
          </div>
        </div>
      </Card>
      <Card className="my-5 long-card block p-6 rounded-2xl shadow-xl border-grey-beau border hover:bg-white-azure">
        <div className="flex">
          <img src={Employment} className="-ml-3" />
          <div className="text-left">
            <h5 className="md:text-base text-sm leading-tight mb-2 ml-5 text-black font-bold">Employment Records </h5>
            <p className="md:text-sm text-xs text-grey-slate ml-5">
              Click to update your employment records
            </p>
          </div>
        </div>
      </Card>
      </section>
    </>
  )
}

export default TodoCard