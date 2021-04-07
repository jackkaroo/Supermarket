import {useEffect, useState} from "react"
import Employee from "./Employee"

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
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Surname</th>
            <th scope="col">Name</th>
            <th scope="col">Patronymic</th>
            <th scope="col">Role</th>
            <th scope="col">Salary</th>
            <th scope="col">Date birth</th>
            <th scope="col">Date start</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Street</th>
            <th scope="col">Zip code</th>
            <th width="80px"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,index) => <Employee key={employee.id_employee} employee={employee} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}