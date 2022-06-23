import { Button } from 'arvara';
import { useMutation } from 'react-query';
import { allowLogin } from '../../server';
import Card from '../../components/cards/Card';
import { useState, FC, useEffect } from 'react';
import OtpForm from '../../components/forms/OtpForm';
import LoginForm from '../../components/forms/LoginForm';
import AuthModal from '../../components/modals/AuthModal';
import ForgetPasswordForm from '../../components/forms/ForgetPasswordForm';
import useAuth from '../../components/hooks/useAuth';
import PlayStore from '../../images/playstore.svg';
import AppleStore from '../../images/apple.png';
import Join1 from '../../images/join1.png';
import Join2 from '../../images/join2.png';
import Join3 from '../../images/join3.png';
import Logo from '../../images/logo.png';
import {Navbar} from '../../components/navbar/Navbar';

const Login: FC = () => {
	const mutation = useMutation(allowLogin);
	const isAuthenticated = useAuth(state => state.isAuthenticated);
	const [showOtpModal, setShowOtpModal] = useState(false);
	const [showSendCodeModal, setShowSendCodeModal] = useState(false);
	const [forgetPassword, setForgetPassword] = useState<boolean>(false);

	const toggleSendCode = () => {
		setForgetPassword(false);
		setShowSendCodeModal(true);
	};

	const toggleOtpModal = () => {
		setShowOtpModal(!showOtpModal);
	};

	useEffect(() => {
		console.log('STATE', isAuthenticated);
		if (isAuthenticated) {
			window.location.href = '/dashboard';
		}
	}, []);

	useEffect(() => {
		if (mutation.data) {
			localStorage.setItem('email', mutation.data.email);
			toggleOtpModal();
		}
	}, [mutation.data]);

	document.body.style.overflow = 'hidden';
	return (
		<div className="bg">
			{showOtpModal && (
				<AuthModal
					show={showOtpModal}
					closeModal={setShowOtpModal}
					title="OTP Verification"
					subTitle={`Enter the otp you received on 08099****12`}
				>
					<OtpForm setShowOtpModal={toggleOtpModal} />
				</AuthModal>
			)}

			{/*forgot password modal*/}
			{forgetPassword && (
				<AuthModal
					show={forgetPassword}
					closeModal={setForgetPassword}
					title="Forget Password"
					subTitle="Enter your registered email address"
					type="sad"
				>
					<ForgetPasswordForm toggle={toggleSendCode} />
				</AuthModal>
			)}

			{/*open mail modal*/}
			{showSendCodeModal && (
				<AuthModal
					show={showSendCodeModal}
					closeModal={setShowSendCodeModal}
					title="Code Sent"
					subTitle="Check your email for one-time code to reset your password"
					type="sad"
				>
					<div className="mt-8">
						<Button type="button" className="w-full mt-10">
							Open Mail
						</Button>
					</div>
				</AuthModal>
			)}
			{/*Login section*/}
			<Navbar transparent />
				<section className="h-full gradient-form md:h-screen">
					<div className="grid grid-flow-col">
						<div className="bg-white mx-auto my-auto items-center">
							<h1 className="text-5xl text-blue w-80 font-bold">
								{' '}
								Get loans in minutes{' '}
							</h1>
							<p className="text-sm">Up to NGN 500,000 in your Arvo wallet</p>
							<div className="grid grid-flow-col md:mt-5">
								<Button type="button" className="bg-black" icon={PlayStore}>
									Google Play
								</Button>
								&nbsp;
								<Button type="button" className="bg-black">
									Apple Store
								</Button>
								{/* <div className="w-36 h-12 bg-black text-white text-base flex justify-center items-center rounded-2xl">
								<img src={PlayStore} /> &nbsp; Google Play
							</div>
							<div className="w-36 h-12 bg-black text-white text-base flex justify-center items-center rounded-2xl">
              <img src={AppleStore}/> &nbsp; App Store
							</div> */}
							</div>
							<div className="flex md:mt-6 justify-center whitespace-nowrap">
								Join <img src={Join1} className="image-style md:-mt-6 -ml-6" />
								<img src={Join2} className="image-style md:-mt-6 -ml-20" />
								<img src={Join3} className="image-style md:-mt-6 -ml-20" />
								<p className="mr-10 -ml-6 text-base">
									and over 2,000,000 customers
								</p>
							</div>
						</div>
						<div className="bg-blue h-screen">
							<div className="card-width">
								<Card
									title="Login"
									subTitle="Get started in creating an account"
								>
									<LoginForm mutation={mutation} />
									<a
										href="#"
										className="flex justify-center text-grey-slate text-base md:p-8"
										onClick={() => setForgetPassword(true)}
									>
										Forgot Password?
									</a>
									<p className="flex justify-center md:p-2">
										Don’t have an account?{' '}
										<a href="#" className="text-blue text-base">
											{' '}
											&nbsp; Register
										</a>
									</p>
								</Card>
							</div>
						</div>
					</div>
				</section>
		</div>
	);
};

export default Login;
