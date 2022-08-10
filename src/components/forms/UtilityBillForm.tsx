import React from 'react'
import { Formik } from 'formik';
import { Input, Button } from 'arvara';
import AEDC from '../../assets/homeDashboard/AEDC.svg';
import Ekedc from '../../assets/homeDashboard/EKEDC.svg';
import Ibedc from '../../assets/homeDashboard/IBEDC.svg';
import Ikeja from '../../assets/homeDashboard/IKEJA-ELECTRIC.svg';
import { AIarrowdown1Outlin } from '@olivermead-investment-ltd/arvara-icons';

export const UtilityBillForms = () => (
    <>
    <section>
      <div className="flex">
        <div>
          <img src={Ikeja}/>
        </div>
        <div>
          <img src={AEDC}/>
        </div>
        <div>
          <img src={Ekedc}/>
        </div>
        <div>
          <img src={Ibedc}/>
        </div>
      </div>
      <Formik
      initialValues={{company: '', plan: '', amount: '', meterNumber: ''}}
      validate={values => {
        const errors = {};
        if(!values.company) {
          errors.company = 'Required'
        }{
          errors.company = 'Invalid company'
        }
      }}
      >
      <form onSubmit={handleSubmit}>
            <Input
              placeholder="Select"
              onChange={}
              value={}
              className="mt-5"
              TrailingIcon={() => (
                <AIarrowdown1Outlin/>
              )}
            />
            <Input
              label="Plan"
              placeholder="Select"
              onChange={}
              value={}
              className="mt-5"
            />
            <Input
              label="Account Name"
              placeholder="Autoloaded"
              onChange={}
              value={}
              className="mt-5"
            />
            <Input
              label="Amount (NGN)"
              placeholder="0.00"
              onChange={}
              value={}
              className="mt-5"
            />
            <div className="mt-8">
              <Button type="button" className="w-full" onClick={}>
                Continue
              </Button>
            </div>
          </form>
          </Formik>
    </section>
    </>
  )
