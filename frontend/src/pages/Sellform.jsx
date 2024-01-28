import React, { useState } from "react";
import "../styles/Sellform.css";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Sellform = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [isNotWorking, setIsNotWorking] = useState(false);
  //   const [brand, setBrand] = useState("");
  //   const [model, setModel] = useState("");
  //   const [spec, setSpec] = useState("");
  //   const [desc, setDesc] = useState("");
  //   const [condition, setCondition] = useState("");
  const [input, setInput] = useState({
    brand: "",
    model: "",
    spec: "",
    desc: "",
    condition: "",
    photo: "",
  });

  //eslint-disable-next-line
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleWorkingChange = () => {
    setIsWorking(!isWorking);
    setIsNotWorking(false); // Uncheck "Not Working" when "Working" is checked
    setInput({
        ...input,
        condtion: "Working"
    })
  };

  const handleNotWorkingChange = () => {
    setIsNotWorking(!isNotWorking);
    setIsWorking(false); // Uncheck "Working" when "Not Working" is checked
    setInput({
        ...input,
        condtion: "Not Working"
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Layout title={"Sell"}>
      <div className="sellform">
        <div className="div">
          <div className="overlap-group">
            <div className="rectangle">
              <input
              name="brand"
                type="text"
                className="input-field"
                placeholder="Enter Brand"
              />
            </div>
            <div className="rectangle-2">
              <input
              name="model"
                type="text"
                className="input-field"
                placeholder="Enter Model"
              />
            </div>
            <div className="rectangle-3">
              <input
              name="spec"
                type="text"
                className="input-field"
                placeholder="Enter Specification"
              />
            </div>
            <div className="rectangle-4">
              <textarea
              name="desc"
                className="input-field"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div className="text-wrapper">Brand</div>
            <div className="text-wrapper-2">Model</div>
            <div className="text-wrapper-3">Specification</div>
            <div className="text-wrapper-4">Description</div>
          </div>
          <div className="text-wrapper-5">Condition:</div>
          <div className="text-wrapper-6" onClick={handleWorkingChange}>
            <div className={`ellipse ${isWorking ? "checked" : ""}`}>
              {isWorking && <div className="checked-mark" />}{" "}
              {/* Custom checked mark */}
            </div>
            Working
          </div>
          <div className="text-wrapper-7" onClick={handleNotWorkingChange}>
            <div className={`ellipse-2 ${isNotWorking ? "checked" : ""}`}>
              {isNotWorking && <div className="checked-mark" />}{" "}
              {/* Custom checked mark */}
            </div>
            Not Working
          </div>
          <div className="text-wrapper-8">Include Some Details</div>

          <div className="overlap">
            <img className="img" alt="Rectangle" src="rectangle-33.svg" />
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="upload-images">
              Upload
              <br />
              Images
            </div>
          </div>
          <div className="div-wrapper" onClick={handleSubmit}>
            <div className="text-wrapper-9">Submit</div>
          </div>
          <div className="overlap-2">
            <p className="ZECTRA">
              <span className="span">Z</span>
              <span className="text-wrapper-10">EC</span>
              <span className="text-wrapper-11">TR</span>
              <span className="text-wrapper-12">A</span>
            </p>
            <img className="group" alt="Group" src="group-23.png" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sellform;
