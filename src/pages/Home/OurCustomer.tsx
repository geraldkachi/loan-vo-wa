// import { div } from "arvara/lib"
import FaceCard1 from "../../assets/home/facecard.svg"

const OurCustomer = () => {
    return (
        <section className="px-5 pt-10 pb-20 bg-[#043144]">
            <div className="max-w-7xl mx-auto mt-10 text-white">
                <div className="my-5 text-center">
                    <h1 className="text-[40px] my-5">What Our 2M+ Customers Are Saying</h1>
                    <p>We always put our customers first at Arvo</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 my-20 max-w-[1200px] mx-auto">
                    <>
                        <div className="p-5 rounded-2xl bg-[#2C5262]">
                            <div className=" mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={FaceCard1} alt="FaceCard1" />
                                    <p>Tobi Oluwaseyi</p>
                                </div>
                                <p>stars</p>
                            </div>

                            <div className="text-left">
                                It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
                            </div>
                        </div>
                    </>
                    <>
                        <div className="p-5 rounded-2xl bg-[#2C5262]">
                            <div className=" mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={FaceCard1} alt="FaceCard1" />
                                    <p>Tobi Oluwaseyi</p>
                                </div>
                                <p>stars</p>
                            </div>

                            <div className="text-left">
                                It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
                            </div>
                        </div>
                    </>
                    <>
                        <div className="p-5 rounded-2xl bg-[#2C5262]">
                            <div className=" mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={FaceCard1} alt="FaceCard1" />
                                    <p>Tobi Oluwaseyi</p>
                                    <p>Tobi Oluwaseyi</p>
                                </div>
                                <p>stars</p>
                            </div>

                            <div className="text-left">
                                It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
                            </div>
                        </div>
                    </>
                </div>

                {/* Three Dots */}
                <div className="flex items-center justify-center gap-3">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default OurCustomer
