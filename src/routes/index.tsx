import { useEffect } from 'react';
import PrivateRoutes from "./PrivateRoutes";
// import useAuth from "../components/hooks/useAuth";

const Routers = () => {
  // const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const isAuthenticated = true

  return (
    <>
      <PrivateRoutes isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Routers;
