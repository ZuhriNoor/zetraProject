import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import moment from 'moment';

const HelpRequest = () => {
    
      const [help, setHelp] = useState([]);
      const [auth] = useAuth();

      const getHelpReq = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}/api/v1/auth/all-help`
          );
          setHelp(data);
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        if (auth?.token) getHelpReq();
      }, [auth?.token]);
    
      return (
        <Layout title={"All Help Requests"}>
          <div className="list-group d-flex flex-row">
              <AdminMenu />
            </div>
            <div className="container-fluid m-3 p-3">
          <div className="row dashboard">
            
          <div className="col-md-8 m-2">
                <h1>Help Requests</h1>
              {help?.map((o, i) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col">SL No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o?.name}</td>
                          <td>{moment(o?.createAt).fromNow()}</td>
                          <td>{o?.email}</td>
                          <td>{o?.phone}</td>
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
}

export default HelpRequest
