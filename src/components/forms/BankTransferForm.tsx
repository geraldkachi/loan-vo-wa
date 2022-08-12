import { useState } from 'react';
import { Button, DropDown, Input } from 'arvara';
import BankLogo from '../../assets/homeDashboard/bankLogo.svg';

interface Props {
  openPaymentModal: () => void;
}

export const BankTransferForm = ({ openPaymentModal }: Props) => {
  // const [showConfirmingModal, setShowConfirmingModal] = useState(false);
  return (
    <>
      <section className="mt-20">
        <form>
          <DropDown
            placeholder="Bank Name"
            className="mt-5"
						data={[
							{ label: 'Access Bank', value: 'Access Bank' },
							{ label: 'Citibank Nigeria Limited', value: 'Citibank Nigeria Limited' },
							{ label: 'Ecobank Nigeria Plc', value: 'Ecobank Nigeria Plc' },
							{ label: 'Fidelity Bank Plc', value: 'Fidelity Bank Plc' },
							{ label: 'First Bank of Nigeria LTD', value: 'First Bank of Nigeria LTD' },
						]}
						getValue={v => v.value.toString()}
					/>
          <Input placeholder="Account Number" value="" className="mt-5" />
          <Input placeholder="Account Name" value="" className="mt-5" />
          <Input
            placeholder="Amount"
            value=""
            className="mt-5"
          />
          <Input
            placeholder="Note"
            value=""
            className="mt-5"
          />
          <div className="mt-80">
            <Button type="button" className="w-full" onClick={openPaymentModal}>
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
