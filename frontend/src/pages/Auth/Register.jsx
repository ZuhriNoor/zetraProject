import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/Register.css"; // Import register.css for styling

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    answer: "",
    phone: "",
  });

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
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        input
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register"}>
      <div className="login"> {/* Use login class for similar styling */}
        <div className="login-content"> {/* Use login-content for similar structure */}
          <div className="login-image">
            <img
              src="/images/register.jpg"
              alt="Register"
              className="img" // Add img class for styling
            />
          </div>
          <div>
            <h1 className="selling-title">Register</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <label htmlFor="email">Email:</label>
              <div className="login-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={input.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="password">Password:</label>
              <div className="login-input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={input.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="name">Name:</label>
              <div className="login-input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <label htmlFor="address">Address:</label>
              <div className="login-input">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={input.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  required
                />
              </div>
              <label htmlFor="phone">Phone:</label>
              <div className="login-input">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={input.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="answer">Childhood Friend's Name:</label>
              <div className="login-input">
                <input
                  type="text"
                  id="answer"
                  name="answer"
                  placeholder="Enter your childhood friend's name"
                  value={input.answer}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login-input">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required
                  />
                  <label className="form-check-label m-2" htmlFor="gridCheck">
                    I agree to the Terms
                     and Conditions
                  </label>
                </div>
              </div>
              <button type="submit" className="register-btn">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
