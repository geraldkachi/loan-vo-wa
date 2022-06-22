import { Input, Button } from "arvara";

interface Props {
  toggle: any;
}

const ForgetPasswordForm = (props: Props) => {
  const { toggle } = props;
  return (
    <>
      <form action="" className="shadown-md rounded mt-5 mb-4">
        <Input
          label="Email Address"
          placeholder="Inyamahgabrielimoh@gmail.com"
        />
        <div className="flex items-center justify-center mt-8">
          <Button
            type="button"
            className="w-full"
            onClick={() => toggle(false)}
          >
            Send Code
          </Button>
        </div>
      </form>
    </>
  );
};

export default ForgetPasswordForm;
