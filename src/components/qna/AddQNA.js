import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddQNA = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    phone: "",
  });

  const { title, content, name, email, phone, } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/qna", user);
    history.push("/qna/list");
  };
  const userString =  window.localStorage.getItem(user);
  console.log(userString);
  return (
    <div className="container">
      <div className="side">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">1:1 문의</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label htmlFor="name">
            name:
          </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label htmlFor="email">
            email:
          </label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label htmlFor="title">
            title
          </label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label htmlFor="content">
            content
          </label>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            />
          <label htmlFor="phone">
            phone
          </label>            
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>

          <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default AddQNA;