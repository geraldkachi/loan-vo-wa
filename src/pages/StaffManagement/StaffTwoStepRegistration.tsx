import { useState } from "react";
import EditStaffForm from "../../components/forms/EditStaffForm";
import AddNewStaffForm from "../../components/forms/AddNewStaffForm";
import ViewStaff from "../../pages/StaffManagement/viewStaff";
import StaffPermissionForm from "../../components/forms/StaffPermissionForm";

type Types = "add staff" | "edit staff" | "view staff";

interface Props {
  type: Types;
}
const StaffTwoStepRegistration = (props: Props) => {
  const { type} = props;
  const [step, isStep] = useState<Number>(1);
  return (
    <>
      {type === "add staff" && (
        <>
          <div className="container">
            {step === 1 && (
              <div className="container mx-auto">
                <AddNewStaffForm />
              </div>
            )}
            {step === 2 && <StaffPermissionForm />}
          </div>
        </>
      )}
      {type === "edit staff" && (
        <>
          {step === 1 && <EditStaffForm />}
          {step === 2 && <StaffPermissionForm />}
        </>
      )}
      {/* {type === "view staff" && (
        <>
          {step === 1 && <ViewStaff staffId={staffId} />}
          {step === 2 && <StaffPermissionForm />}
        </>
      )} */}
    </>
  );
};

export default StaffTwoStepRegistration;
