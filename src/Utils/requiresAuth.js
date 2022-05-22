import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Contexts/AuthContext";

const RequireAuth = ({children}) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? children : 

    <Navigate state={{ from: location }} to="/login" replace />

};

export default RequireAuth;