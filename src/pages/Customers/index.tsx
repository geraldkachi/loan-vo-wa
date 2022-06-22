import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { customers } from "../../server";
import Staff from '../../images/staff.png';
import { useEffect, useState } from "react";
import { ETableType } from "arvara/lib/components/Table";
import { customerColumn } from "../../components/column";
import { Avatar, TabUnderlined, Table, Button, Badge } from "arvara";
const Customer = () => {
  const [customerData, setCustomerData] = useState([]);
  const { data, isLoading } = useQuery("customers", customer => customers({ page: 1, size: 24 }));

  useEffect(() => {
    if (data) {
      data.map((item, index) => {
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
          email: item.email,
          phoneNumber: item.phoneNumber,
          status: (<Badge color="orange" value={item.status} />),
          action: (
            <Button type="button" variant="link" > 
              <Link to={`/customer/${item.id}`}>View Profile</Link>
            </Button>
          ),
        };
        return setCustomerData((prev) => [tempoData, ...prev]);
      });
    }
  }, [data]);
  
  const Ava = () => {
    return <Avatar />;
  };

  return (
    <div>
      <h3 className="component_header">Customers</h3>
      <p className="component_subheader">Quick overview of all transactions</p>
      <div className="mt-10 ">
        <TabUnderlined
          data={[
            {
              name: "Fedpay",
              render: () => (
                <Table
                  type={ETableType.LINE}
                  data={customerData}
                  column={customerColumn}
                />
              ),
              badge: 1450,
              badgeColor: "blue",
              badgeTextColor: "blue",
            },
            {
              name: "Fast Cash",
              render: () => (
                <Table type={ETableType.LINE} data={[]} column={[]} />
              ),
              badge: 1250,
              badgeColor: "meador",
              badgeTextColor: "meador",
            },
            {
              name: "SME Loans",
              render: () => (
                <Table
                  type={ETableType.LINE}
                  data={customerData}
                  column={customerColumn}
                />
              ),
              badge: 500,
              badgeColor: "orange",
              badgeTextColor: "orange",
            },
            {
              name: "Staff Loans",
              render: () => (
                <Table type={ETableType.LINE} data={[]} column={[]} />
              ),
              badge: 8,
              badgeColor: "blue",
              badgeTextColor: "blue",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Customer;
