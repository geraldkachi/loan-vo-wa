import { Button, Input } from 'arvara';
import BankLogo from '../../assets/homeDashboard/bankLogo.svg';
import WebModal from '../modal/Modal';

interface Props {
  setShowConfirmingModal?: () => void;
}

export const BankCardForm = (props: Props) => {
  return (
    <>
      <section className="mt-20">
        <form>
          <Input
            value=""
            className="mt-5"
            placeholder="Card Details"
            LeadingIcon={() => <img src={BankLogo} />}
          />
          <Input placeholder="Input Amount" value="" className="mt-5" />
          <Input placeholder="Input Card Pin" value="" className="mt-5" />
          <div className="mt-20">
            <Button type="button" className="w-full">
              Fund Wallet
            </Button>
          </div>
        </form>
        {/* <WebModal
          show={showConfirmingPaymentModal}
          closeModal={setShowConfirmingPaymentModal}
          title="Code Sent"
          subTitle="Check your email for one-time code to reset your password">
            <>
            <h1>hello</h1>
          <div className="mt-8 px-8">
            <Button type="button" className="w-full mt-10">
              Confirm
            </Button>
          </div>
          </>
        </WebModal> */}
      </section>
    </>
  );
};
