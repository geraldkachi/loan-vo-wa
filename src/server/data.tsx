import { Avatar, Button, Checkbox } from "arvara";
import Img from "../images/div.png";
import Staff from "../images/staff.png";
import Male from "../images/profile.png";
import Profile from "../images/male.png";
import Badge from "../components/shared/Badge";
import Dropdown from "../components/Dropdown";
import ProfileFemale from "../images/female.png";
import ProfileName1 from "../images/profile1.png";
import ProfileName2 from "../images/profile2.png";
import ProfileName3 from "../images/profile3.png";
import LoanHistory from "../pages/Customers/LoanHistory";
import { Link } from "react-router-dom";
const item = [
  {
    id: 1,
    name: "View Profile",
    path: "/profile",
  },
  {
    id: 2,
    name: "View Loan Record",
    path: "/loan-record/view-loan",
  },
];
const staffDropdown = [
  {
    id: 1,
    name: "View Profile",
    path: "",
  },
  {
    id: 2,
    name: "Edit staff Info",
    path: "",
  },
  {
    id: 3,
    name: "Delete Staff",
    path: "",
  },
];
const loanProcessingDropdown = [
  {
    id: 1,
    name: "View Profile",
    path: "/loan-processing/:loanId",
  },
  {
    id: 2,
    name: "View Loan Record",
    path: "/loan-processing/:loanId",
  },
  {
    id: 3,
    name: "View Reqest Timeline",
    path: "/loan-processing/:loanId",
  },
];
export const activeData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    loan: "250,000",
    action: <Dropdown items={item} linkTo={""} className="w-52 h-28" />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    loan: "750,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-32" />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    loan: "150,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-36" />,
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} size="lg" />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    loan: "250,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-36" />,
  },
  {
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    loan: "20,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-36" />,
  },
];
export const completedData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    loan: "250,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    loan: "80,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    loan: "250,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    loan: "15,000",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
];
export const defaultedData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName3} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="orange" value="Not Reachable" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="orange" value="Not Reachable" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName3} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="orange" value="Not Reachable" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
];
export const badLoanData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="green" value="Reachable" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName3} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="orange" value="Not Reachable" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    default: "264,000",
    loanTenure: "3 months",
    loanAmount: "250,000",
    ecd: "31/12/2021",
    status: <Badge color="green" value="Reachabled" />,
    comment: "will pay tomorrow",
    action: <Dropdown items={item} linkTo={""} className="w-64 h-28" />,
  },
];

export const repaymentData = [
  {
    id: 1,
    amount: "250,000",
    expectedPayDate: "31/12/2021",
    actualPayDate: "31/12/2020",
    repaymentType: "Direct Debit",
  },
];

export const defaultData = [
  {
    id: 1,
    defaultDate: "31/12/2021",
    initialDefault: "1,200",
    amountLeaf: "1,200",
    amountPaid: "14,000",
    defaultAccrued: "11,200",
  },
];
export const refundData = [
  {
    id: 1,
    amount: "250,000",
    createdBy: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-3">Oluwayemisi Lawal</p>
      </div>
    ),
    refundDate: "31/12/2021",
    comment: "Double debit issues resolved",
  },
  {
    id: 2,
    amount: "250,000",
    createdBy: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-3">Oluwayemisi Lawal</p>
      </div>
    ),
    refundDate: "31/12/2021",
    comment: "Double debit issues resolved",
  },
];

export const staffMangementTable = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Staff} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    role: "Eidt",
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    phone: "08012883055",
    role: "Edit",
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    role: "Add",
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={Staff} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    phone: "08012883055",
    role: "View",
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName3} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    role: "View",
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
];

