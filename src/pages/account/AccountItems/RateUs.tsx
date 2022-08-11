import React from 'react'

const RateUs = () => {
  return (
    <section>
        <p className="text-[#668A99]">
        Help us serve you better
        </p>

            <p className='my-10'>Give us a 5-star rating</p>
        <div>

            <form>
                <textarea className='w-full
                h-48

                border-spacing-0
                px-3
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-[#C2D0D6]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none


                ' name="rounded-xl" placeholder='Type Your reviews here'>

                </textarea>
            </form>
        </div>
    </section>
  )
}

export default RateUs
