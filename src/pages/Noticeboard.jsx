import React, {useState, useEffect} from 'react'
import Table from '../components/table/Table'
import axios from 'axios';

const rateTableHead = [
    '번호',
    '제목',
    '작성자',
    '작성일',
    '조회수',
]

// const renderHead = (item, index) => <th key={index}>{item}</th>



axios.defaults.withCredentials = true; // withCredentials 전역 설정
function Noticeboard(){
  const [log, setLog] = useState([]);
  // 함수 뺴는 것으로 나중에 처리 해야함. -> 코드 수정  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setLog(res.data);
      console.log(log);
    })
    .catch(error => console.log(error))
  }) // },[]) <- []안에 있는 숫자까지 반복 가능 

  return(
    <div className="card__header">
    <h2 className='notice'>공지사항</h2><br/>

    <div className="row">
    <div className="col-12">
    <div className="card">
        <div className="card__body">
        <table>
          <Table />
          <tr>
            {rateTableHead.map((rateTableHead) => (
              <th key={rateTableHead}>{rateTableHead}</th>
            ))}
          </tr>
          <tbody>
            {log.map(item => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
          </table>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
export default Noticeboard