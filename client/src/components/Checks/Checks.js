import {useEffect, useState} from "react"
import Check from "./Check"
import Header from "../Header"
import NewEmployeeModal from "../Employees/AddNewEmployee"
const exportCSVFile = require('../../helpers/csv');

export default function Checks() {
  const [checks, setChecks] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const fetchData = async () => {
    fetch('http://localhost:3001/api/checks', {
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
      setChecks(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  const makeReport = () => {
    const fileTitle = 'employees'; // or 'my-unique-title'
    const itemsFormatted = [];
    const headers = {
      check_number: "check_id",
      id_employee: 'employee_id',
      card_number: 'customer_id',
      print_date: 'print_date',
      sum_total: "total",
      vat: "vat",
    };

    checks.forEach((item) => {
      itemsFormatted.push({
        check_number: item.check_number,
        id_employee: item.check_number,
        card_number: item.check_number,
        print_date: item.check_number,
        sum_total: item.check_number,
        vat: item.vat,
      });
    });

    exportCSVFile(headers, itemsFormatted, fileTitle);
  }

  return (
    <div className="checks-wrapper">
      <Header/>
      <div className="header">
        <h2>Checks</h2>
        <button onClick={makeReport}>Report</button>
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
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Check Number</th>
          <th scope="col">Id Employee</th>
          <th scope="col">Card Number</th>
          <th scope="col">Print Date</th>
          <th scope="col">Total Sum</th>
          <th scope="col">Vat</th>
          <th width="80px"></th>
        </tr>
        </thead>
        <tbody>
        {checks.map((check,index) => <Check key={check.check_number} check={check} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
