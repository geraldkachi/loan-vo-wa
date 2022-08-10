import { useState } from "react";
import { Input, Button, Checkbox, Card } from "arvara";
import PasswordMe from "../shared/Password";


import FacebookIcon from '../../assets/home/Facebook.svg'
import InstagramIcon from '../../assets/home/Instagram.svg'
import TwitterIcon from '../../assets/home/Twitter.svg'
import LinkedinIcon from '../../assets/home/Linkedin.svg'
import { Link } from "react-router-dom";

// const Input = ({}: any) => null
// const Button = ({}: any) => null
// const Checkbox = ({}: any) => null

const FormDetails = ({ contact }: any) => {

    // const { mutation } = props;
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = {
            phoneNumber,
            firstName,
            lastName,
            password,
            email,
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        ((event.target as HTMLInputElement).value)
    }

    return (
        <div ref={contact} className="bg-[#F6F8F9] text-[#141C1F] px-5 py-10">
            {/* <div className="grid lg:grid-flow-col mx-auto  max-w-[1300px]"> */}
            <div className="grid lg:grid-flow-col mx-auto gap-10 max-w-[1300px]">
                <div className="items-center self-center max-h-screen text-left basis-1/2">
                    <div className="mb-20">
                        <h1 className="text-lg md:text-[40px] font-bold ">Reach Out to Us</h1>
                        <p className="my-2">Contact our customer support 24/7</p>
                    </div>
                    <div>
                        <div></div>
                        <h2 className="text-xl font-semibold">Address</h2>
                        <p className="mb-5 text-base">Plot 2 Block 128B Remi Olowude Stree off Marwa Bus-Stop, Lekki<br /> Phase 1, Lekki Lagos.</p>
                        <p className="mb-5 text-base">Bethel House, 1A, Akin Osiyem Street off Allen Avenuie, Ikeja Lagos</p>
                    </div>

                    <div className="flex items-center gap-20">
                        <div>
                            <div></div>
                            <p className="font-semibold mb-5">Switch Board</p>
                            <p>(+234) 802 181 0034</p>
                        </div>

                        <div>
                            <div></div>
                            <p className="font-semibold mb-5">Email</p>
                            <p>hello@arvofinance.com</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p>Socials</p>
                        <div className="flex items-center gap-5 my-5">
                            <Link to="#"><img src={FacebookIcon} alt="facebook" /></Link>
                            <Link to="#"><img src={TwitterIcon} alt="twitter" /></Link>
                            <Link to="#"><img src={InstagramIcon} alt="instgram" /></Link>
                            <Link to="#"><img src={LinkedinIcon} alt="linkdin" /></Link>
                        </div>
                    </div>
                </div>

                <div className="flex  h-full my-16 w-full ">
                    <Card className="p-5 max-w-2xl mx-auto rounded-3xl shadow-lg w-full">
                        <form onSubmit={onFinish}>
                            <Input
                                label="Full Name"
                                placeholder="First name, Last name"
                                onChange={handleEmail}
                                value={firstName}
                                className="mt-5 border-[#C2D0D6]"
                            />

                            <Input
                                label="Email Address"
                                placeholder="Enter your email address"
                                onChange={handleEmail}
                                value={email}
                                className="mt-5 border-[#C2D0D6]"
                            />
                            <Input
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                onChange={handleEmail}
                                value={phoneNumber}
                                className="mt-5 border-[#C2D0D6]"
                            />
                            {/* <div>
                                <label>Your Message </label>
                                <input type="textarea"
                                    name="textValue"
                                    onChange={handleChange}
                                />
                            </div> */}

                            <div>
                                <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" style={{height: "30%"}} placeholder="Type your message here..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:border-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            </div>

                            <div className="mt-8">
                                <Button variant="link" className="w-full bg-[#065373] text-white hover:bg-white hover:text-[#065373]">Send Message</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FormDetails
