import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {currentadmin}= useSelector((state)=>state.admin);
  
    if(!currentadmin)
    return <Navigate to='/'/>
    return children;
}

export default ProtectedRoute;