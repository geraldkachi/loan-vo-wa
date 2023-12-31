import { Button } from "arvara/lib"
import { Link } from "react-router-dom"
import ArvoIcon from "../../images/svg/ArvoIcon"
import FacebookIcon from '../../assets/home/Facebook.svg'
import InstagramIcon from '../../assets/home/Instagram.svg'
import TwitterIcon from '../../assets/home/Twitter.svg'
import LinkedinIcon from '../../assets/home/Linkedin.svg'
import Googleplay from "./googleplay.svg"
import AppStore from "./AppStore.svg"

const Footer = () => {
    return (
        <section className="bg-[#043144] text-white px-5 pt-10">
            <footer className="py-8 max-w-[1300px] mx-auto text-center">
                <div className="flex items-center justify-center">
                    <ArvoIcon />
                </div>
                <div className="flex items-center justify-center my-8 text-[#9BADV4]">
                    <p>Arvo as a licensed fintech payment institution headquartered in Lagos is positioned to re-define and reposition digital banking infrastructure,<br /> payments & services for millennials and x-generation.</p>
                </div>

                <div className="flex items-center justify-center my-5 gap-5 mb-6">
                    <div className="flex gap-5 text-white mt-9">
                        <Link to="" className="cursor-pointer px-3 py-3">
                            <img src={Googleplay} alt="Googleplay" />
                        </Link>
                        <Link to="" className="cursor-pointer px-3 py-3">
                            <img src={AppStore} alt="AppStore" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center flex-wrap justify-center gap-10 lg:justify-between text-white mx-auto max-w-[800px]">
                    <Link to="#">Why Arvo?</Link>
                    <Link to="#">Blog</Link>
                    <Link to="#">Contact Us</Link>
                    <Link to="#">Terms ofUse</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>

                <hr className="opacity-10 my-10" />
                {/* tail */}
                <div className="flex flex-wrap items-center justify-center lg:justify-between">
                    <p>© 2022 Arvofinance. All rights reserved</p>
                    <div className="flex items-center gap-5 my-5">
                        <img src={FacebookIcon} alt="facebook" />
                        <img src={TwitterIcon} alt="twitter" />
                        <img src={InstagramIcon} alt="instgram" />
                        <img src={LinkedinIcon} alt="linkdin" />
                    </div>
                </div>
                <div className="opacity-60 text-center my-5">
                    <span>Powered by Olivermead Investment Ltd.</span>
                </div>
            </footer>
        </section>
    )
}

export default Footer
