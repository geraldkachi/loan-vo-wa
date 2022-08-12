import React from 'react'
import NoBeneficiaries from "./no-beneficiaries.svg"

const Mobile = () => {
    return (
        <div>
            <div className="flex mt-10 items-center justify-center">
                <img src={NoBeneficiaries} alt="NoBeneficiaries" />
            </div>
            <p className="mt-20 text-center text-[#668A99] text-sm">Beneficiaries saved/added will be displayed here</p>
        </div>
    )
}

export default Mobile
