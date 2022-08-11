import React from 'react'
import { Link } from 'react-router-dom'


import FacebookIcon from '../../../assets//home/Facebook.svg'
import InstagramIcon from '../../../assets/home/Instagram.svg'
import TwitterIcon from '../../../assets/home/Twitter.svg'
import LinkedinIcon from '../../../assets/home/Linkedin.svg'

const Contacts = () => {
    return (
        <section>
            <div className="items-center self-center max-h-screen text-left basis-1/2">
                <div className="mb-10">
                    {/* <h1 className="text-lg md:text-[40px] font-bold ">Contact Us</h1> */}
                    <p className="my-2">Contact our customer support 24/7</p>
                </div>


                <div className="flex items-center mb-10">
                    <div>
                        <p className="ftext-xl font-semibold mb-2">Switch Board</p>
                        <p>(+234) 802 181 0034</p>
                    </div>
                </div>

                <div className='mb-10'>
                    <p className="text-xl font-semibold mb-2">Email</p>
                    <p>hello@arvofinance.com</p>
                </div>
                <div className='mb-10'>
                    <div></div>
                    <h2 className="text-xl font-semibold mb-2">Address</h2>
                    <p className="mb-5 text-base">Plot 2 Block 128B Remi Olowude Stree off Marwa Bus-Stop, Lekki<br /> Phase 1, Lekki Lagos.</p>
                    <p className="mb-5 text-base">Bethel House, 1A, Akin Osiyem Street off Allen Avenuie, Ikeja Lagos</p>
                </div>


                <div className="mt-5">
                    <p className='text-xl font-semibold'>Socials</p>
                    <div className="flex items-center gap-5 my-5">
                        <Link to="#"><img src={FacebookIcon} alt="facebook" /></Link>
                        <Link to="#"><img src={TwitterIcon} alt="twitter" /></Link>
                        <Link to="#"><img src={InstagramIcon} alt="instgram" /></Link>
                        <Link to="#"><img src={LinkedinIcon} alt="linkdin" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
