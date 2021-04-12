import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"

export default function SeventhQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);

  const getByQuantity = () => {
    fetch(path + '/prom-products-by-quantity', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setItems(data);
    });
  }

  const getByName = () => {
    fetch(path + '/prom-products-by-name', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setItems(data);
    });
  }

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 7</h3>
          <h5>Скласти список усіх акційних товарів, відсортованих за кількістю одиниць товару/ за назвою;</h5>
        </div>
        <button className="btn" onClick={getByQuantity}>Sort By Quantity</button>
        <button className="btn" onClick={getByName}>Sort By Name</button>
        <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path}/>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id Product</th>
            <th scope="col">UPC_prom</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category Number</th>
            <th scope="col">Characteristics</th>
            <th scope="col">Products Number</th>
          </tr>
          </thead>
          <tbody>
          {items.map((product,index) =>
            <tr key={product.id_product}>
              <td>{index + 1}</td>
              <td>{product.id_product}</td>
              <td>{product.UPC_prom}</td>
              <td>{product.product_name}</td>
              <td>{product.category_number}</td>
              <td>{product.characteristics}</td>
              <td>{product.products_number}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

