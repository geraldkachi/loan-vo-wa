import { Button, Input } from 'arvara';
import { useState } from 'react';

interface Props {
  openPaymentModal: () => void;
}

export const NewCardForm = ({ openPaymentModal }: Props) => {
  // const [showConfirmingModal, setShowConfirmingModal] = useState(false);
  return (
    <>
      <section className="mt-20">
        <form>
          <Input
            placeholder="Card Number"
            value=""
            className="mt-5"
          />
          <div className="flex justify-between">
          <Input label="Expiry Date" placeholder="00/00" value="" className="mt-5" />
          <Input label="CVV" placeholder="000" value="" className="mt-5" />
          </div>
          <Input label="OTP" placeholder="" value="" className="mt-5" />
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
