import {useState} from "react"
import EmployeeHeader from "../../Employees/EmployeeHeader"
import Employee from "../../Employees/Employee"

export default function FirstQuery() {

  const [items, setItems] = useState([]);

  const firstQuery = async () => {

    // document.getElementById('employee-header').style.display = 'block';

    fetch('http://localhost:3001/api/manager/list-sellers')
    .then((response) => {
      return response.json();

    })
    .then((data) => {
      console.log(data);
      setItems(data);
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Cписок працівників, що займають посаду касира, відсортованих за прізвищем</h3>
        <button className="btn btn-primary" onClick={firstQuery}>Press</button>
      </div>
      <table className="table table-hover table-bordered">
        <EmployeeHeader id="employee-header"/>
        <tbody>
        {items.map((employee,index) => <Employee key={employee.id_employee} employee={employee} index={index}/>)}
        </tbody>
      </table>
    </div>

  );
}

