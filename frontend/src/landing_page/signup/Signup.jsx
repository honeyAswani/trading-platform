import React, { useState } from "react";
import "./Signup.css";
import Logo from "../../assets/logo.svg";
import SignupImage from "../../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (user.password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://trading-platform-n6j2.onrender.com/signup",
        {
          fullname: user.fullname,
          email: user.email,
          mobile: user.mobile,
          password: user.password,
        }
      );

      alert(response.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-left">

        <img
          src={SignupImage}
          alt="Signup Illustration"
          className="signup-image"
          
        />

      </div>

      <div className="signup-right">

        <div className="signup-card">

          <img
            src={Logo}
            alt="Logo"
            className="logo"
            style={{width:"25%"}}
          />

          <h2>Open your account</h2>

          <p className="subtitle">
            Join millions of investors and traders.
          </p>

          <form onSubmit={handleSignup}>

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={user.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={user.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;