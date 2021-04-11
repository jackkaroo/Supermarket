import {useEffect, useState} from "react"
import Customer from "./Customer"
import Header from "../Header"

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const fetchData = async () => {
    fetch('http://localhost:3001/api/customers')
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

  return (
    <div className="customers-wrapper">
      <Header/>
      <div className="header">
        <h2>Client Cards</h2>
        <button className="btn btn-primary">Add new</button>
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
        {customers.map((customer,index) => <Customer key={customer.card_number} customer={customer} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}