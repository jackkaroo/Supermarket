import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function TwelvethQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 12</h3>
          <h5>Скласти список чеків, видрукуваних усіма касирами за певний період
            часу (з можливістю перегляду куплених товарів, їх к-сті та ціни );</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input type={'date'} setQueryParam={setDateFrom}/>
          <Input type={'date'} setQueryParam={setDateTo}/>
          <ButtonReload setItems={setItems}
                        path={path + `?dateFrom=${dateFrom}&dateTo=${dateTo}`}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck}
                      path={path + `?dateFrom=${dateFrom}&dateTo=${dateTo}`}/>
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
            <th scope="col">Product Name</th>
            <th scope="col">Product Number</th>
            <th scope="col">Selling Price</th>
          </tr>
          </thead>
          <tbody>
          {items.map((check,index) =>
            <tr >
              <td>{index + 1}</td>
              <td>{check.check_number}</td>
              <td>{check.id_employee}</td>
              <td>{check.card_number}</td>
              <td>{handleDate(check.print_date)}</td>
              <td>{check.sum_total}</td>
              <td>{check.vat}</td>
              <td>{check.product_name}</td>
              <td>{check.product_number}</td>
              <td>{check.selling_price}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


