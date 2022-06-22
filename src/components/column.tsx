import { AIsearchnormaloutlin, AIsortoutlin } from "arvara-icons";
import { Checkbox } from "arvara";

export const activeColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Email Address",
    key: "email",
  },
  {
    name: "Loan Amount(₦)",
    key: "loan",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const completeColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  { name: "Email Address", key: "email" },
  { name: "Loan Amount(₦)", key: "loan" },
  { name: "Actions", key: "action" },
];
export const defaultedColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Default(₦)",
    key: "default",
  },
  {
    name: "Loan Tenure",
    key: "loanTenure",
  },
  {
    name: "Loan Amount(₦)",
    key: "loanAmount",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>E.C.D</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "ecd",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Status</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "status",
  },
  {
    name: "Comments",
    key: "comment",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const badLoanColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Default(₦)",
    key: "default",
  },
  {
    name: "Loan Tenure",
    key: "loanTenure",
  },
  {
    name: "Loan Amount(₦)",
    key: "loanAmount",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>E.C.D</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "ecd",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Status</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "status",
  },
  {
    name: "Comments",
    key: "comment",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const refundColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Amount(₦)",
    key: "amount",
  },
  {
    name: "Created By (₦)",
    key: "createdBy",
  },
  {
    name: "Refund Date",
    key: "refundDate",
  },
  {
    name: "Comment",
    key: "comment",
  },
];
export const defaultColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Default Date",
    key: "defaultDate",
  },
  {
    name: "Initial Default (₦)",
    key: "initialDefault",
  },
  {
    name: "Amount Left (₦)",
    key: "amountLeaf",
  },
  {
    name: "Amount Paid (₦)",
    key: "amountPaid",
  },
  {
    name: "Default Accurued (₦)",
    key: "defaultAccrued",
  },
];
export const repaymentColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Expected Pay Date",
    key: "expectedPayDate",
  },
  {
    name: "Actual Pay Date",
    key: "actualPayDate",
  },
  {
    name: "Repayment Type",
    key: "repaymentType",
  },
];

export const staffMangementColumn = [
  {
    name: "#",
    key: "sn",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Email Address",
    key: "email",
  },
  {
    name: "Phone Number",
    key: "phoneNumber",
  },
  {
    name: "Role",
    key: "role",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const activityColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="">Staff Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Time Stamp",
    key: "timeStamp",
  },
  {
    name: "Activity",
    key: "activity",
  },
  {
    name: "Type",
    key: "type",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Customer Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "customerName",
  },
  {
    name: "Phone Number",
    key: "phoneNumber",
  },
];

export const transationColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Customer</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "customer",
  },
  {
    name: "Type",
    key: "type",
  },
  {
    name: "Reference",
    key: "reference",
  },
  {
    name: "Fee(₦)",
    key: "fee",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Date</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "date",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Amount (₦)</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "amount",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Status</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "status",
  },
  {
    name: "Action",
    key: "action",
  },
];

export const customerColumn = [
  {
    name: "#",
    key: "sn",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="ml-5">Name</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "name",
  },
  {
    name: "Email Address",
    key: "email",
  },
  {
    name: (
      <div className="flex flex-row">
        <p className="">Phone Number</p>
        <div className="ml-2 text-grey-slate">
          <AIsearchnormaloutlin />
        </div>
      </div>
    ),
    key: "phoneNumber",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Status</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "status",
  },
  {
    name: <div className="ml-10">Actions</div>,
    key: "action",
  },
];
export const customerLoanHistory = [
  {
    name: "Applied Date",
    key: "appliedDate",
  },
  {
    name: "Loan Amount",
    key: "LoanHistory",
  },
  {
    name: "Status",
    key: "status",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const customerTransactionColumn = [
  {
    name: "Type",
    key: "type",
  },
  {
    name: "Reference",
    key: "ref",
  },
  {
    name: "Fee(₦)",
    key: "fee",
  },
  {
    name: (
      <div className="flex flex-row">
        <p>Date</p>
        <div className="ml-2 text-grey-slate">
          <AIsortoutlin />
        </div>
      </div>
    ),
    key: "date",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Status",
    key: "status",
  },
];

export const pendingColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Request Date",
    key: "reqDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Repayment Date",
    key: "repaymentDate",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const checkPendingColumn = [
  {
    name: <Checkbox checked={true} label={""} />,
    key: "check",
  },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Request Date",
    key: "reqDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Repayment Date",
    key: "repaymentDate",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const readyColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Ready Date",
    key: "readyDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const checkReadyColumn = [
  {
    name: <Checkbox checked={true} label={""} />,
    key: "check",
  },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Ready Date",
    key: "readyDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const disbursedColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Ready Date",
    key: "readyDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const checkDisbursedColumn = [
  {
    name: <Checkbox checked={true} label={""} />,
    key: "check",
  },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Ready Date",
    key: "readyDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const declinedColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Declined Date",
    key: "declinedDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Reason",
    key: "reason",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const checkDeclinedColumn = [
  { name: <Checkbox checked={true} label={""} />, key: "check" },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Declined Date",
    key: "declinedDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Reason",
    key: "reason",
  },
  {
    name: "Actions",
    key: "action",
  },
];

export const approvedColumn = [
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Approved Date",
    key: "approvedDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const checkApprovedColumn = [
  { name: <Checkbox checked={true} label={""} />, key: "check" },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Approved Date",
    key: "approvedDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const fastcashApprovedColumn = [
  { name: <Checkbox label={""} />, key: "check" },
  {
    name: "#",
    key: "id",
  },
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Approved Date",
    key: "approvedDate",
  },
  {
    name: "Mandate Ref",
    key: "ref",
  },
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Customer Decision",
    key: "customerDecision",
  },
  {
    name: "Assigned Staff",
    key: "assignedStaff",
  },
  {
    name: "Actions",
    key: "action",
  },
];
export const loanProcessingHistoryColumn = [
  {
    name: "Amount (₦)",
    key: "amount",
  },
  {
    name: "Loan Type",
    key: "loanType",
  },
  {
    name: "Status",
    key: "status",
  },
  {
    name: "Repayment Status",
    key: "repaymentStatus",
  },
];
