// import { div } from "arvara/lib"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import FaceCard1 from "../../assets/home/facecard.svg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimoinal.css"

export const clients = [
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
]

const OurCustomer = ({faqs}: any) => {
    return (
        <div ref={faqs} className="px-5 pt-10 pb-20 bg-[#043144]">
            <div className="max-w-7xl mx-auto mt-10 text-white">
                <div className="my-5 text-center">
                    <h1 className="text-[40px] my-5">What Our 2M+ Customers Are Saying</h1>
                    <p>We always put our customers first at Arvo</p>
                </div>



                <>
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            {clients.map((client, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="testimoinal p-5 rounded-2xl bg-[#2C5262]">
                                            <div className=" mb-5 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img src={client.img} alt="FaceCard1" />
                                                    <p>{client.name}</p>
                                                </div>
                                                <p>{client.star}</p>
                                            </div>

                                            <div className="text-left">
                                                It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
            </div>
        </div>
    )
}

export default OurCustomer



// <div className="grid lg:grid-cols-3 gap-10 my-20 max-w-[1200px] mx-auto">
// <>
//     <div className="p-5 rounded-2xl bg-[#2C5262]">
//         <div className=" mb-5 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                 <img src={FaceCard1} alt="FaceCard1" />
//                 <p>Tobi Oluwaseyi</p>
//             </div>
//             <p>stars</p>
//         </div>

//         <div className="text-left">
//             It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
//         </div>
//     </div>
// </>
// <>
//     <div className="p-5 rounded-2xl bg-[#2C5262]">
//         <div className=" mb-5 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                 <img src={FaceCard1} alt="FaceCard1" />
//                 <p>Tobi Oluwaseyi</p>
//             </div>
//             <p>stars</p>
//         </div>

//         <div className="text-left">
//             It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
//         </div>
//     </div>
// </>
// <>
//     <div className="p-5 rounded-2xl bg-[#2C5262]">
//         <div className=" mb-5 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                 <img src={FaceCard1} alt="FaceCard1" />
//                 <p>Tobi Oluwaseyi</p>
//             </div>
//             <p>stars</p>
//         </div>

//         <div className="text-left">
//             It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications.
//         </div>
//     </div>
// </>
// </div>

// {/* Three Dots */}
// <div className="flex items-center justify-center gap-3">
// <div className="h-3 w-3 bg-white rounded-full"></div>
// <div className="h-3 w-3 bg-white rounded-full"></div>
// <div className="h-3 w-3 bg-white rounded-full"></div>
// </div>
