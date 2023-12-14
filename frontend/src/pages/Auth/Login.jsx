import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
import "../../styles/LoginPage.css";


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
      <div className="Login">
        <div className="div">
          <div className="text-wrapper">Login</div>
          <div className="overlap">
            <div className="text-wrapper-2">Email</div>
            <p className="p">
              Log into your account to purchase and sell products.
            </p>
          </div>
          <div className="text-wrapper-3">Password</div>
          <div className="overlap-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="div-wrapper">
            <input
              type="password"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <img className="rectangle" alt="Rectangle" src="rectangle-19.svg" />
          <img className="img" alt="Rectangle" src="rectangle-26.svg" />
          <div className="group">
            <div className="text-wrapper-5">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div className="text-wrapper-6">
            <span onClick={handleForgotPasswordClick}>Forgot password?</span>
          </div>
          <p className="don-t-have-an">
            <span className="span">Don’t have an account? </span>
            <span onClick={handleRegisterClick} className="text-wrapper-7">
              Register
            </span>
          </p>
          <p className="ZECTRA">
            <span className="text-wrapper-8">Z</span>
            <span className="text-wrapper-9">EC</span>
            <span className="text-wrapper-10">TR</span>
            <span className="text-wrapper-11">A</span>
          </p>
          
        </div>
      </div>
    </Layout>
  );
}
