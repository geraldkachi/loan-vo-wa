import React, { useState } from 'react'
interface WhtAvroProps {
  whyavro: any | null
}
const WhyArvo = ({ whyavro }: WhtAvroProps) => {
  const [tabIndex, setTabIndex] = useState<string>("Quick")

  return (
    <div id='why-avro' ref={whyavro} className='bg-[#F6F8F9] px-5 py-12 mb-8 sm:mb-auto'>
      <div className=' max-w-7xl mx-auto mt-10 py-10'>

        <div className="my-5 text-center">
          <h1 className='text-[#141C1F] text-[40px] my-5'>Why Arvo?</h1>
          <p>Get instant loans without collateral and delays, create wealth with our<br /> peer-to-peer platform on arvo</p>
        </div>

        {/* a better approach */}
        {/*  */}
        <div className="grid md:grid-cols-2 gap-10 my-10 h-[500px] max-w-[1200px] mx-auto">
          <div className="text-left self-center flex gap-6  flex-col my-4 ml-4 border-l-4 border-[#F1F3FF] text-[#949AB1] relative">
            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#02C39A] cursor-pointer hover:text-[#02C39A]" + (tabIndex === "Quick" && "tabIndex text-[#02C39A] border-l-4 h-20 border-b-[#02C39A]")} onClick={() => setTabIndex("Quick")}>
              <div>

              <p className={`font-bold text-[#141C1F] ${tabIndex === "Quick" && " text-[#02C39A] "}`}>Quick Loan Disbursement</p>
              <p className={` ${tabIndex === "Quick" && " text-[#668A99] "}`}>Quick and secured loans guaranteed instantly</p>
              </div>
            </div>

            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#065373] cursor-pointer hover:text-[#065373]" + (tabIndex === "Affordable" && " text-[#065373] border-l-4 border-b-[#065373]")} onClick={() => setTabIndex("Affordable")}>
              <div>

              <p className={`font-bold text-[#141C1F] ${tabIndex === "Affordable" && " text-[#065373 ]"}`}>Affordable VAS</p>
              <p className={`${tabIndex === "Affordable" && " text-[#668A99] "}`}>A dedicated channel for airtime vending/topup at appropriate pricing, VAS (Utilities & bills) at discounted rates.</p>
              </div>
            </div>

            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#2E63EA] cursor-pointer hover:text-[#2E63EA]" + (tabIndex === "Peer" && " text-[#2E63EA] border-l-4 border-b-[#2E63EA]")} onClick={() => setTabIndex("Peer")}>
              <div>

              <p className={`font-bold text-[#141C1F] ${tabIndex === "Peer" && " text-[#2E63EA] "}`}>Peer-to-peer Secured Investment</p>
              <p className={`${tabIndex === "Peer" && " text-[#668A99] "}`}>Guaranteed peer-to-peer platform that promotes savings & investment culture.</p>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-'>
            {tabIndex === "Quick" && (<>
              <div className="bg-[#02C39A]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white relative shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute bg-white-azure shadow-xl rounded-2xl w-max p-4 h-max md:right-32 top-10 right-1 md:top-40">
                    <p>Hello, Gerald Kachi!</p>
                    <p className='text-#668A99 text-sm'>₦250,000 been disbursed to your wallet</p>
                  </div>
                </div>
              </div>
            </>)}
            {tabIndex === "Affordable" && (<>

              <div className="bg-[#065373]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute  shadow-xl rounded-2xl w-20 h-10"></div>
                </div>
              </div>
            </>)}
            {tabIndex === "Peer" && (<>
              <div className="bg-[#2E63EA]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self- bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute shadow-xl rounded-2xl w-20 h-10"></div>
                </div>
              </div>
            </>)}
          </div>
        </div>
      </div>
    </div >
  )
}

export default WhyArvo



