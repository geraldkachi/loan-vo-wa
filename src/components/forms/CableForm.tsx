import { Input, Button } from 'arvara'
import Dstv from '../../assets/homeDashboard/dstv.svg';
import Gotv from '../../assets/homeDashboard/gotv.svg';
import Startime from '../../assets/homeDashboard/startimes.svg';
import { AIarrowdown1Outlin } from 'arvara-icons';

export const CableForm = () => {
  return (
    <>
    <section>
      <h1 className="font-bold">Select Provider</h1>
      <div className="flex justify-between">
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Dstv} className="mx-auto my-4"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Gotv} className="mx-auto my-4"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Startime} className="mx-auto my-4"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Startime} className="mx-auto my-4"/>
        </div>
      </div>
      <form>
            <Input
              placeholder="Select"
              value=""
              className="mt-5"
              TrailingIcon={() => (
                <AIarrowdown1Outlin/>
              )}
            />
            <Input
              label="Plan"
              placeholder="Select"
              value=""
              className="mt-5"
            />
            <Input
              label="Amount"
              placeholder="₦0.00 (Autoloaded)"
              value=""
              className="mt-5"
            />
            <Input
              label="Smartcard/Decoder Number"
              placeholder="Enter Smartcard/Decoder Number"
              value=""
              className="mt-5"
            />
            <div className="mt-8">
              <Button type="button" className="w-full">
              Proceed
              </Button>
            </div>
          </form>
    </section>
    </>
  )
}
