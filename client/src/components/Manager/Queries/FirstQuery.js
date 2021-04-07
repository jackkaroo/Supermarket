import {useState} from "react"
import EmployeeHeader from "../../Employees/EmployeeHeader"
import Employee from "../../Employees/Employee"
import './Queries.css'
import ButtonShow from "../ButtonShow"

export default function FirstQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-around mb-30">
        <h3>Cписок працівників, що займають посаду касира, відсортованих за прізвищем</h3>
        <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path}/>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <EmployeeHeader  />
          <tbody>
          {items.map((employee,index) => <Employee key={employee.id_employee} employee={employee} index={index}/>)}
          </tbody>
        </table>
      </div>
    </div>

  );
}

