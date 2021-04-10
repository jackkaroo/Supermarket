import {useState} from "react"
import '../../../Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"

export default function ThirdQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 3</h3>
          <h5>Вивести усю інформацію про покупця з певним прізвищем, що має карту клієнта;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Surname'}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Number</th>
              <th scope="col">Surname</th>
              <th scope="col">Name</th>
              <th scope="col">Patronymic</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Street</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Percent</th>
            </tr>
          </thead>
          <tbody>
          {items.map((customer,index) =>
            <tr key={customer.card_number}>
              <td>{index + 1}</td>
              <td>{customer.card_number}</td>
              <td>{customer.cust_surname}</td>
              <td>{customer.cust_name}</td>
              <td>{customer.cust_patronymic}</td>
              <td>{customer.phone_number}</td>
              <td>{customer.city}</td>
              <td>{customer.street}</td>
              <td>{customer.zip_code}</td>
              <td>{customer.percent}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}





