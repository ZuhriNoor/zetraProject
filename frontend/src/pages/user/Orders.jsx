import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/orders`
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
            <h1 className="m-2">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table orders-table">
                    <thead>
                    <h5 className="m-2 orders-title">Order {i+1}</h5>
                      <tr>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th>Products</th>
                        </tr>
                      <tr>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>
                        <div className="container">
                    {o?.products?.map((p, i) => (
                      <div
                        className="row mb-2 card flex-row orders-product"
                        key={p._id}
                      >
                        <div
                          className="col-md-4 orders-product-image"
                        >
                          <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                        </td>
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
