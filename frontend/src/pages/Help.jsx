import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Help.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Help = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        email,
        phoneNumber,
        description,
      };

      // Make a POST request to your backend API to save the form data
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/help`, // Replace with your API endpoint
        formData
      );

      if (response.data.success) {
        toast.success("Your message has been sent!");
        // Optionally, you can navigate to another page after successful submission
        // navigate("/success");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while sending your message.");
    }
  };

  return (
    <Layout title={"Help"}>
      <div className="help">
        <h1 className="selling-title">Need Help?</h1>
        <div className="help-content">
          <div className="help-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <div className="help-input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="email">Email:</label>
              <div className="help-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <div className="help-input">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="description">Description:</label>
              <div className="help-input">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              {auth?.token ? (
                <button className="help-btn" type="submit">
                  Submit
                </button>
              ) : (
                <button
                  className="help-btn"
                  onClick={() =>
                    navigate("/login", {
                      state: "/dashboard/user/sellorders",
                    })
                  }
                >
                  Login to Submit
                </button>
              )}
            </form>
          </div>
        </div>
        <div className="help-details">
          <p className="help-or-chat">
            <span>or you can chat with us!!!</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
