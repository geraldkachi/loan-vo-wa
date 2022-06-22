import { Button } from "arvara";
import { Card } from "arvara";
import { Customer } from "arvo-types"
import { differenceInCalendarYears } from 'date-fns';

interface Props {
  customerDetails: Partial<Customer>;
}

const MoreDetail = (props: Props) => {
  const { customerDetails } = props;
  
  return (
    <>
      <div className="flex mt-10">
        <div className="inline-block">
          <Card type="card">
            <h4 className="card_header">Personal Information</h4>
            <div className="block">
              <div className="inline-block mr-20 mt-5">
                <p className="font-bold">Age</p>
                <p>{differenceInCalendarYears(new Date(), new Date(customerDetails?.dob))}</p>
              </div>
              <div className="inline-block mr-20">
                <p className="font-bold">State</p>
                <p>{customerDetails && customerDetails.state}</p>
              </div>
              <div className="inline-block ml-10">
                <p className="font-bold">Marital Status</p>
                <p>{ customerDetails && customerDetails.maritalStatus}</p>
              </div>
              <div className="block mt-10"></div>
              <p className="font-bold">Address</p>
              <p>{ customerDetails && customerDetails.homeAddress}</p>
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
            <h4 className="card_header mb-10">Account Information</h4>
            <div className="block">
              <div className="inline-block">
                <p className="font-bold">Account Number</p>
                <p>2100957214</p>
              </div>
              <div className="inline-block ml-96">
                <p className="font-bold">Account Name</p>
                <p>Oluwayemisi Lawal</p>
              </div>
              <div className="inline-block float-right mr-20">
                <p className="font-bold">Bank Name</p>
                <p>UBA</p>
              </div>
            </div>

            <div className="block mt-10">
              <div className="inline-block">
                <p className="font-bold">BVN D.O.B</p>
                <p>12/09/1994</p>
              </div>
              <div className="inline-block ml-96 pl-10">
                <p className="font-bold">BVN First Name</p>
                <p>Oluwayemisi</p>
              </div>
              <div className="inline-block float-right mr-10">
                <p className="font-bold">BVN Last Name</p>
                <p>Lawal</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MoreDetail;
