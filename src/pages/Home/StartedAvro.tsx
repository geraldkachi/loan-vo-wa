import { Button, Checkbox } from 'arvara';
// import PayWithIcon from '../../assets/home/PayWithIcon';
import StartedAvroIcons from '../../assets/home/StartAvroIcon';
import IMG from './startavro.svg'
import GetStartIcon from './getstarted.svg'
const StartedAvro = () => {
    return (
        <section className='overflow-x-hidden px-5 py-10'>
            <div className="my-28 bg-[#141C1F] rounded-[40px] grid md:grid-cols-2 place-items-center gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="ml-3 md:ml-16 text-left md:order-last">
                    <h1 className='md:text-5xl text-3xl text-white font-bold pb-10'>Get Started on Arvo</h1>
                    <div className='mb-5'>
                        <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-block mr-5'>
                                <img src={IMG} className="inline-flex" alt="mii" /></span>
                            Download the Mobile Application</p>
                        <p className="text-white ml-14 opacity-60 text-base">Get & Install the Arvo mobile app from Google Play Store &<br /> App Store</p>
                    </div>
                    <div className='mb-5'>
                        <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-block mr-5'>
                                <img src={IMG} className="inline-flex" alt="mii" /></span>
                            Register with your Details</p>
                        <p className="text-white ml-14 opacity-60 text-base">First & Last Name, Email Address, Phone Number and Password</p>
                    </div>
                    <div className='mb-5'>
                        <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-block mr-5'>
                                <div>

                                </div>
                                <img src={IMG} className="inline-flex" alt="mii" /></span>
                            Bank with Arvo</p>
                        <p className="text-white ml-14 opacity-60 text-base">Make Financial Transaction on the Mobile App (Pay Bills, Send<br /> Money, Get Loans) and so much more</p>
                    </div>
                    <Button type="submit" className='w-3/5 sm:w-auto p-3 mt-10 bg-white' style={{ background: 'white', color: '#065373' }} >Download the App</Button>
                </div>
                <div className="self-center scale-75 order-1">
                    <img src={GetStartIcon} alt="star" />
                </div>
            </div>
        </section>
    )
}

export default StartedAvro
