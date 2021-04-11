import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"

export default function ForthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 4</h3>
          <h5>Скласти список усіх товарів, відсортованих за назвою;</h5>
        </div>
        <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path}/>
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

