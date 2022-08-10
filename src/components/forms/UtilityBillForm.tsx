import React from 'react'
import { Input,Button } from 'arvara';
import AEDC from '../../assets/homeDashboard/AEDC.svg';
import Ekedc from '../../assets/homeDashboard/EKEDC.svg';
import Ibedc from '../../assets/homeDashboard/IBEDC.svg';
import Ikeja from '../../assets/homeDashboard/IKEJA-ELECTRIC.svg';
import { AIarrowdown1Outlin } from '@olivermead-investment-ltd/arvara-icons';

export const UtilityBillForms = () => {
  return (
    <>
    <section>
      <h1 className="font-bold">Select Provider</h1>
      <div className="flex justify-between">
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Ikeja} className="mx-auto my-4"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={AEDC} className="mx-auto my-4"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Ekedc} className="mx-auto my-7"/>
        </div>
        <div className="h-14 w-20 bg-white rounded-2xl shadow-xl">
          <img src={Ibedc} className="mx-auto my-4"/>
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
              label="Meter Number"
              placeholder="Enter Meter Number"
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
