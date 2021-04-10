import {useEffect, useState} from "react"
import Employee from "./Employee"
import EmployeeHeader from "./EmployeeHeader"
import NewEmployeeModal from "./AddNewEmployee"

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);

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
        <button className="btn btn-primary" onClick={() => setShow(true)}>Add new</button>
        <NewEmployeeModal show={show} handleClose={() => setShow(false)}>
        </NewEmployeeModal>
      </div>
      <table className="table table-hover table-bordered">
        <EmployeeHeader/>
        <tbody>
          {employees.map((employee,index) =>
            <Employee key={employee.id_employee} fetchData={() => fetchData} employee={employee} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}