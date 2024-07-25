import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isLogged = useSelector((state) => state.authedUser.isLogged);

  return isLogged ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
