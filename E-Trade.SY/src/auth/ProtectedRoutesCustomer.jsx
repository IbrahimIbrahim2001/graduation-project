import { jwtDecode } from "jwt-decode";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutesCustomer(props) {
  const location = useLocation();
  const token = localStorage.getItem("token") || undefined;
  const decodedToken = token ? jwtDecode(token) : undefined;
  const isAuthenticated = decodedToken && token;

  if (isAuthenticated && location?.key !== "default")
    return <Outlet {...props} />;
  else return <Navigate to="./login" replace={true} />;
}
