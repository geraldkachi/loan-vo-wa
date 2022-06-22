import { useQuery } from 'react-query';
import { AIaddoutlin } from 'arvara-icons';
import Staff from '../../images/staff.png';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { getAllStaffs } from '../../server';
import Dropdown from '../../components/Dropdown';
import { Avatar, Button, Table, Drawer } from 'arvara';
import { ETableType } from 'arvara/lib/components/Table';
import { staffMangementColumn } from '../../components/column';
import StaffTwoStepRegistration from './StaffTwoStepRegistration';
import ViewStaff from './viewStaff';

const StaffManagement = () => {
  const [staffId, setStaffId] = useState('');
  const [staffData, setStaffData] = useState([]);
  const [isAddStaff, setIsAddStaff] = useState(false);
  const [isEditStaff, setIsEditStaff] = useState(false);
  const [isViewStaff, setIsViewStaff] = useState(false);
  const { data: allStaffs, isLoading } = useQuery('staff', getAllStaffs);

  const toggleDrawer = () => {
    setIsEditStaff(!isEditStaff);
    console.log('edit');
  };

  const toggleViewStaff = (staffId) => {
    setIsViewStaff(!isViewStaff);
    setStaffId(staffId);
  };



  useEffect(() => {
    if (allStaffs) {
      allStaffs.rows.map((item, index) => {
        const tempoData = {
          id: item.id,
          sn: index + 1,
          name: (
            <div className="flex flex-row">
              <Avatar image={Staff} />
              <p className="mt-3 ml-2">
                {item.firstName} {item.lastName}
              </p>
            </div>
          ),
          role: item.role,
          phoneNumber: item.phoneNumber,
          email: item.email,
          action: (
            <Dropdown
              items={[
                {
                  id: 1,
                  name: 'View Profile',
                  onclick: () => toggleViewStaff(item.id),
                },
                {
                  id: 2,
                  name: 'Edit staff Info',
                  onclick: () => toggleDrawer(),
                },
                {
                  id: 3,
                  name: 'Delete Staff',
                  path: '/',
                },
              ]}
              linkTo={''}
              className="w-64 h-40 cursor-pointer"
            />
          ),
        };
        return setStaffData((prev) => [tempoData, ...prev]);
      });
    }
  }, [allStaffs]);

  return (
    <>
      <h3 className="component_header">Staff Management</h3>
      <p className="component_subheader">Quick overview of all transactions</p>
      <Button
        type="button"
        className="mt-10"
        onClick={() => setIsAddStaff(!isAddStaff)}
      >
        <AIaddoutlin className="mr-2" />
        Add New Staff
      </Button>

      {/*Table section*/}
      <Table
        type={ETableType.LINE}
        data={staffData}
        column={staffMangementColumn}
      />
      {/*Add new staff*/}
      <Drawer
        position="right"
        header="Add New Staff"
        open={isAddStaff}
        close={setIsAddStaff}
      >
        <div className="container">
          <StaffTwoStepRegistration type="add staff" />
        </div>
      </Drawer>

      {/*Edit staff*/}
      <Drawer
        position="right"
        header="Edit Staff"
        open={isEditStaff}
        close={setIsEditStaff}
      >
        <div className="container">
          <StaffTwoStepRegistration type="edit staff"/>
        </div>
      </Drawer>

      {/* ********** View Staff ********* */}
      <Drawer
        position="right"
        header=""
        open={isViewStaff}
        close={setIsViewStaff}
      >
        <div className="container">
          <ViewStaff staffId={staffId} />
        </div>
      </Drawer>
    </>
  );
};

export default StaffManagement;
