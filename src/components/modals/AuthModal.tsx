import { Button, Modal } from "arvara";
import Frowning from "../../images/frowning.svg";

interface Props {
  type?: string;
  show: boolean;
  title?: string;
  children?: any;
  subTitle?: string;
  closeModal: (n: boolean) => void;
}

const AuthModal = (props: Props) => {
  const { show, type, title, children, subTitle, closeModal } = props;
  return (
    <>
      <Modal control={show} close={closeModal}>
        {type && (
          <div className="flex items-center justify-center m-auto mt-5 border-2 border-grey w-20 h-20 rounded-full">
            <img
              src={(type === "sad" && Frowning) || Frowning}
              alt="Frowning"
            />
          </div>
        )}

        <div className="flex items-center justify-center">
          <h5 className="text-4xl text-700 mt-8 items-center justify-center">
            {title}
          </h5>
        </div>
        <p className="text-center container mt-5 text-grey-slate text-base">
          {subTitle}
        </p>
        {children}
        <div className="flex justify-center item-center ">
          <Button
            variant="link"
            type="button"
            onClick={() => closeModal(false)}
            className="text-grey-slate mt-6"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
