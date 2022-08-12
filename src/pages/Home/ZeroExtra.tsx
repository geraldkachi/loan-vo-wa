import { Button } from "arvara"
// import PayWithIcon from "../../assets/home/PayWithIcon"
import PayWithIconz from "./zeroextra.svg"
import BlackGoogleIcon from "./BlackGoogleIcon.svg"
import BlackAppPlay from "./BlackAppPlay.svg"

const ZeroExtra = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="text-base text-left self-center  py-5">
                    <h1 className="text-[#065373] text-3xl md:text-[40px] leading-10">Bill Payment Guaranteed with<br /> Zero Extra Fee</h1>
                    <p className="my-5">
                        Every transaction is as it is. No hidden charges or extra cost for every transaction performed. We place extra value to ensure every customer is not burdened beyond reach for cost of service.
                    </p>

                    <div className="flex rounded-lg gap-5 text-white mt-9">
                        {/* <Button variant="secondary" style={{background: "#000"}} className="bg-black text-white px-5 py-3">Google Play</Button>
                        <Button variant="outline" className="bg-black text-white px-5 py-3">App Store</Button> */}
                        <img src={BlackGoogleIcon} alt="BlackGoogleIcon" />
                        <img src={BlackAppPlay} alt="BlackAppPlay" />
                    </div>
                </div>
                <div className="self-center justify-items-center">
                    <div className="object-fill">
                        {/* <PayWithIcon /> */}
                        <img src={PayWithIconz} alt="wewr" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZeroExtra
