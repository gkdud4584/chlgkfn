import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataInfo = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/dashboard");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`/dashboard/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="side">
      <div className="py-4">
        <h1>Data Info</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th>Action</th>
              <th scope="col">Title</th>
              <th scope="col">Token</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/dashboard/${data.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </Link>
                </td>
                <td>{data.title}</td>
                <td>{data.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
};

export default DataInfo;