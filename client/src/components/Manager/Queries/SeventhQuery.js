import {useState} from "react"
import '../../../Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"

export default function SeventhQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 7</h3>
          <h5>Скласти список товарів у магазині, що належать певному товару;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input  setQueryParam={setQueryParam} placeholder={'Enter Product Id'}/>
          <ButtonReload setItems={setItems} path={path + '/' + queryParam}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UPC</th>
              <th scope="col">UPC prom</th>
              <th scope="col">Id Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Promotional item</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,index) =>
            <tr key={item.UPC}>
              <td>{index + 1}</td>
              <td>{item.UPC}</td>
              <td>{item.UPC_prom}</td>
              <td>{item.id_product}</td>
              <td>{Math.round(item.selling_price)}</td>
              <td>{item.products_number}</td>
              <td>{item.promotional_product}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


