import {useState} from 'react';
import './write.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Write() {
  const [write, setWrite] = useState({
    title: '',
    content: ''
  })

  const [view, setView] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setWrite({
      ...write,
      [name]: value
    })
    console.log(write);
  };  

  // const submitReview = ()=>{
  //   Axios.post('', {
  //     title: write.title,
  //     content: write.content
  //   }).then(()=>{
  //     alert('등록 완료!');
  //   })
  // };

  return (

    <div className="App">
      <h1>게시글 작성</h1>
      <div className='movie-container'>
      {view.map(element => 
        <div key={element}>
          <h2>{element.title}</h2>
          <div>
            {element.content}
          </div>
        </div>)}
      </div>

      <div className='form-wrapper'>
        <input className="title-input" type='text' name='title' onChange={getValue} placeholder='제목' />
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
            const data = editor.getData();
            console.log({event,editor,data});
            setWrite({
              ...write,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button"
      onClick={() => {
        setView(view.concat({...write}));
      }}
      >입력</button>
    </div>
  );
}


export default Write;