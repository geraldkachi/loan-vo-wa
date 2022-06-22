import {
  AIactivityoutlin,
  AIarrow2Outlin,
  AIusersquarebol,
  AIelement3Outlin,
  AIprofile2Useroutlin,
  AIdocumenttextoutlin,
  AIvolumehighoutlin,
  AImenu1Outlin,
} from "arvara-icons";

export const sidebarChildren = [
  { icon: <AIelement3Outlin />, name: "Dashboard", path: "/dashboard" },
  {
    icon: <AIusersquarebol />,
    name: "Staff Management",
    path: "/staff-management",
  },
  { icon: <AIprofile2Useroutlin />, name: "Customers", path: "/customers" },
  { icon: <AIarrow2Outlin />, name: "Transactions", path: "/transaction" },
  {
    icon: <AIarrow2Outlin />,
    name: "Loan Processing",
    path: "/loan-processing",
  },
  { icon: <AIactivityoutlin />, name: "Activity Log", path: "/activity-log" },
  {
    icon: <AIdocumenttextoutlin />,
    name: "Loan Records",
    path: "/loan-record",
    child: "loan-record/view-loan",
  },
  {
    icon: <AIvolumehighoutlin />,
    name: "Broadcast Messages",
    path: "/broadcast-messages",
  },
];
