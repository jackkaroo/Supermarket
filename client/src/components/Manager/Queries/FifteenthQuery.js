import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function FifteenthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 15</h3>
          <h5>Визначити загальну кількість одиниць певного товару,
            проданого за певний період часу;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Product Id'}/>
          <Input type={'date'} setQueryParam={setDateFrom}/>
          <Input type={'date'} setQueryParam={setDateTo}/>
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
            <th scope="col">Product Id</th>
            <th scope="col">Product Number</th>
          </tr>
          </thead>
          <tbody>
          {items.map((el,index) =>
            <tr key={el.id_product}>
              <td>{el.id_product}</td>
              <td>{el.quantity}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


