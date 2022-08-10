import React, { useState } from 'react';
import { Input, Button } from 'arvara';
import {AIarrowdown1Outlin} from 'arvara-icons';

export const PinForm = () => {
  const [pin, setPin] = useState('');

  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      pin
    };
    console.log(values);
  };

  return (
    <>
      <section>
        <p className="text-grey-slate">Confirm your transaction</p>
        <div className="p-2">
          <form onSubmit={onFinish}>
            <Input
              label="PIN"
              placeholder="Enter your pin"
              onChange={handlePin}
              value={pin}
              className="mt-5"
            />
            <div className="mt-8">
              <Button type="button" className="w-full">
              Proceed
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
