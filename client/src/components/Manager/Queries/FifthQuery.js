import {useState} from "react"
import './Queries.css'
import ButtonShow from "../ButtonShow"

export default function FifthQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 5</h3>
          <h5>Скласти список усіх категорій, відсортованих за назвою;</h5>
        </div>
        <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path}/>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
          {items.map((category,index) =>
            <tr key={category.category_number}>
              <td>{index + 1}</td>
              <td>{category.category_number}</td>
              <td>{category.category_name}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  );
}

