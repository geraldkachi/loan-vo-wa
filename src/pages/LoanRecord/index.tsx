import { TabUnderlined } from "arvara";
import TabUnderlinedButton from "./TabUnderlinedButton";

const LoanRecord = () => {
  return (
    <div>
      <h3 className="component_header">Loan Records</h3>
      <p className="component_subheader">Quick overview of all transactions</p>
      <TabUnderlined
        data={[
          {
            name: "Fedpay",
            render: () => <TabUnderlinedButton />,
          },
          {
            name: "Fast Cash",
            render: () => <TabUnderlinedButton />,
          },
          {
            name: "SME Loans",
            render: () => <TabUnderlinedButton />,
          },
          {
            name: "Staff Loan",
            render: () => <TabUnderlinedButton />,
          },
        ]}
      />
    </div>
  );
};

export default LoanRecord;
