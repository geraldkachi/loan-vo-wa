import React from "react";
import { Avatar, Button, Tab } from "arvara";
import LoadPortfolio from "./LoadPortfolio";
import TopNav from "../../components/topnav/Topnav";

const Dashboard = () => {
  const Ava = () => {
    return <Avatar />;
  };
  return (
    <section className="">
      <TopNav title="Welcome Back!" titleUser="Hello Lord Gerald Kachi Hello" />

      <div className="grid grid-cols-3 gap-10">
        <div className=" col-span-2">
          <div className="card shadow-xl bg-blue-3 text-white">
            <div className=" justify-between">
              <p>Wallet Balance</p>
              <div className="flex items-center gap-3"><p>0090123499</p> </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="card shadow-xl bg-blue-3 text-white">
            <div className=" gap-20 justify-between">
              <p>Wallet Balance</p>
              <div className="flex items-center gap-3"><p>0090123499</p> </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Dashboard;

// return (
//   <>
//     <div className="flex flex-row">
//       <div>
//         <h3 className="component_header">Dashboard</h3>
//         <p className="component_subheader mb-5">
//           Quick overview of all transactions
//         </p>
//       </div>
//       <div className="button-side">
//         <Button type="button">Get Data</Button>
//       </div>
//     </div>
//     <Tab
//       data={[
//         {
//           name: "Loan Portfolio",
//           render: <LoadPortfolio />,
//         },
//         {
//           name: "User Engagement",
//           render: <Ava />,
//         },
//         {
//           name: "Wallet",
//           render: <Ava />,
//         },
//         {
//           name: "Recovery",
//           render: <Ava />,
//         },
//       ]}
//     />
//   </>
// );
