import { Button, Checkbox } from 'arvara';
import Logo from '../../images/logo.png';
import { useMutation } from 'react-query';
import Join1 from '../../images/join1.png';
import Join2 from '../../images/join2.png';
import Join3 from '../../images/join3.png';
import { allowLogin } from '../../server';
import Card from '../../components/cards/Card';
import { useState, FC, useEffect } from 'react';
import useAuth from '../../components/hooks/useAuth';
import RegisterForm from '../../components/forms/RegisterForm';

const Register: FC = () => {
	const mutation = useMutation(allowLogin);
	const isAuthenticated = useAuth(state => state.isAuthenticated);
	return (
		<>
    <img src={Logo} className='ml-10 mt-3'/>
			<section className="gradient-form section-style">
				<div className="grid grid-flow-col">
					<div className="bg-white mx-auto my-64 items-center ">
						<h1 className="text-5xl text-blue w-80 font-bold">
							{' '}
							Get loans in minutes{' '}
						</h1>
						<p className="text-sm">Up to NGN 500,000 in your Arvo wallet</p>
						<div className="grid grid-flow-col md:mt-5">
							<Button type="button" className="bg-black">
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
					<div className="bg-blue section-style">
						<div className="md:p-12 md:mx-6 card-width">
							<Card
								title="Register"
								subTitle="Get started in creating an account"
							>
								<RegisterForm />
								<p className="flex justify-center md:p-2">
									Have an account?{' '}
									<a href="#" className="text-blue text-base">
										{' '}
										&nbsp; Login
									</a>
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
