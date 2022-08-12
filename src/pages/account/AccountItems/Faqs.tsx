import { Tab } from 'arvara'
import React from 'react'
import AccountFaqs from './AccountFaqs'
import WalletFaqs from './WalletFaqs'
import LoanFaqs from './LoanFaqs'
import OthersFaqs from './OthersFaqs'

const Faqs = () => {
    return (
        <section>
            <p>Get answers to our frequently asked questions</p>
            <Tab
                className=""
                data={[
                    {
                        name: "Account",
                        render: <>
                            <AccountFaqs />
                        </>
                    },
                    {
                        name: "Wallet",
                        render:
                            <>
                                <WalletFaqs />
                            </>
                    },
                    {
                        name: "Loan",
                        render:
                            <>
                                <LoanFaqs />
                            </>
                    },
                    {
                        name: "Others",
                        render:
                            <>
                                <OthersFaqs />
                            </>
                    },
                ]}
            />
        </section>
    )
}

export default Faqs
