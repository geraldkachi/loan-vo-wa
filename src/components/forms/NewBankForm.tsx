import { Button, Input } from 'arvara';

interface Props {
  setShowConfirmingModal?: () => void;
}

export const NewCardForm = (props: Props) => {
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
          <div className="mt-20">
            <Button type="button" className="w-full">
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
