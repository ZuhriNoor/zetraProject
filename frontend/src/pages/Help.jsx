import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Help.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from 'react-helmet';

const Help = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [desc, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        email,
        phone,
        desc,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/help`,
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
      <Helmet>
        <script type="text/javascript">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65d333e18d261e1b5f6247ea/1hn0g5b4j';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </Helmet>
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
                  value={phone}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="description">Description:</label>
              <div className="help-input">
                <textarea
                  id="description"
                  name="description"
                  value={desc}
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
            or you can{" "}
            <a
              href="https://tawk.to/chat/65d333e18d261e1b5f6247ea/1hn0g5b4j"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "orange", textDecoration: "none" }}
            >
              chat
            </a>{" "}
            with us!!!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
