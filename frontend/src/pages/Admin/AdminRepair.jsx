import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import moment from 'moment';

const AdminRepair = () => {
    
      const [repairReq, setRepairReq] = useState([]);
      const [auth] = useAuth();

      const getRepairReq = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}/api/v1/auth/all-repair`
          );
          setRepairReq(data);
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        if (auth?.token) getRepairReq();
      }, [auth?.token]);
    
      return (
        <Layout title={"All Repair Requests"}>
          <div className="list-group d-flex flex-row">
              <AdminMenu />
            </div>
            <div className="container-fluid m-3 p-3">
          <div className="row dashboard">
            
          <div className="col-md-8 m-2">
                <h1>Repair Requests</h1>
              {repairReq?.map((o, i) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col">SL No</th>
                          <th scope="col">User</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Category</th>
                          <th scope="col">Model</th>
                          <th scope="col">Description</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createdAt).fromNow()}</td>
                          <td>{o?.category}</td>
                          <td>{o?.description}</td>
                          <td>{o?.model}</td>
                          <td>{o?.phone}</td>
                          <td>{o?.type}</td>
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
}

export default AdminRepair;
