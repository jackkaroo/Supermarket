import {handleDate} from "../../helpers/handleDate"

export default function Check( {check, index}) {
  const editCheck = () => {
  }

  const deleteCheck = () => {
    // fetch('http://localhost:3001/api/checks/' + check.check_number, {
    //   method: 'DELETE',
    // });
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
      <td>
        <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={editCheck} />
        <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteCheck}/>
      </td>
    </tr>
  );
}


