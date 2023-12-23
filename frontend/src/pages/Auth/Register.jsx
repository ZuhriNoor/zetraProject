import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import "../../styles/Register.css";

export default function Register() {
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
      if(res.data.success){
        toast.success(res.data.message);
        navigate('/login');
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
      <div className="register">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Full Name"
              value={input.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter your address"
              value={input.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="answer" className="form-label">
              Your childhood friend name
            </label>
            <input
              type="text"
              className="form-control"
              name="answer"
              value={input.answer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