export const activityData = [
  {
    id: 1,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 2,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 3,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 4,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 5,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 6,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
  {
    id: 7,
    name: "Sabena Uba",
    timeStamp: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    activity: "Login",
    type: "Login",
    customerName: (
      <div>
        <p>Sabena Uba</p>
        <p className="text-grey-slate text-xs">yemisilawal@gmail.com</p>
      </div>
    ),
    phoneNumber: "08012883055",
  },
];

export const transactionData = [
  {
    id: 1,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Samson Hen</p>
      </div>
    ),
    type: "Deposit",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 2,
    customer: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3">Adewunmi Shola</p>
      </div>
    ),
    type: "Transfer",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 3,
    customer: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-3">Simi Adewale</p>
      </div>
    ),
    type: "Withdrawal",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: (
      <Dropdown items={staffDropdown} linkTo={""} className="w-64 h-40" />
    ),
  },
  {
    id: 4,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Sabena Uba</p>
      </div>
    ),
    type: "Deposit",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: <Dropdown items={staffDropdown} linkTo={""} />,
  },
  {
    id: 5,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-3">Adewunmi Shola</p>
      </div>
    ),
    type: "Transfer",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: <Dropdown items={staffDropdown} linkTo={""} />,
  },
  {
    id: 6,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Simi Adewale</p>
      </div>
    ),
    type: "Withdrawal",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: <Dropdown items={staffDropdown} linkTo={""} />,
  },
  {
    id: 7,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Adewunmi Shola</p>
      </div>
    ),
    type: "Transfer",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: <Dropdown items={staffDropdown} linkTo={""} />,
  },
  {
    id: 8,
    customer: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Simi Adewale</p>
      </div>
    ),
    type: "Withdrawal",
    reference: "12345",
    fee: "10.00",
    date: "07/01/2022",
    amount: "10,000",
    status: <Badge color="green" value="Success" />,
    action: <Dropdown items={staffDropdown} linkTo={""} />,
  },
];

export const customerData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Staff} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    status: <Badge color="orange" value="In Active" />,
    action: (
      <Button type="button" variant="link">
        <Link to="/customer/:customerId">View Profile</Link>
      </Button>
    ),
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    phone: "08012883055",
    status: <Badge color="green" value="Access" />,
    action: (
      <Button type="button" variant="link">
        <Link to="/customer/:customerId">View Profile</Link>
      </Button>
    ),
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    status: <Badge color="orange" value="In Active" />,
    action: (
      <Button type="button" variant="link">
        <Link to="/customer/:customerId">View Profile</Link>
      </Button>
    ),
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={Staff} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sarah@arvofinance.com",
    phone: "08012883055",
    status: <Badge color="green" value="Active" />,
    action: (
      <Button type="button" variant="link">
        <Link to="/customer/:customerId">View Profile</Link>
      </Button>
    ),
  },
  {
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName3} />
        <p className="mt-3 ml-2">Oluwayemisi Lawal</p>
      </div>
    ),
    email: "sabena@arvofinance.com",
    phone: "08012883055",
    status: <Badge color="green" value="Active" />,
    action: (
      <Button type="button" variant="link">
        <Link to="/customer/:customerId">View Profile</Link>
      </Button>
    ),
  },
];

export const customerLoanHistoryData = [
  {
    appliedDate: <div className="">09 September 2021, 10:45 AM</div>,
    LoanHistory: <div className="">₦ 250,000</div>,
    status: (
      <div className="">
        <Badge color="orange" value="Pending" />
      </div>
    ),
    action: (
      <p className="text-blue font-bold text-sm">
        <Link to="/">View Loan</Link>
      </p>
    ),
  },
  {
    appliedDate: <div className="">17 June 2021, 04:50 PM</div>,
    LoanHistory: <div className="">₦ 130,000</div>,
    status: (
      <div className="">
        <Badge color="green" value="Complete" />
      </div>
    ),
    action: (
      <p className="text-blue font-bold text-sm">
        <Link to="/">View Loan</Link>
      </p>
    ),
  },
];

export const customerTransationData = [
  {
    type: "Transfer",
    ref: "7bhu778H90hj2",
    fee: "75.00",
    date: "07/01/2022",
    amount: "50,000",
    status: (
      <div>
        <Badge color="green" value="Success" />
      </div>
    ),
  },
  {
    type: "Airtel",
    ref: "1as6678ddbn3",
    fee: "20.00",
    date: "07/01/2022",
    amount: "2,500",
    status: <Badge color="green" value="Success" />,
  },
];

export const loanProcessingHistoryData = [
  {
    amount: "20,000",
    loanType: "Fedpay",
    status: <Badge color="yellow" value="Pending" />,
    repaymentStatus: <Badge color="yellow" value="On going" />,
  },
  {
    amount: "130,000",
    loanType: "Fedpay",
    status: <Badge color="green" value="Approved" />,
    repaymentStatus: <Badge color="green" value="Completed" />,
  },
  {
    amount: "50,000",
    loanType: "Fedpay",
    status: <Badge color="green" value="Approved" />,
    repaymentStatus: <Badge color="yellow" value="On going" />,
  },
];

