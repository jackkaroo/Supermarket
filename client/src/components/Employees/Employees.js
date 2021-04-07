import {useEffect, useState} from "react"
import Employee from "./Employee"
import EmployeeHeader from "./EmployeeHeader"

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const fetchData = async () => {
    fetch('http://localhost:3001/api/employees')
    .then((response) => {
      return response.json();

    })
    .then((data) => {
      console.log(data);
      setEmployees(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="employees-wrapper">
      <div className="header">
        <h2>Employeers</h2>
        <button className="btn btn-primary">Add new</button>
      </div>
      <table className="table table-hover table-bordered">
        <EmployeeHeader/>
        <tbody>
          {employees.map((employee,index) => <Employee key={employee.id_employee} employee={employee} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}