import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Question = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/qna");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`/qna/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="side">
      <div className="py-4">
        <h1>QNA list</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">list</th>
              <th scope="col">title</th>
              <th scope="col">name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/qna/${data.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </Link>

                </td>
                <th scope="row">{index + 1}</th>
                <td>{data.title}</td>
                <td>{data.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
};

export default Question;