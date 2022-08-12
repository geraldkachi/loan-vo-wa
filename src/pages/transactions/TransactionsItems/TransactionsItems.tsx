import { Button } from 'arvara/lib'
import React from 'react'


interface TransactionsItemsProps {
    handleTransactionDetails: any
}
const TransactionsItems = ({ handleTransactionDetails }: TransactionsItemsProps) => {
    return (
        <section>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Recipient Name</p>
                <p className=' text-base font-bold text-[#141C1F]'>Daniel Abayomi</p>
            </div>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Account Number</p>
                <p className=' text-base font-bold text-[#141C1F]'>0090123499</p>
            </div>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Bank Name</p>
                <p className=' text-base font-bold text-[#141C1F]'>Arvo Wallet</p>
            </div>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Amount</p>
                <p className=' text-base font-bold text-[#141C1F]'>₦ 4,500</p>
            </div>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Status</p>
                <p className=' text-base font-bold text-[#141C1F]'>Received</p>
            </div>
            <div className='text-sm text-[#668A99] mb-10'>
                <p className='my-2'>Date & Time</p>
                <p className=' text-base font-bold text-[#141C1F]'>09 September 2021, 10:45 AM</p>
            </div>

            <Button className='w-full'>Download Reciept</Button>
            <Button style={{background:'white', color:'#668A99'}}  className='w-full'>Share</Button>
        </section>
    )
}

export default TransactionsItems
