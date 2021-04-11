import {useEffect, useState} from "react"
import Employee from "./Employee"
import EmployeeHeader from "./EmployeeHeader"
import NewEmployeeModal from "./AddNewEmployee"
import Header from "../Header"

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    fetch('http://localhost:3001/api/employees', {
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
      setEmployees(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="employees-wrapper">
      <Header/>
      <div className="header">
        <h2>Employeers</h2>
        {
          localStorage.getItem("role") === "manager"
          && <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add new
          </button>
        }

        <NewEmployeeModal show={showModal} handleClose={() => setShowModal(false)}>
        </NewEmployeeModal>
      </div>
      <table className="table table-hover table-bordered">
        <EmployeeHeader/>
        <tbody>
          {employees.map((employee,index) =>
            <Employee key={employee.id_employee} fetchData={fetchData} employee={employee} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
