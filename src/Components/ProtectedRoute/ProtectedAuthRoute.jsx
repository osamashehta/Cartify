import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

function ProtectedAuthRoute(props) {
  const { userLogin } = useContext(UserContext);
  return <>{userLogin ? <Navigate to="/" /> : props.children}</>;
}

export default ProtectedAuthRoute;
