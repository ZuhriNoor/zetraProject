import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminSellOrders = () => {
  //eslint-disable-next-line
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Picked up",
    "Order Complete",
    "Cancelled",
  ]);

  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-sell-orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      // eslint-disable-next-line
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/sell-order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className="list-group d-flex flex-row">
          <AdminMenu />
        </div>
        <div className="container-fluid m-3 p-3">
      <div className="row dashboard">
        
      <div className="col-md-8 m-2">
            <h1>Sell Orders</h1>
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
                      <th scope="col">Seller</th>
                      <th scope="col">Donation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.brand}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td>{o?.spec}</td>
                      <td>{o?.desc}</td>
                      <td>{o?.seller?.name}</td>
                      <td>{o?.donate}</td>
                      
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

export default AdminSellOrders;
