import { Tab } from 'arvara'
import React from 'react'

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
               {/* <Bank /> */}
             </>
           },
           {
             name: "Wallet",
             render:
               <>
                 {/* <Mobile /> */}
               </>
           },
           {
             name: "Loan",
             render:
               <>
                 {/* <Mobile /> */}
               </>
           },
           {
             name: "Others",
             render:
               <>
                 {/* <Mobile /> */}
               </>
           },
         ]}
        />
    </section>
  )
}

export default Faqs
