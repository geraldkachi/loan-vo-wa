import { Button, Table, Avatar } from "arvara";
import ProfileName from "../../images/profile.png";
import { ETableType } from "arvara/lib/components/Table";
import PrivateCard from "../../components/cards/PrivateCard";
import { repaymentData, defaultData, refundData } from "../../server/data";
import {
  refundColumn,
  defaultColumn,
  repaymentColumn,
} from "../../components/column";

const ViewLoanRecord = () => {
  return (
    <>
      <h3 className="component_header">Loan Records</h3>
      <p className="component_subheader mb-5">
        Quick overview of all transactions
      </p>
      <div className="rounded-3xl bg-blue border-slate-100 mt-10 profile-card">
        <div className="flex flex-row justify-between ml-6 p-7">
          <div className="flex justify-start">
            <Avatar image={ProfileName} />
            <div className="ml-5">
              <h3 className="text-grey-slate text-base w-60">Name</h3>
              <h3 className="text-white text-base font-bold">
                Oluwayemisi Lawal
              </h3>
            </div>
          </div>
          <div>
            <h3 className=" text-grey-slate text-base w-60">Email Address</h3>
            <p className="text-white text-base font-bold">
              yemisilawal@gmail.com
            </p>
          </div>
          <div>
            <h3 className=" text-grey-slate font-normal text-base w-60">
              Phone Number
            </h3>
            <p className="text-white text-base font-bold">08012883055</p>
          </div>
        </div>
      </div>
      <section className="mt-5 flex justify-between btn-section">
        <div className="flex flex-row justify-start">
          <Button className="mr-6">Mark as Complete</Button>
          <Button className="mr-6" variant="outline">
            Stop Mandate
          </Button>
          <Button variant="link">Refund</Button>
        </div>
        <div className="flex justify-end ml-10">
          <Button variant="primary" className="bg-white text-meador">
            Clear Balance
          </Button>
        </div>
      </section>
      <div className="flex flex-row justify-start">
        <div>
          <PrivateCard
            title="Loan Amount"
            heading1="Next Repayment Date"
            content1="27yrs"
            heading2="Loan Type"
            content2="Lagos"
            heading3="Start Date"
            content3="27yrs"
            heading4="Start Date"
            content4="Single"
            heading5="Start Date"
            content5="Lagos"
            heading6="Completion Date"
            content6="Lagos"
          ></PrivateCard>
        </div>
        <div className="ml-6">
          <PrivateCard
            title="Repayment Information"
            heading1="Monthly Repayment"
            content1="27yrs"
            heading2="Total Repayment"
            content2="Lagos"
            heading3="Capital Repayment"
            content3="27yrs"
            heading4="Interest Repayment"
            content4="Single"
            heading5="No. of Repayment"
            content5="Lagos"
            heading6="Repayment Received"
            content6="Lagos"
          ></PrivateCard>
        </div>
      </div>
      {/*Loan Information*/}
      <div className="rounded-3xl bg-white border-slate-100 drop-shadow-lg w-full h-40">
        <div className="mt-10">
          <h1 className="font-bold text-xl text-grey-slate p-6">
            Loan Information
          </h1>
        </div>
        <div className="flex flex-row ml-6">
          <div>
            <h3 className="font-bold text-base w-60">Customer ID</h3>
            <p className="text-grey-slate">10092123</p>
          </div>
          <div>
            <h3 className="font-bold text-base w-60 ml-10">Mandate Ref</h3>
            <p className="text-grey-slate  ml-10">300603215768</p>
          </div>
          <div>
            <h3 className="font-bold text-base w-60  ml-10">Loan Tenure</h3>
            <p className="text-grey-slate  ml-10">2 Months</p>
          </div>
          <div>
            <h3 className="font-bold text-base w-60  ml-10">Repayment Left</h3>
            <p className="text-grey-slate  ml-10">₦ 2,500,000</p>
          </div>
        </div>
      </div>
      {/*Repayment table*/}
      <div className="mt-6 bg-white rounded-3xl">
        <h1 className="font-bold text-xl text-grey-slate p-6">Repayment</h1>
        <Table type="line" data={repaymentData} column={repaymentColumn} />
      </div>
      {/*Default table*/}
      <div className="mt-6 bg-white rounded-3xl">
        <div className="flex flex-row">
          <h1 className="font-bold text-xl text-grey-slate p-6">Default</h1>
          <div className="flex justify-end">
            <Button variant="link" className="button-side">
              Clear Default
            </Button>
          </div>
        </div>
        <Table
          type={ETableType.LINE}
          data={defaultData}
          column={defaultColumn}
        />
      </div>
      {/*Refund table*/}
      <div className="mt-6 bg-white rounded-3xl">
        <h1 className="font-bold text-xl text-grey-slate p-6">Refund</h1>
        <Table type={ETableType.LINE} data={refundData} column={refundColumn} />
      </div>
    </>
  );
};

export default ViewLoanRecord;
