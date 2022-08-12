import { Accodion } from 'arvara/lib'
import React from 'react'

const contentData = [
    `Normally, disbursement is immediate. However, if you experience any delay, it could be due to some errors on the customer’s details or network.
    So ensure to enter your correct details and reach our team for more info with delays. Thanks!`
]
const LoanFaqs = () => {
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

        </div>
    )
}

export default LoanFaqs
