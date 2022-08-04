import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// import loader component
import LoadingScreen from "../components/shared/LoadingScreen";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const Loading = () => <LoadingScreen />;

interface Props {
  isAuthenticated: boolean;
}
// lazy load components
const Register = lazy(() => import("../pages/AuthScreens/Register"));
const Login = lazy(() => import("../pages/AuthScreens/Login"));

const PrivateRoutes = ({ isAuthenticated }: Props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
