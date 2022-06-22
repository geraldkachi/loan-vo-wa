import { useState } from "react";
import { Input, Button } from "arvara";
import PasswordMe from "../shared/Password";

interface Props {
  mutation: any;
}

const LoginForm = (props: Props) => {
  const { mutation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const onFinish = (e) => {
    e.preventDefault();
    const values = {
      email,
      password
    }
    mutation.mutate(values);
  }

  return (
    <>
    {mutation.error && <p>{mutation.error.message}</p>}
    <form onSubmit={onFinish}>
      <Input 
        label="Email Address"
        onChange={handleEmail}
        value={email}
        className="mt-5"
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        className="mt-5"
        type={showPassword ? "text" : "password"}
        onChange={handlePassword}
        value={password}
        placeholder="Enter your password"
        TrailingIcon={() => (
          <PasswordMe
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      />
      <div className="mt-8">
        <Button
          type="submit"
          className="w-full"
          loading={mutation.isLoading}
        >
          Log In
        </Button>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
