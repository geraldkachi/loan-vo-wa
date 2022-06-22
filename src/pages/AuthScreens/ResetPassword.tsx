import { useState, FC } from "react";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import AuthModal from "../../components/modals/AuthModal";
import OtpForm from "../../components/forms/OtpForm";
import Card from "../../components/cards/Card";

export const ResetPassword: FC = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  return (
    <>
      {showOtpModal && (
        <AuthModal
          show={showOtpModal}
          closeModal={setShowOtpModal}
          title="OTP Verification"
          subTitle={`Enter the otp you received on 08099....12`}
        >
          <OtpForm />
        </AuthModal>
      )}
      <Card
        title="Reset Password"
        subTitle="Create your new password"
        type="lock"
      >
        <ResetPasswordForm setShowSendCodeModal={setShowOtpModal} />
      </Card>
    </>
  );
};
