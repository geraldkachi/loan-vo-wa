import PasswordMe from "../shared/Password";
import { Button, Input } from "arvara";
import React, { useState } from "react";
interface Props {
  setShowSendCodeModal: (n: boolean) => void;
}

const ResetPasswordForm = (props: Props) => {
  const { setShowSendCodeModal } = props;
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <form action="">
      <Input label="Code" type="code" placeholder="Enter code" />
      <Input
        label="Password"
        className="mt-5"
        type={showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        TrailingIcon={() => (
          <PasswordMe
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      />
      <div className="mt-8">
        <Button
          type="button"
          className="w-full md:mt-16"
          onClick={() => setShowSendCodeModal(true)}
        >
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
