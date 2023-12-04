import React from "react";
import "../styles/Home.css";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

export default function Home() {
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Zetra"}>
      <div className="hm">
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </Layout>
  );
}
