import {handleDate} from "../../helpers/handleDate"

export default function Check( {check, index, fetchData}) {
  const editCheck = () => {
  }

  const deleteChecks = () => {
    fetch('http://localhost:3001/api/checks/' + check.check_number, {
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
        alert('You can not delete checks because of database integrity.')
      }
    })
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{check.check_number}</td>
      <td>{check.id_employee}</td>
      <td>{check.card_number}</td>
      <td>{handleDate(check.print_date)}</td>
      <td>{check.sum_total}</td>
      <td>{check.vat}</td>
      {
        localStorage.getItem("role") === "manager"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteChecks}/>
        </td>
      }
    </tr>
  );
}


