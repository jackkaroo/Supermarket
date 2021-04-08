import {useState} from "react"
import './Queries.css'
import ButtonShow from "../ButtonShow"
import Input from "../Input"

export default function SecondQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 2</h3>
          <h5>Cписок товарів, що належать певній категорії, відсортованих за назвою;</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input  setQueryParam={setQueryParam}/>
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
          {items.map((product,index) =>
            <tr key={product.id_product}>
              <td>{index + 1}</td>
              <td>{product.id_product}</td>
              <td>{product.category_number}</td>
              <td>{product.product_name}</td>
              <td>{product.characteristics}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

