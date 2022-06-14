import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import sha256 from "crypto-js/sha256";

async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte arrays
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}


const AddData = () => {
  let history = useHistory();
  const [data, setData] = useState({
    title: "",
    token: "",
    content: ""
  });

  const { title, content } = data;
  const onInputChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    const v = title + content;

    e.preventDefault();
    hashString(v).then(h => {
      console.log(h);
      console.log(sha256(v).toString());
    });
    const token = sha256(v).toString();
    await axios.post("/dashboard", {
      title, content, token
    });
    history.push("/datainfo");
  };

  return (
    <div className="container">
      <div className="side">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Write</h2>
        <form onSubmit={e => onSubmit(e)}>
          
        <div className='form-wrapper'>
        <input className="title-input" type='text' name='title' onChange={onInputChange} placeholder='제목' />
        <CKEditor name ="content"
          editor={ClassicEditor}
          config={{
            placeholder: "작성하시오"
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

export default AddData;