import { Button, Table, Badge } from "arvara";
import { useState, useEffect } from "react";
import {
  approvedData,
  checkApprovedData,
  checkDeclinedData,
  checkDisburseddData,
  checkPendingData,
  checkReadyData,
  declinedData,
  disburseddData,
  pendingData,
  readyData,
} from "../../server/data";
import {
  approvedColumn,
  checkApprovedColumn,
  checkDeclinedColumn,
  checkDisbursedColumn,
  checkPendingColumn,
  checkReadyColumn,
  declinedColumn,
  disbursedColumn,
  pendingColumn,
  readyColumn,
} from "../../components/column";
import { ETableType } from "arvara/lib/components/Table";
//import Table from "../../components/Table";
interface TabUnderlinedButtonProps {
  type: any;
}
const ButtonRender = (props: TabUnderlinedButtonProps) => {
  const { type } = props;
  const [tableColumn, setTableColumn] = useState([]);
  const [checkboxTableColumn, setCheckboxTableColumn] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [checkboxTableData, setCheckboxTableData] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (status === "pending") {
      setTableColumn(pendingColumn);
      setTableData(pendingData);
      setCheckboxTableColumn(checkPendingColumn);
      setCheckboxTableData(checkPendingData);
    }
    if (status === "ready") {
      setTableColumn(readyColumn);
      setTableData(readyData);
      setCheckboxTableColumn(checkReadyColumn);
      setCheckboxTableData(checkReadyData);
    }
    if (status === "declined") {
      setTableColumn(declinedColumn);
      setTableData(declinedData);
      setCheckboxTableColumn(checkDeclinedColumn);
      setCheckboxTableData(checkDeclinedData);
    }
    if (status === "approved") {
      setTableColumn(approvedColumn);
      setTableData(approvedData);
      setCheckboxTableColumn(checkApprovedColumn);
      setCheckboxTableData(checkApprovedData);
    }
    if (status === "disbursed") {
      setTableColumn(disbursedColumn);
      setTableData(disburseddData);
      setCheckboxTableColumn(checkDisbursedColumn);
      setCheckboxTableData(checkDisburseddData);
    }
  }, [tableColumn, tableData, checkboxTableColumn, checkboxTableData, status]);

  return (
    <div className="">
      <div className="flex flex-row">
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "pending" ? "primary" : "link"}
          onClick={() => setStatus("pending")}
        >
          Pending
          <Badge
            color={status === "pending" ? "white" : "grey"}
            bg="grey"
            value={5}
          />
        </Button>
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "ready" ? "primary" : "link"}
          onClick={() => setStatus("ready")}
        >
          Ready
          <Badge
            color={status === "ready" ? "white" : "meador"}
            bg="meador"
            value={104}
          />
        </Button>
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "declined" ? "primary" : "link"}
          onClick={() => setStatus("declined")}
        >
          Declined
          <Badge
            color={status === "declined" ? "white" : "orange"}
            bg="orange"
            value={3}
          />
        </Button>
        <Button
          size="sm"
          type="button"
          variant={status === "approved" ? "primary" : "link"}
          onClick={() => setStatus("approved")}
        >
          Approved
          <Badge
            color={status === "approved" ? "white" : "yellow"}
            bg="yellow"
            value={25}
          />
        </Button>
        <Button
          size="sm"
          type="button"
          variant={status === "disbursed" ? "primary" : "link"}
          onClick={() => setStatus("disbursed")}
        >
          Disbursed
          <Badge
            color={status === "disbursed" ? "white" : "meador"}
            bg="meador"
            value={12}
          />
        </Button>
      </div>
      <div>
        {type === "normal" && (
          <Table type={ETableType.LINE} data={tableData} column={tableColumn} />
        )}
        {type === "checkbox" && (
          <Table
            type={ETableType.LINE}
            data={checkboxTableData}
            column={checkboxTableColumn}
          />
        )}
      </div>
    </div>
  );
};

export default ButtonRender;
