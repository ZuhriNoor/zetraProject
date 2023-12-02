import React from "react";
import "../styles/Home.css";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout title={"Zetra"}>
      <div className="hm">
        <img src="/images/Capture.png" alt="Capture" />
      </div>
    </Layout>
  );
}