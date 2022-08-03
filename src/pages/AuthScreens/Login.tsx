import { Button } from 'arvara';
import { useMutation } from 'react-query';
import { allowLogin } from '../../server';
import Join2 from '../../images/join2.png';
import Join3 from '../../images/join3.png';
import Join1 from '../../images/join1.png';
import { useState, FC, useEffect } from 'react';
import PlayStore from '../../images/playstore.svg';
// import useAuth from '../../components/hooks/useAuth';
import { Navbar } from '../../components/navbar/Navbar';
import LoginForm from '../../components/forms/LoginForm';
import Card from '../../components/cards/Card';
import { Link } from 'react-router-dom';

const Login: FC = () => {
	const mutation = useMutation(allowLogin);

	// document.body.style.overflow = 'hidden';
	return (
		<div className="bg">
			<section className="gradient-form">
				<Navbar transparent />
				<div className="grid lg:grid-flow-col flex-1 overflow-y-scroll h-screen">
					<div className="hidelogin px-5 bg-white m-auto items-center">
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
					<div className="bg-blue flex items-center px-2 h-screen">
					{/* <div className="m-auto md:w-[456px] w-[400px] sm-[300px]"> */}
						<div className="m-auto :min-w-[456px] ">
							<Card
								title="Login"
								subTitle="Get started in creating an account"
							>
								<LoginForm mutation={mutation} />
								<a
									href="#"
									className="flex justify-center text-grey-slate text-base md:p-8 p-4"
								// onClick={() => setForgetPassword(true)}
								>
									Forgot Password?
								</a>
								<p className="flex justify-center md:p-2">
									Don’t have an account?{' '}
									<Link to="/register" className="text-blue text-base">
										{' '}
										&nbsp; Register
									</Link>
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


// screens: {
// 	'sm': '640px',
// 	// => @media (min-width: 640px) { ... }

// 	'md': '768px',
// 	// => @media (min-width: 768px) { ... }

// 	'lg': '1024px',
// 	// => @media (min-width: 1024px) { ... }

// 	'xl': '1280px',
// 	// => @media (min-width: 1280px) { ... }

// 	'2xl': '1536px',
// 	// => @media (min-width: 1536px) { ... }
//   }
