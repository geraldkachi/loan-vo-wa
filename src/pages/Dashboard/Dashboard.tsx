import React from "react";
import { Avatar, Button, Tab } from "arvara";
import LoadPortfolio from "./LoadPortfolio";
import TopNav from "../../components/topnav/Topnav";

const Dashboard = () => {

  return (
    <section className="">
      <TopNav title="Welcome Back!" titleUser="Hello Lord Gerald Kachi Hello" />

      <div className="grid md:grid-cols-3 gap-10">
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
