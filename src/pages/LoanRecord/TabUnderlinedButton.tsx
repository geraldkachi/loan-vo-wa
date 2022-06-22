import { useState, useEffect } from "react";
import { Button, Table, Badge } from "arvara";
import { ETableType } from "arvara/lib/components/Table";
import {
  activeData,
  badLoanData,
  completedData,
  defaultedData,
} from "../../server/data";
import {
  activeColumn,
  badLoanColumn,
  completeColumn,
  defaultedColumn,
} from "../../components/column";

const ButtonRender = () => {
  const [tableColumn, setTableColumn] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (status === "active") {
      setTableColumn(activeColumn);
      setTableData(activeData);
    }
    if (status === "complete") {
      setTableColumn(completeColumn);
      setTableData(completedData);
    }
    if (status === "defaulted") {
      setTableColumn(defaultedColumn);
      setTableData(defaultedData);
    }
    if (status === "badloan") {
      setTableColumn(badLoanColumn);
      setTableData(badLoanData);
    }
  }, [tableColumn, tableData, status]);

  return (
    <div className="">
      <div className="flex flex-row">
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "active" ? "primary" : "link"}
          onClick={() => setStatus("active")}
        >
          Active
          <Badge
            value={803}
            color={status === "active" ? "white" : "blue"}
            bg="blue"
          />
        </Button>
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "complete" ? "primary" : "link"}
          onClick={() => setStatus("complete")}
        >
          Completed
          <Badge
            value={"3,040"}
            color={status === "complete" ? "white" : "meador"}
            bg="meador"
          />
        </Button>
        <Button
          size="sm"
          type="button"
          className="mr-3"
          variant={status === "defaulted" ? "primary" : "link"}
          onClick={() => setStatus("defaulted")}
        >
          Defaulted
          <Badge
            value={5}
            color={status === "defaulted" ? "white" : "yellow"}
            bg="yellow"
          />
        </Button>
        <Button
          size="sm"
          type="button"
          variant={status === "badloan" ? "primary" : "link"}
          onClick={() => setStatus("badloan")}
        >
          Bad Loans/NPL
          <Badge
            color={status === "badloan" ? "white" : "orange"}
            bg="orange"
            value={7}
          />
        </Button>
      </div>
      <div>
        <Table type={ETableType.LINE} data={tableData} column={tableColumn} />
      </div>
    </div>
  );
};

export default ButtonRender;
