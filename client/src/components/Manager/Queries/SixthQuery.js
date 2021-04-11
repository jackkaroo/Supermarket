import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import ButtonReload from "../../Button/ButtonReload"

export default function SixthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 6</h3>
          <h5>Скласти список всіх товарів, що належать певній категорії;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input  setQueryParam={setQueryParam} placeholder={'Enter Category Name'}/>
          <ButtonReload setItems={setItems} path={path + '/' + queryParam}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id Product</th>
              <th scope="col">Category Number</th>
              <th scope="col">Product Name</th>
              <th scope="col">Characteristics</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,index) =>
            <tr key={item.id_product}>
              <td>{index + 1}</td>
              <td>{item.id_product}</td>
              <td>{item.category_number}</td>
              <td>{item.product_name}</td>
              <td>{item.characteristics}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


