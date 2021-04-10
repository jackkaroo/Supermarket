import {useState} from "react"
import '../../../Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import {handleDate} from "../../../helpers/handleDate"

export default function SecondQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 2</h3>
          <h5>За номером чеку вивести усю інформацію про даний чек.</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Check Number'}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Check Number</th>
            <th scope="col">Id Employee</th>
            <th scope="col">Card Number</th>
            <th scope="col">Print Date</th>
            <th scope="col">Total Sum</th>
            <th scope="col">Vat</th>
          </tr>
          </thead>
          <tbody>
          {items.map((check,index) =>
            <tr key={check.check_number}>
              <td>{index + 1}</td>
              <td>{check.check_number}</td>
              <td>{check.id_employee}</td>
              <td>{check.card_number}</td>
              <td>{handleDate(check.print_date)}</td>
              <td>{check.sum_total}</td>
              <td>{check.vat}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}





