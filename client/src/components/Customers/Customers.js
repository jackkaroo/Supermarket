import {useEffect, useState} from "react"
import Customer from "./Customer"
import Header from "../Header"
import NewCustomerModal from "./AddNewCustomer"
const exportCSVFile = require('../../helpers/csv');

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    fetch('http://localhost:3001/api/customers', {
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
      setCustomers(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  const makeReport = () => {
    const fileTitle = 'employees'; // or 'my-unique-title'
    const itemsFormatted = [];
    const headers = {
      card_number: 'card_id',
      cust_surname: 'last_name',
      cust_name: 'name',
      cust_patronymic: 'patronymic',
      phone_number: 'phone',
      city: 'city',
      street: 'str',
      zip_code: 'zip',
      percent: "percent",
    };

    customers.forEach((item) => {
      itemsFormatted.push({
        card_number: item.card_number,
        cust_surname: item.cust_surname,
        cust_name: item.cust_name,
        cust_patronymic: item.cust_patronymic,
        phone_number: item.phone_number,
        city: item.city,
        street: item.street,
        zip_code: item.zip_code,
        percent: item.percent,
      });
    });

    exportCSVFile(headers, itemsFormatted, fileTitle);
  }

  return (
    <div className="customers-wrapper">
      <Header/>
      <div className="header">
        <h2>Client Cards</h2>
        <button className="btn btn-secondary" onClick={makeReport}>Report</button>
        {
          localStorage.getItem("role") === "manager"
          && <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add new
          </button>
        }

        <NewCustomerModal fetchData={fetchData}
                          show={showModal} handleClose={() => setShowModal(false)}/>
      </div>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer Number</th>
          <th scope="col">Surname</th>
          <th scope="col">Name</th>
          <th scope="col">Patronymic</th>
          <th scope="col">Phone</th>
          <th scope="col">City</th>
          <th scope="col">Street</th>
          <th scope="col">Zip Code</th>
          <th scope="col">Percent</th>
          <th width="80px"></th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer,index) =>
          <Customer fetchData={fetchData} key={customer.card_number} customer={customer} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
