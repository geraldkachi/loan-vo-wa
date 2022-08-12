import { Button, Drawer, Modal } from 'arvara';
import { useState } from 'react';
import { AIcardbol, AIclosesquarebol, AIwallet3Bol } from 'arvara-icons';
import WebModal from '../../../../components/modal/Modal';
import Flutter from '/src/assets/homeDashboard/flutter.svg';
import { NewCardForm } from '../../../../components/forms/NewBankForm';
import { BankCardForm } from '../../../../components/forms/BankCardForm';
import { BankTransferForm } from '../../../../components/forms/BankTransferForm';

interface Props {
  onToggle: any;
}
export const FundWallet = (props: Props) => {
  const { onToggle } = props;
  const [step, setStep] = useState(0);
  const [isNewCard, setIsNewCard] = useState(false);
  const [isUseBankCard, setIsUseBankCard] = useState(false);
  const [isBankTransfer, setIsBankTransfer] = useState(false);
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div
          className="w-full h-16 rounded-lg cursor-pointer fund-button"
          onClick={() => setIsBankTransfer(true)}>
          <div className="flex my-5 mx-5">
            <AIwallet3Bol className="icon solid text-blue-2" />
            <h1 className="text-base ml-2">Use bank transfer</h1>
          </div>
        </div>
        <div
          className="w-full h-16 rounded-lg mt-5 cursor-pointer fund-button"
          onClick={() => setIsUseBankCard(true)}>
          <div className="flex my-5 mx-5">
            <img src={Flutter} />
            <h1 className="text-base ml-2">Use Bank card ****5678</h1>
          </div>
        </div>
        <div
          className="w-full h-16 rounded-lg mt-5 cursor-pointer fund-button"
          onClick={() => setIsNewCard(true)}>
          <div className="flex my-5 mx-5">
            <AIcardbol className="icon solid text-yellow" />
            <h1 className="text-base ml-2">Pay with new card</h1>
          </div>
        </div>
      </div>
{/* Drawer section */}
      <Drawer
        position="right"
        header={'Use Bank Transfer'}
        open={isBankTransfer}
        close={setIsBankTransfer}>
        <BankTransferForm />
      </Drawer>
      <Drawer
        position="right"
        header={'Use Bank Card'}
        open={isUseBankCard}
        close={setIsUseBankCard}>
        <BankCardForm toggle={onToggle}  />
      </Drawer>
      <Drawer position="right" header={'Use New Card'} open={isNewCard} close={setIsNewCard}>
        <NewCardForm />
      </Drawer>

    </>
  );
};
