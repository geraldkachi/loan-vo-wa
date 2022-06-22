import { Table } from "arvara";
import { ETableType } from "arvara/lib/components/Table";
import { customerTransactionColumn } from "../../components/column";
import { customerTransationData } from "../../server/data";

const Transaction = () => {
  return (
    <Table
      type={ETableType.BORDER}
      data={customerTransationData}
      column={customerTransactionColumn}
    />
  );
};

export default Transaction;
