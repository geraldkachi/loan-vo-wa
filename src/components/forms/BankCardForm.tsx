import { Button, Input } from 'arvara';
import { useState } from 'react';
import BankLogo from '../../assets/homeDashboard/bankLogo.svg';
import WebModal from '../modal/Modal';

interface Props {
  openPaymentModal: () => void;
}

export const BankCardForm = ({ openPaymentModal }: Props) => {
  // const [showConfirmingModal, setShowConfirmingModal] = useState(false);
  return (
    <>
      <section className="mt-20">
        <form>
          <Input
            value=""
            className="mt-5"
            placeholder="Pick a card"
            LeadingIcon={() => <img src={BankLogo} />}
          />
          <Input placeholder="Input Amount" value="" className="mt-5" />
          <Input placeholder="Input Card Pin" value="" className="mt-5" />
          <div className="mt-80">
            <Button type="button" className="w-full" onClick={openPaymentModal }>
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
