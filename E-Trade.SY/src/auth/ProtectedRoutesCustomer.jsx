//redux toolkit
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutesCustomer(props) {
  //must be updated soon...
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = true;

  if (user) {
    if (isAuthenticated && user.result === "customer")
      return <Outlet {...props} />;
    else return <Navigate to="./login" />;
  } else {
    return <Navigate to="./login" />;
  }
}
