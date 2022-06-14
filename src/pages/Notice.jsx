import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Notice = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/post");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`/post/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="side">
      <div className="py-4">
        <h1>Notice</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.title}</td>
                <td>{user.author}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/post/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/post/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
};

export default Notice;