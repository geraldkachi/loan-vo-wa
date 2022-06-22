import { useState } from "react";
import { Input, Button, Checkbox } from "arvara";
import PasswordMe from "../shared/Password";

interface Props {
  // mutation: any;
}

const RegisterForm = (props: Props) => {
  // const { mutation } = props;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      phoneNumber,
      firstName,
      lastName,
      password,
      email,
    }
    // mutation.mutate(values);
  }

  return (
    <>
    {/* {mutation.error && <p>{mutation.error.message}</p>} */}
    <form onSubmit={onFinish}>
      <Input 
        label="First Name"
        placeholder="Enter your first name"
        onChange={handleEmail}
        value={firstName}
        className="mt-5"
      />
      <Input 
        label="Last Name"
        placeholder="Enter your last name"
        onChange={handleEmail}
        value={lastName}
        className="mt-5"
      />
      <Input 
        label="Email Address"
        placeholder="Enter your email address"
        onChange={handleEmail}
        value={email}
        className="mt-5"
      />
      <Input 
        label="Phone Number"
        placeholder="Enter your phone number"
        onChange={handleEmail}
        value={phoneNumber}
        className="mt-5"
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        className="mt-5"
        type={showPassword ? "text" : "password"}
        onChange={handlePassword}
        value={password}
        TrailingIcon={() => (
          <PasswordMe
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      />
      <div className="mt-8">
      <p className="text-sm flex md:mt-10">
								<Checkbox label="I agree to Arvo’s" />
								&nbsp; <a href='#' className="text-blue-4">Terms of Use</a>&nbsp;{' '}
								<p>and</p> &nbsp;<a href='#' className="text-blue-4">Privacy Policy</a>
							</p>
      <Button variant="link" className="w-full">Create Account</Button>
        {/* <Button
          type="submit"
          className="w-full"
          // loading={mutation.isLoading}
        >
          Create Account
        </Button> */}
      </div>
    </form>
    </>
  );
};

export default RegisterForm;
