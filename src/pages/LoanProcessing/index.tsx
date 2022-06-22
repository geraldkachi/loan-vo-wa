import { TabUnderlined, Checkbox } from "arvara";
import TabUnderlinedButton from "./TabUnderlinedButton";
//import Table from '../../components/Table';

const LoanProcessing = () => {
  return (
    <div>
      <h3 className="component_header">Loan Processing</h3>
      <p className="component_subheader">Quick overview of all transcations</p>
      <TabUnderlined
        data={[
          {
            name: "Fedpay",
            render: () => <TabUnderlinedButton type="normal" />,
          },
          {
            name: "Fast Cash",
            render: () => <TabUnderlinedButton type="checkbox" />,
          },
        ]}
      />
    </div>
  );
};

export default LoanProcessing;
