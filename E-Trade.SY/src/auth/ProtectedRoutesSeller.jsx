//redux toolkit
import { useSelector } from "react-redux";
//router
import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedRoutesSeller(props) {
  //must be updated soon...
  const user = useSelector((state) => state.auth.user);
  // token from local storage || session storage to save the user info
  const isAuthenticated = true;

  if (user) {
    if (isAuthenticated && user.result === "seller")
      return <Outlet {...props} />;
    else return <Navigate to="./login" />;
  } else {
    return <Navigate to="./login" />;
  }
}
