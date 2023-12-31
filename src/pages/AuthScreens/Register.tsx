import { Button, Checkbox } from 'arvara';
import Logo from '../../images/logo.png';
import { useMutation } from 'react-query';
import Join1 from '../../images/join1.png';
import Join2 from '../../images/join2.png';
import Join3 from '../../images/join3.png';
import { allowLogin } from '../../server';
import { useState, FC, useEffect } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import RegisterForm from '../../components/forms/RegisterForm';
import Card from '../../components/cards/Card';
import { Link } from 'react-router-dom';

import BlackGoogleIcon from "../Home/BlackGoogleIcon.svg"
import BlackAppPlay from "../Home/BlackAppPlay.svg"

const Register: FC = () => {
	const mutation = useMutation(allowLogin);
	return (
		<>
			<section className="gradient-form section-style h-screen max-h-max">
				<Navbar transparent />
				<div className="grid lg:grid-flow-col ">
					<div className="hidelogin bg-white m-auto my-64 items-center max-h-screen">
						<h1 className="text-5xl text-blue w-80 font-bold">
							{' '}
							Get loans in minutes{' '}
						</h1>
						<p className="text-sm">Up to NGN 500,000 in your Arvo wallet</p>
						<div className="flex items-center rounded-lg pt-3 gap-5 md:mt-5">
							{/* <Button type="button" className="bg-black">
								Google Play
							</Button>
							&nbsp;
							<Button type="button" className="bg-black">
								Apple Store
							</Button> */}

							<img src={BlackGoogleIcon} className="cursor-pointer" alt="BlackGoogleIcon" />
							<img src={BlackAppPlay} className="cursor-pointer" alt="BlackAppPlay" />
						</div>
						<div className="flex md:mt-6 justify-center whitespace-nowrap">
							Join <img src={Join1} className="image-style md:-mt-12 -ml-12" />
							<img src={Join2} className="image-style md:-mt-12 -ml-32" />
							<img src={Join3} className="image-style md:-mt-12 -ml-32" />
							<p className="mr-10 -ml-12 text-base">
								and over 2,000,000 customers
							</p>
						</div>
					</div>
					<div className="bg-blue flex items-center px-2 justify-center h-screen overflow-y-scroll">
						<div className="m-auto w-[556px]">
							<Card
								className='mx-5'
								title="Register"
								subTitle="Get started in creating an account"
							>
								<RegisterForm />
								<p className="flex justify-center md:p-2">
									Have an account?{' '}
									<Link to="/login" className="text-blue text-base">
										{' '}
										&nbsp; Login
									</Link>
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Register;
