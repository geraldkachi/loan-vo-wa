import React, { useState } from 'react'
interface WhtAvroProps {
  whyavro: any | null
}
const WhyArvo = ({ whyavro }: WhtAvroProps) => {
  const [tabIndex, setTabIndex] = useState<string>("Quick")

  return (
    <div id='why-avro' ref={whyavro} className='bg-[#F6F8F9] px-5 py-10'>
      <div className=' max-w-7xl mx-auto mt-10 py-10'>


        <div className="my-5 text-center">
          <h1 className='text-[#141C1F] text-[40px] my-5'>Why Arvo?</h1>
          <p>Get instant loans without collateral and delays, create wealth with our<br /> peer-to-peer platform on arvo</p>
        </div>



        {/* a better approach */}
        {/*  */}
        <div className="grid md:grid-cols-2 gap-10 my-10 h-[500px] max-w-[1200px] mx-auto">
          <div className="text-left self-center flex gap-6  flex-col my-4 ml-4 border-l-4 border-[#F1F3FF] text-[#949AB1] relative">
            <div className={"tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#02C39A] cursor-pointer hover:text-[#02C39A]" + (tabIndex === "Quick" && "tabIndex text-[#02C39A] border-l-4 border-b-[#02C39A]")} onClick={() => setTabIndex("Quick")}>
              <p className={`font-bold text-[#141C1F] ${tabIndex === "Quick" && " text-[#02C39A] "}`}>Quick Loan Disbursement</p>
              <p className={` ${tabIndex === "Quick" && " text-[#668A99] "}`}>Quick and secured loans guaranteed instantly</p>
            </div>

            <div className={"tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#065373] cursor-pointer hover:text-[#065373]" + (tabIndex === "Affordable" && " text-[#065373] border-l-4 border-b-[#065373]")} onClick={() => setTabIndex("Affordable")}>
              <p className={`font-bold text-[#141C1F] ${tabIndex === "Affordable" && " text-[#065373] "}`}>Affordable VAS</p>
              <p className={`${tabIndex === "Affordable" && " text-[#668A99] "}`}>A dedicated channel for airtime vending/topup at appropriate pricing, VAS (Utilities & bills) at discounted rates.</p>
            </div>

            <div className={"tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#2E63EA] cursor-pointer hover:text-[#2E63EA]" + (tabIndex === "Peer" && " text-[#2E63EA] border-l-4 border-b-[#2E63EA]")} onClick={() => setTabIndex("Peer")}>
              <p className={`font-bold text-[#141C1F] ${tabIndex === "Peer" && " text-[#2E63EA] "}`}>Peer-to-peer Secured Investment</p>
              <p className={`${tabIndex === "Peer" && " text-[#668A99] "}`}>Guaranteed peer-to-peer platform that promotes savings & investment culture.</p>
            </div>
          </div>

          <div className='grid md:grid-cols-'>
            {tabIndex === "Quick" && (<>
              <div className="bg-[#02C39A]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute bg-red shadow-xl rounded-2xl w-20 h-10="></div>
                </div>
              </div>
            </>)}
            {tabIndex === "Affordable" && (<>

              <div className="bg-[#065373]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute bg-red shadow-xl rounded-2xl w-20 h-10="></div>
                </div>
              </div>
            </>)}
            {tabIndex === "Peer" && (<>
              <div className="bg-[#2E63EA]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self- bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute bg-red shadow-xl rounded-2xl w-20 h-10="></div>
                </div>
              </div>
            </>)}
          </div>
        </div>
        {/*  */}
        {/* end of better approach */}

{/*
        <div className="grid md:grid-cols-2 gap-10 my-10 h-[500px] max-w-[1200px] mx-auto">
          <div className="text-base text-left self-center">
            <div className="quick border-l-4 border-[#02C39A] pl-5 my-5">
              <p className='text-[#02C39A]'>Quick Loan Disbursement</p>
              <p className='text-[#141C1F]'>Quick and secured loans guaranteed instantly</p>
            </div>
            <div className="Affordable  pl-5 my-5">
              <p className='text-[#02C39A]'>Affordable VAS</p>
              <p className='text-[#668A99]'>A dedicated channel for airtime vending/topup at appropriate pricing, VAS (Utilities & bills) at discounted rates.</p>
            </div>
            <div className="Peer-to-peer  pl-5 my-5">
              <p className='text-[#02C39A]'>Peer-to-peer Secured Investment</p>
              <p className='text-[#668A99]'>Guaranteed peer-to-peer platform that promotes savings & investment culture.</p>
            </div>
          </div>
          <div className="bg-green-600 self-stretch flex items-center justify-center bg-grey-slate  sm:py-5 my-4">
            <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
              <div className="absolute bg-red shadow-xl rounded-2xl w-20 h-10="></div>
            </div>
          </div>
        </div> */}

      </div>
    </div >
  )
}

export default WhyArvo



