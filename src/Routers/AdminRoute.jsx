import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    const location=useLocation();
    if (loading || isAdminLoading) {
        return <h3 className='py-[40px] text-center'>loading.......</h3>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;