export const pendingData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: (
      <Dropdown
        items={loanProcessingDropdown}
        linkTo={""}
        className="w-64 h-40"
      />
    ),
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: (
      <Dropdown
        items={loanProcessingDropdown}
        linkTo={""}
        className="w-64 h-40"
      />
    ),
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: (
      <Dropdown
        items={loanProcessingDropdown}
        linkTo={""}
        className="w-64 h-40"
      />
    ),
  },
];
export const checkPendingData = [
  {
    check: <Checkbox label={""} />,
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox label={""} />,
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox label={""} />,
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName1} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    reqDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    repaymentDate: "07/02/2022",
    amount: "105,000",
    customerDecision: <Badge color="yellow" value="Pending" />,
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const readyData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    readyDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    readyDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Bisi Ajayi",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const checkReadyData = [
  {
    check: <Checkbox checked={true} label={""} />,
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    readyDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Oluwayemisi Lawal</p>
      </div>
    ),
    readyDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Bisi Ajayi",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const declinedData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="">Oluwayemisi Lawal</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="red" value="Cancelled" />,
    assignedStaff: "Chuka Eluchie",
    reason: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Adebayo Toyin</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Accepted" />,
    assignedStaff: "Chuka Eluchie",
    reason: "John Afolabi",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-2">Lucky Atogwe</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Accepted" />,
    assignedStaff: "Chuka Eluchie",
    reason: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const checkDeclinedData = [
  {
    check: <Checkbox checked={true} label={""} />,
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="">Oluwayemisi Lawal</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="red" value="Cancelled" />,
    assignedStaff: "Chuka Eluchie",
    reason: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-2">Adebayo Toyin</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Accepted" />,
    assignedStaff: "Chuka Eluchie",
    reason: "John Afolabi",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-2">Lucky Atogwe</p>
      </div>
    ),
    declinedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Accepted" />,
    assignedStaff: "Chuka Eluchie",
    reason: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const approvedData = [
  {
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Oluwayemisi Lawal</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-3">Adebayo Toyin</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-3">Lucy Atogwe</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3">David Johnson</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Samuel Adetula</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];
export const checkApprovedData = [
  {
    check: <Checkbox checked={true} label={""} />,
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Oluwayemisi Lawal</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-3">Adebayo Toyin</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-3">Lucy Atogwe</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3">David Johnson</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    check: <Checkbox checked={true} label={""} />,
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Samuel Adetula</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];

export const disburseddData = [];
export const checkDisburseddData = [];

export const fastcashApprovedData = [
  {
    checkbox: <Checkbox label={""} />,
    id: 1,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Oluwayemisi Lawal</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 2,
    name: (
      <div className="flex flex-row">
        <Avatar image={Profile} />
        <p className="mt-3">Adebayo Toyin</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 3,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileFemale} />
        <p className="mt-3">Lucy Atogwe</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 4,
    name: (
      <div className="flex flex-row">
        <Avatar image={ProfileName2} />
        <p className="mt-3">David Johnson</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
  {
    id: 5,
    name: (
      <div className="flex flex-row">
        <Avatar image={Img} />
        <p className="mt-3">Samuel Adetula</p>
      </div>
    ),
    approvedDate: (
      <div>
        <p>07/01/2022</p>
        <p className="text-grey-slate text-xs">15:35</p>
      </div>
    ),
    ref: "xxxxxxxxxxxx",
    amount: "105,000",
    customerDecision: <Badge color="green" value="Success" />,
    assignedStaff: "Chuka Eluchie",
    action: <Dropdown items={loanProcessingDropdown} linkTo={""} />,
  },
];

export const radialBarChartData = [
  {
    name: "Total Reg",
    type: 329,
  },
  {
    name: "Loan App",
    type: 300,
  },
  {
    name: "Success Rate",
    type: 378,
  },
];

export const barChartData = [
  {
    type: "Success",
    value: 575,
  },
  {
    type: "Declined",
    value: 175,
  },
];
export const barChartData2 = [
  {
    type: "Repayment",
    value: 67135455,
  },
  {
    type: "Active Loans",
    value: 8368325,
  },
];

export const data = [
  { month: "Jan", value: 0, count: 2 },
  { month: "Feb", value: 10, count: 15 },
  { month: "Mar", value: "", count: 3 },
  { month: "Apr", value: 5, count: 8 },
  { month: "May", value: "", count: 3 },
  { month: "Jun", value: 11, count: 12 },
  { month: "Jul", value: 30, count: 30 },
  { month: "Aug", value: 20, count: 24 },
  { month: "Sep", value: 10, count: 5 },
];

export const geometryData = [
  {
    gemetry: "line",
    color: "#1890ff",
  },
  {
    gemetry: "line",
    color: "#2fc25b",
  },
];
