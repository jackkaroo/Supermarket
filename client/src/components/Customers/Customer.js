import {useState} from "react"
import EditCustomerModal from "./EditCustomer"

export default function Customer( {customer, index, fetchData}) {
  const [showModal, setShowModal] = useState(false);

  const deleteCustomer = () => {
    fetch('http://localhost:3001/api/customers/' + customer.card_number, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(res => {
      if(res.status === 200) fetchData()
      else {
        alert('You can not delete customer because of database integrity.')
      }
    })
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{customer.card_number}</td>
      <td>{customer.cust_surname}</td>
      <td>{customer.cust_name}</td>
      <td>{customer.cust_patronymic}</td>
      <td>{customer.phone_number}</td>
      <td>{customer.city}</td>
      <td>{customer.street}</td>
      <td>{customer.zip_code}</td>
      <td>{customer.percent}</td>
      {
        localStorage.getItem("role") === "seller"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={() => setShowModal(true)}/>
          <EditCustomerModal customer={customer} fetchData={fetchData}
                             show={showModal} handleClose={() => setShowModal(false)}/>
        </td>
      }
      {
        localStorage.getItem("role") === "manager"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={() => setShowModal(true)}/>
          <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteCustomer}/>
          <EditCustomerModal customer={customer} fetchData={fetchData}
                             show={showModal} handleClose={() => setShowModal(false)}/>
        </td>
      }
    </tr>
  );
}



