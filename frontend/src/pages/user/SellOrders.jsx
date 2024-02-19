import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/sellorders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-md-3  p-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Sell Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Date</th>
                        <th scope="col">Specification</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.brand}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.spec}</td>
                      <td>{o?.desc}</td>    
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
