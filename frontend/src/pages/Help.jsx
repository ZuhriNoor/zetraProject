import React from 'react';
import './Help.css';
import Form from "react-bootstrap/Form";

export default function AddForm() {
  return (
    <div>
       <h1 className="h1" style={{ textAlign: 'center', margin: '60px 0' }}>Help</h1>
      <div className="login-box">
        <Form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Phone Number</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Description</label>
          </div>


          <a href="/submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </Form>
      </div>
    </div>
  );
}