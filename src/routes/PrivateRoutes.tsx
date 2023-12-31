import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from "../components/layout/Layout";

// import loader component
import Home from "../pages/Home/Home";
import Loan from "../pages/loan/Loan";
import RequiredRoute from "./RequiredRoute";
import Account from "../pages/account/Account";
import Beneficiaries from "../pages/Beneficiaries";
import Dashboard from "../pages/Dashboard/Home/Index";
import DebitCard from "../pages/Debitcard/DebitCard";
import Transactions from "../pages/transactions/Transactions";

interface Props {
  isAuthenticated: boolean;
}
// lazy load components
const Login = lazy(() => import("../pages/AuthScreens/Login"));
const Register = lazy(() => import("../pages/AuthScreens/Register"));

const PrivateRoutes = ({ isAuthenticated }: Props) => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
            {/* routes outside the sidebar or dashboard here */}
          <Route element={<RequiredRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/account" element={<Account />} />
              <Route path="/debit-card" element={<DebitCard />} />
              <Route path="/beneficiaries" element={<Beneficiaries />} />
            </Route>
          </Route>
          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
