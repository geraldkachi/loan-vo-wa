import React from 'react'

const WhyArvo = () => {
  return (
    <section className='bg-[#F6F8F9] px-5 py-10'>
      <div className=' max-w-7xl mx-auto mt-10 py-10'>
        <div className="my-5 text-center">
          <h1 className='text-[#141C1F] text-[40px] my-5'>Why Arvo?</h1>
          <p>Get instant loans without collateral and delays, create wealth with our<br /> peer-to-peer platform on arvo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 my-10 h-[500px] max-w-[1200px] mx-auto">
          <div className="text-base text-left self-center">
            <div className="quick border-l-2 border-[#02C39A] pl-5 my-5">
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
          <div className="bg-green-600 self-stretch flex items-center justify-center bg-grey-slate  sm:py-5">
              <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute bg-red shadow-xl rounded-2xl w-20 h-10="></div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyArvo
