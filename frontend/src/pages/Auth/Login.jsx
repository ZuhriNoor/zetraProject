// login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import "../../styles/Login.css"; // Import login.css for styling

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        input
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  return (
    <Layout title={"Login"}>
      <div className="login"> {/* Use login class for similar styling */}
        <div className="login-content"> {/* Use login-content for similar structure */}
          <div className="login-image">
            <img
              src="/images/login.jpg"
              alt="Login"
              className="img" // Add img class for styling
            />
          </div>
          <div>
            <h1 className="selling-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <label htmlFor="email">Email:</label>
              <div className="login-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <label htmlFor="password">Password:</label>
              <div className="login-input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="forgotpassword-or-register">
              <span onClick={handleForgotPasswordClick}>Forgot password?</span>
              <span> | </span>
              <span onClick={handleRegisterClick}>Register</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
