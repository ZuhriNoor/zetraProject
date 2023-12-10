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
  const [formValid, setFormValid] = useState(false);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    if (input.email !== '' && input.password !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simulate login check (replace with actual authentication logic)
    const { email, password } = input;
    if (email === 'example@example.com' && password === 'password') {
      // Simulate successful login
      const fakeUser = {
        username: 'ExampleUser',
        email: 'example@example.com',
      };
      const fakeToken = 'fakeToken123'; // Replace with an actual token if required
  
      // Update the state to mimic a successful login
      setAuth({
        ...auth,
        user: fakeUser,
        token: fakeToken,
      });
  
      // Store fake authentication data in localStorage (for demo purposes)
      localStorage.setItem('auth', JSON.stringify({ user: fakeUser, token: fakeToken }));
  
      // Redirect to home or any desired route after successful login
      navigate('/');
    } else {
      // If login credentials are incorrect, show an error message
      toast.error('Invalid email or password. Please try again.');
    }
  };
  


  return (
    
      <div className="Login">
          <div className="div">
              <div className="text-wrapper">Login</div>
              <div className="overlap">
                  <div className="text-wrapper-2">Email</div>
                  <p className="p">Log into your account to purchase and sell products.</p>
              </div>
              <div className="text-wrapper-3">Password</div>
              <div className="overlap-group">
                  <div className="text-wrapper-4">Enter your email</div>
                  <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleChange}
              required
            />
              </div>
              <div className="div-wrapper">
                  <div className="text-wrapper-4">Enter your password</div>
                  <input
              type="password"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleChange}
              required
            />
            
              </div>
              <img className="rectangle" alt="Rectangle" src="rectangle-19.svg" />
              <img className="img" alt="Rectangle" src="rectangle-26.svg" />
              <div className="group">
                  <div className="overlap-group-2">
                      
                  <div className="text-wrapper-5">
                  <button type="submit" className="btn btn-primary">
                    Login
                    </button>
                    </div>
                  
                  </div>
              </div>
              <div className="text-wrapper-6">Forgot password?</div>
              <p className="don-t-have-an">
                  <span className="span">Don’t have an account? </span>
                  <span className="text-wrapper-7">Register</span>
              </p>
              <p className="ZECTRA">
                  <span className="text-wrapper-8">Z</span>
                  <span className="text-wrapper-9">EC</span>
                  <span className="text-wrapper-10">TR</span>
                  <span className="text-wrapper-11">A</span>
              </p>
              <img className="group-2" alt="Group" src="group-25.png" />
          </div>
      </div>
  );
};