import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import "./App.css";

const Login = ({ history }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/dashboard')
        }
    },[])

    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/dashboard')
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <div className="m-5">
                
                    <label>Email :    </label>
                    
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Your Email"
                       
                    />
                </div>
                <div className="m-5">
                    <label>Password :    </label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Your Password"
                        
                    />
                </div>
                <div className="m-5">
                    <button className="btn"
                        onClick={onLogin}>
                        
                        {loading ? 'Logging you in ...' : 'Login'}
                    </button>
                </div>
                <div className="m-5">
                    <Link to="/signup">
                        Don't have an account?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
