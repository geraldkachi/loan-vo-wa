import { Button } from "arvara";
import useAuth from '../hooks/useAuth';
import { useMutation } from 'react-query';
import { validateOTP } from '../../server';
import { useState, useEffect } from "react";
import ReactPinField from "react-pin-field";
import { useNavigate } from 'react-router-dom';

interface Props {
  setShowOtpModal: () => void;
}

const OtpForm = (props: Props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const mutation = useMutation(validateOTP);

  const handleOtp = (value: string) => {
    setOtp(value);
  };

  const onFinish = (e) => {
    e.preventDefault();
    const values = {
      otp,
      email: localStorage.getItem('email'),
    }
    mutation.mutate(values);
  }

  useEffect(() => {
    if (mutation.data) {
      localStorage.setItem('@authorization', mutation.data.meta.token);
      useAuth.setState({
        isAuthenticated: true,
        email: mutation.data.data.email,
        token: mutation.data.meta.token,
      });
      props.setShowOtpModal();
      navigate("/dashboard", { replace: true });
    }
  }, [mutation.data])

  return (
    <>
      {mutation.error instanceof Error && <p>{mutation.error.message}</p>}
      <form onSubmit={onFinish}>
        <div className="container mx-auto mt-8 flex justify-center">
          <ReactPinField
            length={6}
            onChange={handleOtp}
            className="h-14 w-16 rounded-xl border border-grey-slate text-center my-1 mx-2 flex items-center text-sm font-semibold"
          />
        </div>

        <div className="flex items-center justify-center mt-6">
          <Button
            type="submit"
            className="w-full mt-8"
            loading={mutation.isLoading}
          >
            Proceed
          </Button>
        </div>
        <div className="flex justify-center text-center mt-8">
          {" "}
          <a className="flex items-center cursor-pointer">
            Didn’t receive OTP? &nbsp;
            <p className="font-bold text-blue-4 hover:text-blue-900">
              Resend OTP
            </p>
            <i className="bx bx-caret-right ml-1"></i>
          </a>{" "}
        </div>
      </form>
    </>
  );
};

export default OtpForm;
