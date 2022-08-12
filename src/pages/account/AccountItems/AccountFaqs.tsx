import React from 'react'
import { Accodion } from "arvara"

const contentData = [
    'Arvofinance is a registered, incorporated and licensed online lender motivated to bridge the gap and add value to life.',
]
const AccountFaqs = () => {
    return (
        <div>
            <div className="border border-[#C2D0D6] rounded-lg my-5 mt-10">
                <Accodion title="What is Arvofinance?"
                    content={contentData}
                />
            </div>
            <div className="border border-[#C2D0D6] rounded-lg my-5">
                <Accodion title="What is Arvofinance?"
                    content={contentData}
                />
            </div>
            <div className="border border-[#C2D0D6] rounded-lg my-5">
                <Accodion title="What is Arvofinance?"
                    content={contentData}
                />
            </div>
            <div className="border border-[#C2D0D6] rounded-lg my-5">
                <Accodion title="What is Arvofinance?"
                    content={contentData}
                />
            </div>

        </div>
    )
}

export default AccountFaqs
