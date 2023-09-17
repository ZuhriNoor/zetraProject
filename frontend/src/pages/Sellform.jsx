import React from 'react';
import '../css/Sellform.css'


import Form from "react-bootstrap/Form";

export default function AddForm() {
  return (
    <div>
      <h4 className="h4">Include Some Details</h4>
      <div className="login-box">
        <Form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Brand</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Model</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Specification</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Description</label>
          </div>

          <div className="radio">
            <label>Condition</label>
            <div>
              <input type="radio" name="condition" id="working" value="working" />
              <label htmlFor="working">Working</label>
            </div>
            <div>
              <input type="radio" name="condition" id="not-working" value="not working" />
              <label htmlFor="not-working">Not Working</label>
            </div>
          </div>

          <div className="image">
            <label>Import Image</label>
            <input type="file" name="image" accept="image/*" />
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
