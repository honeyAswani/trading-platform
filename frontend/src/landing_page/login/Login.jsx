import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg';

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async(e)=>{

        e.preventDefault();

        try{

            const response = await axios.post(
                "https://trading-platform-n6j2.onrender.com/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );
            localStorage.setItem("user", JSON.stringify(response.data.user));

            alert("Login Successful");

            
            window.location.href=`https://trading-platform-wmhw.vercel.app?token=${response.data.token}`;

        }

        catch(err){

            alert(err.response?.data?.message || "Login Failed");

        }

    };

    return(

        <div className="login-container">

            <div className="login-card">

                <img
                    src={Logo}
                    alt="logo"
                    className="logo" style={{width:"50%"}}
                />

                <h2>Login</h2>

                <p>Login to your account</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;