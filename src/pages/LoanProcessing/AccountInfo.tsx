import { Button } from "arvara";
import { Card } from "arvara";

const AccountInfo = () => {
  return (
    <>
      <div className="flex mt-10">
        <div className="inline-block">
          <Card type="card">
            <h4 className="card_header">Bank Information</h4>
            <div className="block">
              <div className="inline-block mr-20 mt-5">
                <p className="font-bold">Account Name</p>
                <p>Oluwayemisi Lawal</p>
              </div>
              <div className="inline-block mr-20">
                <p className="font-bold">Bank</p>
                <p>Lagos</p>
              </div>
              <div className="inline-block ml-5">
                <p className="font-bold">Account Number</p>
                <p>0106779023</p>
              </div>
              <div className="block mt-10"></div>
              <p className="font-bold">Verified Account Name</p>
              <p>Oluwayemisi Lawal</p>
            </div>
          </Card>
        </div>
        <div className="inline-block ml-40">
          <Card type="card">
            <h4 className="card_header">Bank Verification Number</h4>
            <div className="block">
              <div className="inline-block mr-20 mt-5">
                <p className="font-bold">First Name</p>
                <p>Oluwayemisi</p>
              </div>
              <div className="inline-block mr-20">
                <p className="font-bold">Last Name</p>
                <p>Lawal</p>
              </div>
              <div className="inline-block ml-10">
                <p className="font-bold">BVN</p>
                <p>29009123213</p>
              </div>
            </div>
            <div className="block">
              <div className="inline-block mt-5 mr-20 mb-5">
                <p className="font-bold">Date of Birth</p>
                <p>19/10/1995</p>
              </div>

              <div className="inline-block ">
                <p className="font-bold">Phone Number</p>
                <p className="">08143338455</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-10 mr-5">
        <Card type="full">
          <div className="p-4">
            <h4 className="card_header mb-10">Card Information</h4>
            <div className="block">
              <div className="inline-block">
                <p className="font-bold">First Name</p>
                <p>Oluwayemisi</p>
              </div>
              <div className="inline-block ml-64">
                <p className="font-bold">Last Name</p>
                <p>Lawal</p>
              </div>
              <div className="inline-block ml-48">
                <p className="font-bold">Expiry Date(mm/yy)</p>
                <p>10/25</p>
              </div>
              <div className="inline-block float-right mr-20">
                <p className="font-bold">Last four digits</p>
                <p>**** **** **** 5667</p>
              </div>
            </div>

            <div className="block mt-10">
              <div className="inline-block"></div>
              <div className="inline-block ml-80 pl-5">
                <p className="font-bold">Trans Reference</p>
                <p>rave-48982214</p>
              </div>
              <div className="inline-block ml-40">
                <p className="font-bold">Card Type</p>
                <p>Mastercard</p>
              </div>
              <div className="inline-block float-right mr-32">
                <p className="font-bold">Card Brand</p>
                <p>Access Bank</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AccountInfo;
