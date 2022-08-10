import BankIcon from "../../assets/home/BankIcon"
import { Button, Checkbox } from 'arvara';
import BankIconSvg from "./bankicon.svg"
import FloatCard from "./FloatCard";

import BlackGoogleIcon from "./BlackGoogleIcon.svg"
import BlackAppPlay from "./BlackAppPlay.svg"


const Bank = ({ product }: any) => {

    return (
        <div ref={product} className="overflow-x-hidden px-5 py-10">

            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="self-center justify-items-center">
                        <img src={BankIconSvg} alt="" />

                    {/* <div className="floats-cards object-fill left-56">
                        <FloatCard
                            emoji={BankIconSvg}
                            name="Daniel Abayomi"
                            bank="3120992022 (Arvo)"
                        />
                    </div>

                    <div className="floats-cards object-fill left-56 -top-[16rem]">
                        <FloatCard
                            emoji={BankIconSvg}
                            name="Daniel Abayomi"
                            bank="3120992022 (Arvo)"
                        />
                    </div>
                    <div className="floats-cards object-fill  right-26 -top-[10rem]">
                        <FloatCard
                            emoji={BankIconSvg}
                            name="Daniel Abayomi"
                            bank="3120992022 (Arvo)"
                        />
                    </div> */}
                </div>

                <div className="text-base text-left self-center justify-items-center py-5">
                    <h1 className="text-[#065373] font-bold text-4xl md:text-[56px] md:pb-5">Bank in Style</h1>
                    <p className="my-5">
                        Affords you the luxury of access to financial services and payments outside the brick-and-mortar approach of a traditional banking system.<br /> With just your smart phone, you bank-on-the-go and your funds are just within your fingertips.
                    </p>

                    <div className="flex items-center rounded-lg gap-5 text-white mt-9">
                        {/* <button className="bg-black px-3 py-3">Google Play</button> */}
                        <img src={BlackGoogleIcon} alt="BlackGoogleIcon" />
                        <img src={BlackAppPlay} alt="BlackAppPlay" />
                        {/* <button className="bg-black px-3 py-3">App Store</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank
