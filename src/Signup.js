import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Signup = ({ history }) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/dashboard')
        }
    },[])

    const onSignup = () => {
        setLoading(true);
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => history.push('/'))
                    .catch((e) => alert(e.message))
            }).catch((e) => alert(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <div className="m-5">
                    <label >Name : </label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name="name"
                        type="name"
                      
                    />
                </div>
                <div className="m-5">
                    <label >Email : </label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        
                    />
                </div>
                <div className="m-5">
                    <label >Password : </label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        
                    />
                </div>
                <div className="m-5">
                    <button className="btn"
                        onClick={onSignup}
                      
                    >
                        { loading ? 'Creating user ...' : 'Signup'}
                    </button>
                </div>
                <div className="m-5">
                    <Link to="/">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
