import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState({
    title: "",
    notice: "",
    content: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`/post/${id}`);
    setData(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Home으로 돌아가기
      </Link>
      <h1 className="display-4">Notice Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">title: {data.title}</li>
        <li className="list-group-item">author: {data.author}</li>
        <li className="list-group-item">content: {data.content}</li>
      </ul>
    </div>
  );
};

export default Data;