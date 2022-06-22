import { Table } from "arvara";
import { activityData } from "../../server/data";
import { activityColumn } from "../../components/column";
import { ETableType } from "arvara/lib/components/Table";

const ActivityLog = () => {
  return (
    <div>
      <h3 className="component_header">Activity Log</h3>
      <p className="component_subheader mb-5">
        Quick overview of all transactions
      </p>
      <Table
        type={ETableType.LINE}
        data={activityData}
        column={activityColumn}
      />
    </div>
  );
};

export default ActivityLog;
