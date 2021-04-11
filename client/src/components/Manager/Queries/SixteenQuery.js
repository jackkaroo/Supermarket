import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"

export default function SixteenQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 16</h3>
          <h5>Скласти список усіх постійних клієнтів, що мають карту клієнта, по полях  ПІБ, телефон, адреса (якщо вказана);
          </h5>
        </div>
        <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path}/>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Surname</th>
              <th scope="col">Name</th>
              <th scope="col">Patronymic</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Street</th>
              <th scope="col">Zip code</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,index) =>
            <tr key={item.cust_surname}>
              <td>{index + 1}</td>
              <td>{item.cust_surname}</td>
              <td>{item.cust_name}</td>
              <td>{item.cust_patronymic}</td>
              <td>{item.phone_number}</td>
              <td>{item.city}</td>
              <td>{item.street}</td>
              <td>{item.zip_code}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>

  );
}




