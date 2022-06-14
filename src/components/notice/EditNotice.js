import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const EditNotice = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    title: "",
    content: "",
    author: ""
  });

  const { title, content, author } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`/post/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`/post/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Notice</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className='form-wrapper'>
        <input className="title-input" type='text' name='title' onChange={onInputChange} placeholder='제목' />
        <span name="author">관리자</span>
        <CKEditor name ="content"
          editor={ClassicEditor}
          config={{
            placeholder: "write"
          }}
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const write = editor.getData();
            console.log({write});
            setUser({
              ...user,
              content: write
            })
          }}
        />
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditNotice;