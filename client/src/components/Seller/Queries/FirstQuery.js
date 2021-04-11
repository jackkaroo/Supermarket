import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function FirstQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 1</h3>
          <h5>Скласти список чеків,  видрукуваних даним касиром за певний період часу;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Surname'}/>
          <Input type={'date'} setQueryParam={setDateFrom} placeholder={'Enter Surname'}/>
          <Input type={'date'} setQueryParam={setDateTo} placeholder={'Enter Surname'}/>
          <ButtonReload setItems={setItems}
                        path={path + '/' + queryParam + `?dateFrom=${dateFrom}&dateTo=${dateTo}`}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck}
                      path={path + '/' + queryParam + `?dateFrom=${dateFrom}&dateTo=${dateTo}`}/>
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
            <tr >
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


