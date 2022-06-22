import { Table } from "arvara";
import { transactionData } from "../../server/data";
import { transationColumn } from "../../components/column";
import { ETableType } from "arvara/lib/components/Table";

const Transaction = () => {
  return (
    <>
      <h3 className="component_header">Transaction</h3>
      <p className="component_subheader mb-5">
        Quick overview of all transactions
      </p>
      <div>
        <Table
          type={ETableType.LINE}
          data={transactionData}
          column={transationColumn}
        />
      </div>
    </>
  );
};

export default Transaction;
