import { Button, Checkbox } from 'arvara';
import PayWithIcon from '../../assets/home/PayWithIcon';
import StartedAvroIcons from '../../assets/home/StartAvroIcon';
import IMG from '../../assets/home/startavro.svg'
const StartedAvro = () => {
    return (
        <section className='overflow-x-hidden px-5 py-10'>
            <div className="my-28 bg-[#141C1F] rounded-[40px] grid md:grid-cols-2 place-items-center gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="ml-16 text-left">
                    <div className='mb-5'>
                        <p className="text-4xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-flex mr-5'><img src={IMG} className="" alt="mii" /></span>
                            Download the Mobile Application</p>
                        <p className="text-white ml-14 opacity-60 text-base">Get & Install the Arvo mobile app from Google Play Store &<br /> App Store</p>
                    </div>
                    <div className='mb-5'>
                        <p className="text-4xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-flex mr-5'><img src={IMG} className="" alt="mii" /></span>
                            Register with your Details</p>
                        <p className="text-white ml-14 opacity-60 text-base">First & Last Name, Email Address, Phone Number and Password</p>
                    </div>
                    <div className='mb-5'>
                        <p className="text-4xl font-semibold text-white md:text-xl mb-1 ">
                            <span className='inline-flex mr-5'><img src={IMG} className="" alt="mii" /></span>
                            Bank with Arvo</p>
                        <p className="text-white ml-14 opacity-60 text-base">Make Financial Transaction on the Mobile App (Pay Bills, Send<br /> Money, Get Loans) and so much more</p>
                    </div>
                    <Button type="submit" className='p-3 mt-10 bg-white' style={{ background: 'white', color: '#065373' }} >Download the App</Button>
                </div>
                <div className="self-center scale-75">
                    <StartedAvroIcons />
                </div>
            </div>
        </section>
    )
}

export default StartedAvro
