import {useEffect, useState} from "react"
import Employee from "./Employee"
import EmployeeHeader from "./EmployeeHeader"
import NewEmployeeModal from "./AddNewEmployee"
import Header from "../Header"

const exportCSVFile = require('../../helpers/csv');

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

  const makeReport = () => {
    const fileTitle = 'employees'; // or 'my-unique-title'
    const itemsFormatted = [];
    const headers = {
      id_employee: "id",
      email: "email",
      empl_surname: "last name",
      empl_name: "name",
      empl_patronymic: "patro",
      role: "role",
      salary: "salary",
      date_of_birth: "birth",
      date_of_start: "start",
      phone_number: "phone",
      city: "city",
      street: "str",
      zip_code: "zip",
    };

    employees.forEach((item) => {
      itemsFormatted.push({
        id_employee: item.id_employee,
        email: item.email,
        empl_surname: item.empl_surname,
        empl_name: item.empl_name,
        empl_patronymic: item.empl_patronymic,
        role: item.role,
        salary: item.salary,
        date_of_birth: item.date_of_birth,
        date_of_start: item.date_of_start,
        phone_number: item.phone_number,
        city: item.city,
        street: item.street,
        zip_code: item.zip_code,
      });
    });

    exportCSVFile(headers, itemsFormatted, fileTitle);
  }

  return (
    <div className="employees-wrapper">
      <Header/>
      <div className="header">
        <h2>Employees</h2>
        <button className="btn btn-secondary" onClick={makeReport}>Report</button>
        {
          localStorage.getItem("role") === "manager"
          &&
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add new</button>
        }

        <NewEmployeeModal fetchData={fetchData} show={showModal} handleClose={() => setShowModal(false)}/>
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






