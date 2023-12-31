import React from 'react'
import NoBeneficiaries from "./no-beneficiaries.svg"
import PlusIcon from "./add.svg"

const Mobile = () => {
    return (
        <div>
            <div className="flex mt-10 items-center justify-center">
                <img src={NoBeneficiaries} alt="NoBeneficiaries" />
            </div>
            <p className="mt-20 text-center text-[#668A99] text-sm">Beneficiaries saved/added will be displayed here</p>

            <div className=" fixed bottom-10 right-7 bg-[#065373] rounded-full w-12 h-12 flex items-center justify-center">
                <img src={PlusIcon} alt="PlusIcon" />
            </div>
        </div>
    )
}

export default Mobile
