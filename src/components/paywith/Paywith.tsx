// import PayWithIcon from "../../assets/home/PayWithIcon"
import PayWithIcon from "./paywithicon.svg"

const Paywith = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto ">
                <div className="self-center ">
                    <div className="object-fill">
                        {/* <PayWithIcon /> */}
                        <img src={PayWithIcon} alt="PayWithIcon" />
                    </div>
                </div>
                <div className="text-base text-left self-center justify-items-center py-5 text-[#141C1F]">
                    <div className="">
                        <h1 className="font-bold text-[32px]">Pay with Arvo Link</h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat non tincidunt sed nibh amet. Rhoncus mi massa, ac erat sed donec. Sit dictum volutpat tellus pellentesque gravida sit donec egestas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Paywith
