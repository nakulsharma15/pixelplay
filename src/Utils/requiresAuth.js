import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Contexts/AuthContext";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const token = localStorage.getItem("Token");

  return token ? children :

    <Navigate to="/login" state={{ from: location }} replace={true} />

};

export default RequireAuth;

