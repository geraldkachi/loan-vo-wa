import PayWithIcon from "../../assets/home/PayWithIcon"
import { Button, Checkbox } from 'arvara';


const MakeCardless = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="text-base text-left self-center justify-items-center py-5 text-[#141C1F]">
                    <div className="">
                        <h1 className="font-bold text-[#065373] text-[40px]">Pay with Arvo Link</h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat non tincidunt sed nibh amet. Rhoncus mi massa, ac erat sed donec. Sit dictum volutpat tellus pellentesque gravida sit donec egestas
                        </p>

                        <div className="flex rounded-lg gap-5 text-white mt-9">
                            <Button className="bg-black p-5">Google Play</Button>
                            <Button className="bg-black p-5">App Store</Button>
                        </div>
                    </div>
                </div>
                <div className="self-center justify-items-center">
                    <div className="w-1/2">
                        <PayWithIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeCardless
