import { Button } from "arvara/lib"
import TopNav from "../../components/topnav/Topnav"

const Loan = () => {
  return (
    <section>
      I<TopNav title="Loan!" />

      <div className="grid grid-col-4">
        <div className="col-span-2">
          <div className="bg-[#02AC88] rounded-3xl p-5 w-full">
            <Button className="w-full p-2 bg-white text-[#065373]">Make Next Repayment</Button>
          </div>
        </div>
        <div className="col-span-1">
        <div className="bg-[#02AC88] rounded-3xl p-5 w-full">
            <Button className="w-full p-2 bg-white text-[#065373]">Make Next Repayment</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loan
