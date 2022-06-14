import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'



const AddNotice = () => {
  let history = useHistory();
  const [data, setData] = useState({
    title: "",
    content: "",
    author: ""
  });

  const { title, content, author } = data;
  const onInputChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("/post", {
      title, content, author
    });
    history.push("/");
  };

  return (
    <div className="container">
      <div className="side">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Notice</h2>
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
            setData({
              ...data,
              content: write
            })
          }}
        />
      </div>
      <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default AddNotice;