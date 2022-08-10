// import { Button } from 'arvara'
import React from 'react'
import YellowHero from '../../assets/home/YelloHero'
import LandingPhone from '../../images/login/nmn.svg'
import GooglePlayHome from "./GooglePlayHome.svg"
import AppleStoreHome from "./AppleStoreHome.svg"
import { useNavigate } from 'react-router-dom'
const Button = ({ }: any) => null

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className="px-5 grid lg:grid-flow-col place-items-center my-10 h-[60%] mx-auto max-w-[1200px] overflow-hidden">
            {/* <div className='md:justify-self-start  text-start'> */}
            <div className='justify-selt-center md:justify-self-start  text-start'>
                <h1 className='text-5xl my-3'>Get Loan in {'\n'}
                    <span className='block'>Minutes</span></h1>
                <p className='text-xl my-5'>Arvo offers easy and convenient financial services<br /> on the go for everyone</p>
                <button onClick={() => navigate('register')} className="bg-black p-5 px-12 rounded-xl text-white mb-5">Create Account</button>
                {/* Google app */}
                <div className="flex items-center md:mt-5">
                    <img className='cursor-pointer' src={GooglePlayHome} alt="GooglePlayHome" />
                    {/* <Button type="button" size='md' className=""></Button> */}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {/* <Button type="button" size='md' className=""></Button> */}
                    <img className='cursor-pointer' src={AppleStoreHome} alt="AppleStoreHome" />
                </div>
                <p className="py-3 text-base">Trusted by 2,000,000+ Customers</p>
            </div>

            <div className='relative my-10 py-3'>
                <div className="absolute  p-10 -z-10 left-[10%] md:left-[75%] -top-16 overflow-hidden">
                    <YellowHero className='' />
                </div>
                {/* <LandingPhone /> */}
                <img src={LandingPhone} />
            </div>
        </section>
    )
}

export default Hero
