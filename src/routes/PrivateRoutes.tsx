import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// import loader component
import Sidebar from "../components/shared/Sidebar";
import Transaction from "../pages/Transaction/Transcation";
import ActivityLog from "../pages/ActivityLog/ActivityLog";
import IsProtected from "../components/common/protectedRoute";
import LoadingScreen from "../components/shared/LoadingScreen";
import { ResetPassword } from "../pages/AuthScreens/ResetPassword";

const Loading = () => <LoadingScreen />;
const ArvoSidebar = () => <Sidebar />;

interface Props {
  isAuthenticated: boolean;
}
// lazy load components
const Customer = lazy(() => import("../pages/Customers"));
const LoanRecord = lazy(() => import("../pages/LoanRecord"));
const LoanProcessing = lazy(() => import("../pages/LoanProcessing"));
const CustomerRecord = lazy(() => import("../pages/Customers/Record"));
const ViewLoan = lazy(() => import("../pages/LoanRecord/ViewLoanRecord"));
const LoanProcessingRecord = lazy(() => import("../pages/LoanProcessing/Record"));
const StaffManagement = lazy(() => import("../pages/StaffManagement/StaffManagement"));


const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Register = lazy(()=>import("../pages/AuthScreens/Register"));
const Login = lazy(() => import("../pages/AuthScreens/Login"));

const PrivateRoutes = (props: Props) => {
  const { isAuthenticated } = props;
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Private routes */}
          <Route
            path="/dashboard"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={Dashboard}
              />
            }
          />

          <Route
            path="/customers"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={Customer}
              />
            }
          />
          <Route
            path="/customer/:customerId"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={CustomerRecord}
              />
            }
          />
          <Route
            path="/loan-processing"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={LoanProcessing}
              />
            }
          />
          <Route
            path="/loan-processing/:loanId"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={LoanProcessingRecord}
              />
            }
          />
          <Route
            path="/loan-record"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={LoanRecord}
              />
            }
          />
          <Route
            path="/loan-record/view-loan"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={ViewLoan}
              />
            }
          />
          <Route
            path="/transaction"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={Transaction}
              />
            }
          />
          <Route
            path="/activity-log"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={ActivityLog}
              />
            }
          />
          <Route
            path="/staff-management"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={StaffManagement}
              />
            }
          />

          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
