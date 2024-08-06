
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
            <Helmet>
                <title>userHome</title>
            </Helmet>
            <h3 className='text-3xl'>
                <span>Hi, WellCome</span>
                {
                user?.displayName?user.displayName:'Back'
            }
            </h3>
        </div>
    );
};

export default UserHome;