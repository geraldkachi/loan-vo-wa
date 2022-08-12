import { Button, Input } from 'arvara';
import BankLogo from '../../assets/homeDashboard/bankLogo.svg';
import WebModal from '../modal/Modal';

interface Props {
  toggle: any;
}

export const BankCardForm = (props: Props) => {
  const { toggle } = props;
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
          <div className="mt-20">
            <Button type="button" className="w-full" onClick={ () => toggle(true)}>
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
