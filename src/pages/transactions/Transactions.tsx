import TopNav from "../../components/topnav/Topnav"
import NoTransactionIcon from "./no-transaction-icon.svg"


const Transactions = () => {
  return (
    <div>
      <TopNav title="Transactions!" />
      <div className="flex items-center"></div>

      <div className="flex  justify-center ">
        <img src={NoTransactionIcon} alt="NoTransactionIcon" />
      </div>
    </div>
  )
}

export default Transactions
