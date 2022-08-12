import { useState } from 'react';
import { Button, Input } from 'arvara';
import BankLogo from '../../assets/homeDashboard/bankLogo.svg';

export const BankTransferForm = (props: Props) => {
  const [showConfirmingModal, setShowConfirmingModal] = useState(false);

  const toggle = () => {
    setForgetPassword(false);
    setShowSendCodeModal(true);
  };
  return (
    <>
      <section className="mt-20">
        <form>
          <Input
            value=""
            className="mt-5"
            placeholder="Bank Name"
            LeadingIcon={() => <img src={BankLogo} />}
          />
          <Input placeholder="Account Number" value="" className="mt-5" />
          <Input placeholder="Account Name" value="" className="mt-5" />
          <Input
            placeholder="Amount"
            value=""
            className="mt-5"
          />
          <div className="mt-80">
            <Button type="button" className="w-full" onClick={() => setShowConfirmingModal(true) }>
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
