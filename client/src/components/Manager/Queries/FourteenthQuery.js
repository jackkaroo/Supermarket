import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function FourteenthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 14</h3>
          <h5>Загальна сума проданих товарів з чеків, видрукуваних усіма касиром за певний період часу;</h5>
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
            <th scope="col">Products Number</th>
          </tr>
          </thead>
          <tbody>
          {items.map((el,index) =>
            <tr key={el.quantity}>
              <td>{el.quantity}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


