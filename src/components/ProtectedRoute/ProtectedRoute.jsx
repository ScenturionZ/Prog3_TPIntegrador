import { Navigate } from "react-router-dom";
import {UsersContext} from '../Context/UserContext';
import { useContext } from 'react';

const ProtectedRoute = ({typeOfUser, children }) => {

    const { User, Authenticated } = useContext(UsersContext);
    console.log(User);
    if (Authenticated===false || (!typeOfUser==='Bedel' || !typeOfUser==='Decano') ) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export { ProtectedRoute };