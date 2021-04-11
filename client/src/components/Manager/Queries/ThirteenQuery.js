import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function ThirteenthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 13</h3>
          <h5>Загальна сума проданих товарів з чеків,
            видрукуваних певним касиром за певний період часу;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Surname'}/>
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
            <th scope="col">Employee Surname</th>
            <th scope="col">Products Number</th>
          </tr>
          </thead>
          <tbody>
          {items.map((el,index) =>
            <tr key={el.product_number}>
              <td>{el.empl_surname}</td>
              <td>{el.quantity}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


