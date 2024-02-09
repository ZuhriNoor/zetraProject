import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="list-group d-flex flex-row">
            <AdminMenu />
          </div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          
          <div className="col-md-8 m-2">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;