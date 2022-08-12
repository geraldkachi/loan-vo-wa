import { useState } from 'react';
import { Input, Button, Avatar } from 'arvara';
import {AIarrowdown1Outlin} from 'arvara-icons';
import Female from '../../assets/homeDashboard/female.svg';

interface ISend {
  onFinishStep: () => void
}

export const SendMoneyForm = ({ onFinishStep }: ISend) => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');

  const handleBankName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankName(e.target.value);
  };

  const handleAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
  };

  const handleAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      bankName,
      accountNumber,
      accountName,
      amount
    };
    console.log(values);
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-between">
          <h1>Select Beneficiary</h1>
          <p className="text-grey-slate">View All</p>
        </div>
        <div className="flex mt-5">
          <div className="h-24 w-24 border border-grey-slate rounded-2xl text-sm p-2">
            {/* <div className="w-6 h-6 bg-orange rounded-full mx-auto">DA</div> */}
            <Avatar className="mx-auto" size="lg" name='DA' />
            <p className="text-center">Daniel Abayomi</p>
          </div>
          <div className="h-24 w-24 border border-grey-slate rounded-2xl text-sm p-2 ml-3">
            {/* <div className="w-6 h-6 bg-orange rounded-full mx-auto">SA</div> */}
            <Avatar className="mx-auto" size="lg" image={Female} />
            <p className="text-center">Simi Ayodele</p>
          </div>
        </div>
        <div className="p-2">
          <form onSubmit={onFinish}>
            <Input
              label="Bank Name"
              placeholder="Select Bank"
              onChange={handleBankName}
              value={bankName}
              className="mt-5"
              TrailingIcon={() => (
                <AIarrowdown1Outlin/>
              )}
            />
            <Input
              label="Account Number"
              placeholder="Enter recipient account number"
              onChange={handleAccountNumber}
              value={accountNumber}
              className="mt-5"
            />
            <Input
              label="Account Name"
              placeholder="Autoloaded"
              onChange={handleAccountName}
              value={accountName}
              className="mt-5"
            />
            <Input
              label="Amount (NGN)"
              placeholder="0.00"
              onChange={handleAmount}
              value={amount}
              className="mt-5"
            />
            <div className="mt-8">
              <Button type="button" className="w-full" onClick={onFinishStep}>
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
