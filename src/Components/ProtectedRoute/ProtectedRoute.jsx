import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

function ProtectedRoute(props) {
  const { userLogin } = useContext(UserContext);
  if (userLogin) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
