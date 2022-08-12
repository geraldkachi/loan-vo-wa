import { Input, Button, DropDown } from 'arvara';
import Mtn from '../../assets/homeDashboard/mtn logo.svg';
import Airtel from '../../assets/homeDashboard/airtel.svg';
import mobile from '../../assets/homeDashboard/9mobile.svg';
import glo from '../../assets/homeDashboard/glo.svg';
import { AIarrowdown1Outlin, AIusersquarebol } from '@olivermead-investment-ltd/arvara-icons';

const Network= [
  {label: 'MTN-Nigeria', value: 'MTN-Nigeria'},
  {label: 'Airtel', value: 'Airtel'},
  {label: '9mobile', value: '9mobile'},
  {label: 'Glo', value: 'Glo'},
]
const DataPlan = [
  {label: '50', value: '40MB Daily Plan'},
  {label: '100', value: '100MB Daily Plan'},
  {label: '200', value: '1GB Daily Plan'},
  {label: '500', value: '2.5GB 2-Days Plan'},
  {label: '200', value: '200MB 3-Days Plan'},
]

export const DataForms = () => {
  return (
    <>
      <section>
        <div className="mt-8">
          <div className="flex justify-between">
            <img src={Mtn} className="" />
            <img src={Airtel} className="" />
            <img src={mobile} className="" />
            <img src={glo} className="" />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="bg-grey-beau rounded-xl h-12 w-28">
            <h1 className="text-center my-2">₦100.00</h1>
          </div>
          <div className="bg-grey-beau rounded-xl h-12 w-28 ">
            <h1 className="text-center my-2">₦500.00</h1>
          </div>
          <div className="bg-grey-beau rounded-xl h-12 w-28">
            <h1 className="text-center my-2">₦1,000.00</h1>
          </div>
        </div>
        <form>
          <DropDown
						label={'Network'}
            placeholder="Select"
            className="mt-5"
						data={Network}
						getValue={v => v.value.toString()}
					/>
          <DropDown
						label={'Plan'}
            placeholder="Select"
            className="mt-5"
						data={DataPlan}
						getValue={v => v.value.toString()}
					/>
          <Input label="Amount (NGN)" placeholder="0.00" value="" className="mt-5" />
          <Input
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            value=""
            className="mt-5"
            TrailingIcon={() => <AIusersquarebol />}
          />
          <div className="mt-8">
            <Button type="button" className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
