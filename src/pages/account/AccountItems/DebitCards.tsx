import React, { useState } from 'react'
import { Button } from 'arvara'
import BankIconDebitCard from "./bank transfer icon.svg"
import BankHouse from './bankhouse.svg'

const DebitCards = () => {

    const [state, setState] = useState<number>(0)
    const onFinishStep = () => setState(1);

    return (
        <div className=''>
            <div>
                <div className="flex gap-3 cursor-pointer items-center border border-[#C2D0D6] hover:bg-[#F0FAFE] rounded-xl p-4 mb-3">
                    <img src={BankIconDebitCard} alt="Debit Cards" />
                    <p className="text">Debit Cards</p>
                </div>
                <div className="flex gap-3 cursor-pointer items-center border border-[#C2D0D6] hover:bg-[#F0FAFE] rounded-xl p-4 mb-3">
                    <img src={BankHouse} alt="House Cards" />
                    <p className="text">Debit Cards</p>
                </div>
            </div>

            <Button className=' w-full justify-items-end'>Update Card</Button>
        </div>

    )
}

export default DebitCards
