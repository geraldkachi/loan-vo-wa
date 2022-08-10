import React from 'react'
import LookingToTakeIcon from './lookingtotake.svg'

const LookingToTake = () => {
    return (
        <div className="bg-[#141C1F] px-5 py-20 text-white">
            <div className="text-center">
                <h1>Looking to take charge of your Finances</h1>
                <p className="text-base text-[]">With the Arvo App, every customer has 100% control of their funds. This affords every user the luxury of
                    diligent financial planning for every kobo earned and spent.
                </p>
            </div>
            <div className="max-w-[1300px]  grid lg:grid-flow-col place-items-center  mx-auto">
                <div className='justify-selt-center md:justify-self-start  text-start basis-1/2'>
                    <h1>Fastcash Loan</h1>
                    <p>Apply to receive funds instantly into your arvo wallet</p>
                    <div className='flex items-center gap-4'>
                        <div>
                            <p>Competitive Interest Rate</p>
                            <p>Fast and Secured</p>
                            <p>Flexible Repayment Plan</p>
                        </div>
                        <div>
                            <p>Tenure of 7-14 days</p>
                            <p>No Collateral </p>
                            <p>Higher amount</p>
                        </div>
                    </div>
                </div>
                <div className='self-center basis-1/2'>
                    <img src={LookingToTakeIcon} alt="lookingtotake" />
                </div>
            </div>
            {/* Three Dots */}
            <div className="flex items-center justify-center gap-3">
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
        </div>
    )
}

export default LookingToTake
