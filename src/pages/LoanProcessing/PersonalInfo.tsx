import { Button } from "arvara";
import { Card } from "arvara";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex mt-10">
        <div className="inline-block">
          <Card type="card">
            <h4 className="card_header">Personal Information</h4>
            <div className="block">
              <div className="inline-block mr-20 mt-5">
                <p className="font-bold">Age</p>
                <p>27yrs</p>
              </div>
              <div className="inline-block mr-20">
                <p className="font-bold">State</p>
                <p>Lagos</p>
              </div>
              <div className="inline-block ml-10">
                <p className="font-bold">Marital Status</p>
                <p>Single</p>
              </div>
              <div className="block mt-10"></div>
              <p className="font-bold">Address</p>
              <p>14, Admiralty Way, Lekki Phase 1, Lekki, Lagos State</p>
            </div>
          </Card>
        </div>
        <div className="inline-block ml-40">
          <Card type="card">
            <h4 className="card_header">Employment Information</h4>
            <div className="block">
              <div className="inline-block mt-5 mr-20 mb-5">
                <p className="font-bold">Employment Status</p>
                <p>Employed</p>
              </div>

              <div className="inline-block ml-10">
                <p className="font-bold">Monthly Income</p>
                <p className="">N2,500,000</p>
              </div>
              <div className="block mt-2">
                <p className="font-bold">Employer Name</p>
                <p>Dangote</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-10">
        <Card type="full">
          <div className="p-4">
            <h4 className="card_header mb-10">Request Breakdown</h4>
            <div className="block">
              <div className="inline-block">
                <p className="font-bold">Credit Amount</p>
                <p>N200,000,000</p>
              </div>
              <div className="inline-block ml-96">
                <p className="font-bold">Capital Repayment</p>
                <p>N100,000,000</p>
              </div>
              <div className="inline-block float-right mr-20">
                <p className="font-bold">Interest Repayment</p>
                <p>N24,000,000</p>
              </div>
            </div>

            <div className="block mt-10">
              <div className="inline-block">
                <p className="font-bold">Monthly Repayment</p>
                <p>N45,000,000</p>
              </div>
              <div className="inline-block ml-80 pl-5">
                <p className="font-bold">Debit Date</p>
                <p>07/02/2022</p>
              </div>
              <div className="inline-block float-right mr-24">
                <p className="font-bold">Total Repayment</p>
                <p>07/02/2022</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10 left-full m-auto w-96">
        <div className="flex">
          <div className="inline-block">
            <Button variant="outline">
              <p className="text-red-700">Decline Request</p>
            </Button>
          </div>
          <div className="inline-block ml-10">
            <Button>Approve Request</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
