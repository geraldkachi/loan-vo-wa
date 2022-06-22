import { Table } from "arvara";
import { ETableType } from "arvara/lib/components/Table";
import { customerLoanHistory } from "../../components/column";
import { customerLoanHistoryData } from "../../server/data";
const LoanHistory = () => {
  return (
    <Table
      type={ETableType.BORDER}
      data={customerLoanHistoryData}
      column={customerLoanHistory}
    />
  );
};

export default LoanHistory;
