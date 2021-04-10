import {useState} from "react"
import '../../../Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"

export default function EighteenthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 18</h3>
          <h5>За UPC-товару знайти ціну продажу товару, кількість наявних одиниць товару, назву та характеристики товару.</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input  setQueryParam={setQueryParam} placeholder={'Enter UPC'}/>
          <ButtonReload setItems={setItems} path={path + '/' + queryParam}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Selling Price</th>
            <th scope="col">Characteristics</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item,index) =>
            <tr key={item.product_name}>
              <td>{index + 1}</td>
              <td>{item.product_name}</td>
              <td>{item.products_number}</td>
              <td>{item.selling_price}</td>
              <td>{item.characteristics}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


