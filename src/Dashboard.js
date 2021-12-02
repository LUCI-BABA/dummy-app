import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react';

const Dashboard = ({ history }) => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    },[])

    const auth = getAuth();
    const user = auth.currentUser;

    return (
        
        <div className="login1">
            <div className="loginContainer">
                <div className="m-5">
                    <p>{user && user.displayName}</p>
                </div>
                <div className="m-5">
                    <button className="btn"
                        onClick={logout}
  
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
