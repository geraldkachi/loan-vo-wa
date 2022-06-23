import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// import loader component
import Sidebar from "../components/shared/Sidebar";
import LoadingScreen from "../components/shared/LoadingScreen";
import { ResetPassword } from "../pages/AuthScreens/ResetPassword";

const Loading = () => <LoadingScreen />;
const ArvoSidebar = () => <Sidebar />;

interface Props {
  isAuthenticated: boolean;
}
// lazy load components
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
          {/* <Route
            path="/dashboard"
            element={
              <IsProtected
                isAuthenticated={isAuthenticated}
                component={Dashboard}
              />
            }
          /> */}

          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
