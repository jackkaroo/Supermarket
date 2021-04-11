import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"
import {handleDate} from "../../../helpers/handleDate"

export default function EleventhQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // const [showProducts, setShowProducts] = useState([]);

  // const fetchCheckData = (check_number) => {
  //   if(showProducts.length === 0) {
  //     console.log('true')
  //     fetch('http://localhost:3001/api/manager/info-by-check/' + check_number)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setShowProducts(data);
  //     });
  //   } else {
  //     console.log('false')
  //     setShowProducts([])
  //   }
  // }

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 11</h3>
          <h5>Скласти список чеків, видрукуваних певним касиром за певний
            період часу (з можливістю перегляду куплених товарів, їх к-сті та ціни);</h5>
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


