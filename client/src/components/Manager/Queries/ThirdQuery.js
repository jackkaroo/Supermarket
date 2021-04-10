import {useState} from "react"
import '../../../Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"

export default function ThirdQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 3</h3>
          <h5>За прізвищем працівника знайти його телефон та адресу;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input  setQueryParam={setQueryParam} placeholder={'Enter Surname'}/>
          <ButtonReload setItems={setItems} path={path + '/' + queryParam}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Surname</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Zip code</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item,index) =>
            <tr key={item.empl_surname}>
              <td>{index + 1}</td>
              <td>{item.empl_surname}</td>
              <td>{item.empl_name}</td>
              <td>{item.phone_number}</td>
              <td>{item.city}</td>
              <td>{item.street}</td>
              <td>{item.zip_code}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


