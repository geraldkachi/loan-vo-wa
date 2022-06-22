import {useQuery} from 'react-query';
import Edit from '../../images/edit.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStaff } from '../../server';
import EditStaffForm from '../../components/forms/EditStaffForm';
import { Accodion, Avatar, Button, Checkbox, Drawer } from 'arvara';

interface Props{
  staffId: string;
}
const viewStaff = (props:Props) => {
  const {staffId} = props;
  const [isEditStaff, setIsEditStaff] = useState(false);
  const [assignPermission, setAssignPermission] = useState(false);

  const { data:singleData, isLoading } = useQuery('staff', () => getSingleStaff(staffId));
  
  useEffect(() => {
    console.log(staffId)
    console.log(singleData)
    // if (data) {
    //   console.log(data);
    // }
  }, []);
  
  return (
    <>
      
      <h1 className="font-bold text-2xl -mt-16">Emily Johnson</h1>
      <div className="mt-24">
        <div className="text-meador flex flex-row">
          <Avatar image={Edit} />
        </div>
        <div className="flex flex-row mt-5">
          <div className="w-1/2">
            <p className="text-sm text-grey-slate">First Name</p>
            <p className="text-base">Emily</p>
          </div>
          <div className="w-1/2">
            <p className="text-sm text-grey-slate">Last Name</p>
            <p className="text-base">Johnson</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 mt-16">
            <p className="text-sm text-grey-slate">Email Address</p>
            <p className="text-base">emily@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 mt-16">
            <p className="text-sm text-grey-slate">Phone Number</p>
            <p className="text-base">+234 709 277 2282</p>
          </div>
        </div>

        <p
          className="flex justify-center text-base text-grey-slate mt-24 cursor-pointer"
          onClick={() => setAssignPermission(true)}
        >
          Edit Permissions
        </p>
        <div className="mt-16">
          <Button type="submit" className="w-full" onClick={()=>setIsEditStaff(true)}>
            Edit Staff Information
          </Button>
        </div>
      </div>
      
      {assignPermission && (
        <Drawer
          position="right"
          header="Assign Permission"
          open={assignPermission}
          close={setAssignPermission}
        >
          <Accodion
            title={<Checkbox label="Dashboard" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Staff Management" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Customers" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Transactions" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Loan Processing" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Activity Log" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Loan Records" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <Accodion
            title={<Checkbox label="Broadcast Messages" />}
            content={[
              <Checkbox label="Create" />,
              <Checkbox label="Read" />,
              <Checkbox label="Update" />,
              <Checkbox label="Delete" />,
            ]}
          />
          <div className="mt-20">
            <Button type="button" className="w-full">
              Save Changes
            </Button>
          </div>
        </Drawer>
      )}
      {isEditStaff && (
        <Drawer
          position="right"
          header="Assign Permission"
          open={isEditStaff}
          close={setIsEditStaff}
        >
         <EditStaffForm/> 
        </Drawer>
      )}
    </>
  );
};

export default viewStaff;
