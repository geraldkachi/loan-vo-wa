import React from "react";
import { Avatar, Button, Tab } from "arvara";
import LoadPortfolio from "./LoadPortfolio";

const Dashboard = () => {
  const Ava = () => {
    return <Avatar />;
  };
  return (
    <>
      <div className="flex flex-row">
        <div>
          <h3 className="component_header">Dashboard</h3>
          <p className="component_subheader mb-5">
            Quick overview of all transactions
          </p>
        </div>
        <div className="button-side">
          <Button type="button">Get Data</Button>
        </div>
      </div>
      <Tab
        data={[
          {
            name: "Loan Portfolio",
            render: <LoadPortfolio />,
          },
          {
            name: "User Engagement",
            render: <Ava />,
          },
          {
            name: "Wallet",
            render: <Ava />,
          },
          {
            name: "Recovery",
            render: <Ava />,
          },
        ]}
      />
    </>
  );
};

export default Dashboard;
