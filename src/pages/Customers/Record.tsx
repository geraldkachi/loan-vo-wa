import MoreDetail from "./MoreDetail";
import Activities from "./Activities";
import { useQuery } from "react-query";
import LoanHistory from "./LoanHistory";
import Transaction from "./Transaction";
import { useEffect, useState } from "react";
import { Avatar, Button, Tab } from "arvara";
import { useParams } from "react-router-dom";
import { getCustomerDetail } from "../../server";

const Record = () => {

  const { customerId } = useParams();
  const { data, isLoading } = useQuery('customer', () => getCustomerDetail(customerId));

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <h3 className="component_header">Customer Records</h3>
      <div className="flex mb-10">
        <p className="inline_block component_subheader">
          Quick overview of customers
        </p>
      </div>

      <div className="rounded-3xl bg-blue border-slate-100 mt-10 ">
        <div className="flex flex-row justify-between ml-6 p-7">
          <div className="flex justify-start">
            <Avatar
              image="data:image/jpeg;base64,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"
              size="xl"
            />
            <div className="ml-5">
              <h3 className="text-grey-slate text-base w-60">Name</h3>
              <h3 className="text-white text-base font-bold">
                {data && data.firstName} {data && data.lastName}
              </h3>
            </div>
          </div>
          <div>
            <h3 className=" text-grey-slate text-base w-60">Email Address</h3>
            <p className="text-white text-base font-bold">
              {data && data.email}
            </p>
          </div>
          <div>
            <h3 className=" text-grey-slate font-normal text-base w-60">
              Phone Number
            </h3>
            <p className="text-white text-base font-bold">{data && data.phoneNumber}</p>
          </div>
          <div className="auto-cols-auto">
            <div className="">
              <Button type="button" variant="outline">
                Block
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Tab
          data={[
            { name: "More Details", render: <MoreDetail customerDetails={data} /> },
            { name: "Loan History", render: <LoanHistory /> },
            { name: "Transactions", render: <Transaction /> },
            { name: "Activities", render: <Activities /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Record;
