import { Input, Button, DropDown } from 'arvara';
import glo from '../../assets/homeDashboard/glo.svg';
import Mtn from '../../assets/homeDashboard/mtn logo.svg';
import Airtel from '../../assets/homeDashboard/airtel.svg';
import mobile from '../../assets/homeDashboard/9mobile.svg';
import { AIarrowdown1Outlin } from '@olivermead-investment-ltd/arvara-icons';

const Airtime= [
  {label: 'MTN-Nigeria', value: 'MTN-Nigeria'},
  {label: 'Airtel', value: 'Airtel'},
  {label: '9mobile', value: '9mobile'},
  {label: 'Glo', value: 'Glo'},
]
export const MobileForms = () => {
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
						label={'Provider'}
            placeholder="Select"
						data={Airtime}
						getValue={v => v.value.toString()}
					/>
          <Input label="Amount (NGN)" placeholder="0.00" value="" className="mt-5" />
          <Input
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            value=""
            className="mt-5"
            // TrailingIcon={() => <AIarrowdown1Outlin />}
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
