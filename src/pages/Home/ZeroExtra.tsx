import { Button } from "arvara"
import PayWithIcon from "../../assets/home/PayWithIcon"

const ZeroExtra = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="text-base text-left self-center  py-5">
                    <h1 className="text-[#065373] text-[40px] leading-10">Bill Payment Guaranteed with<br /> Zero Extra Fee</h1>
                    <p className="my-5">
                        Every transaction is as it is. No hidden charges or extra cost for every transaction performed. We place extra value to ensure every customer is not burdened beyond reach for cost of service.
                    </p>

                    <div className="flex rounded-lg gap-5 text-white mt-9">
                        <Button className="bg-black px-3 py-3">Google Play</Button>
                        <Button className="bg-black px-3 py-3">App Store</Button>
                    </div>
                </div>
                <div className="self-center justify-items-center">
                    <div className="object-fill">
                        <PayWithIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZeroExtra
