import BankIcon from "../../assets/home/BankIcon"
import { Button, Checkbox } from 'arvara';


const Bank = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="self-center justify-items-center">
                    <div className="object-fill scale-75 md:scale-100">
                        <BankIcon />
                    </div>
                </div>
                <div className="text-base text-left self-center justify-items-center py-5">
                    <h1 className="text-[#065373] text-[56px]">Bank in Style</h1>
                    <p className="my-5">
                        Affords you the luxury of access to financial services and payments outside the brick-and-mortar approach of a traditional banking system.<br /> With just your smart phone, you bank-on-the-go and your funds are just within your fingertips.
                    </p>

                    <div className="flex rounded-lg gap-5 text-white mt-9">
                        <Button className="bg-black px-3 py-3">Google Play</Button>
                        <Button className="bg-black px-3 py-3">App Store</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bank
