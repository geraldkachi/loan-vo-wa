import React from "react";
import { Table } from "arvara";
import { loanProcessingHistoryData } from "../../server/data";
import { loanProcessingHistoryColumn } from "../../components/column";
import { ETableType } from "arvara/lib/components/Table";

const LoanHistory = () => {
  return (
    <div>
      <Table
        type={ETableType.LINE}
        data={loanProcessingHistoryData}
        column={loanProcessingHistoryColumn}
      />
    </div>
  );
};

export default LoanHistory;
