export default function Customer( {customer, index}) {
  const editCustomer = () => {
  }

  const deleteCustomer = () => {
    // fetch('http://localhost:3001/api/customers/' + customer.card_number, {
    //   method: 'DELETE',
    // });
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
      <td>
        <img className="icon" src="https://imgur.com/gsqALsZ.png" onClick={editCustomer} alt=""/>
        <img className="icon" src="https://imgur.com/ypHqYP0.png" onClick={deleteCustomer} alt=""/>
      </td>
    </tr>
  );
}



