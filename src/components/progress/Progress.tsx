const Progress = () => {
    return (
        <section className="bg-[#043144] text-white px-5 py-10 text-center ">
            <section className="mx-auto max-w-[1200px]">
                <div className="progres-text py-10">
                    <h1 className="text-4xl font-bold my-5">Our Progress</h1>
                    <p>Our achievement in the journey depicted in numbers</p>
                </div>

                <div className="grid md:grid-cols-4 gao-10 place-items center">
                    <div className="my-5">
                        <h3 className="text-[#02C39A] text-[40px]">2</h3>
                        <p className="text-">Years in the industry</p>
                    </div>

                    <div className="my-5">
                        <h3 className="text-[#02C39A] text-[40px]">2,000,000+</h3>
                        <p className="text-">Trusted Customers</p>
                    </div>

                    <div className="my-5">
                        <h3 className="text-[#02C39A] text-[40px]">5,000++</h3>
                        <p className="text-">Transactions / day</p>
                    </div>

                    <div className="my-5">
                        <h3 className="text-[#02C39A] text-[40px]">2,000+</h3>
                        <p className="text-">Dispensed Loans / day</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Progress