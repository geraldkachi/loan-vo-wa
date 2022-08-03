import { Button } from 'arvara'
import React from 'react'
// import PhoneIcon from '../../images/login/PhoneIcon'
import  LandingPhone from './../../images/login/LandingPhone.svg'


const Hero = () => {
    return (
        <section className="grid lg:grid-flow-col mx-auto max-w-[1600px] ">
              <div className='self-center  mx-auto w-1/2'>
                <h1 className='text-5xl my-3'>Get Loan in {'\n'}
                <span className='block'>Minutes</span></h1>
                <p className='text-xl my-5'>Arvo offers easy and convenient financial services on the go for everyone</p>
                <Button>Create Account</Button>
                {/* Google app */}
                <div className="flex md:mt-5">
                    <Button type="button" size='md' className="">Google Play</Button>
                    &nbsp;
                    <Button type="button" size='md' className="">Apple Store</Button>
                </div>
                <p className="py-3 text-base">Trusted by 2,000,000+ Customers</p>
            </div>

            <div className='relative my-10'>
                <div className="absolute rounded-full w-10 bg-red-1 p-10 -z-10 left-[55%]"></div>
                {/* <PhoneIcon /> */}
                {/* <img src={LandingPhone} alt="huuhu" /> */}
            </div>
        </section>
    )
}

export default Hero
