import {handleDate} from "../../helpers/handleDate"

export default function Employee( {employee, index, fetchData}) {

  const editEmployee = () => {

  }

  const deleteEmployee = () => {
    fetch('http://localhost:3001/api/employees/' + employee.id_employee, {
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
        alert('You can not delete employee because of database integrity. ' +
          'Delete checks before.')
      }
    })
  }

  return (
    <tr>
      <td>{index+1}</td>
      <td>{employee.id_employee}</td>
      <td>{employee.empl_surname}</td>
      <td>{employee.empl_name}</td>
      <td>{employee.empl_patronymic}</td>
      <td>{employee.role}</td>
      <td>{Math.round(employee.salary)}</td>
      <td>{handleDate(employee.date_of_birth)}</td>
      <td>{handleDate(employee.date_of_start)}</td>
      <td>{employee.phone_number}</td>
      <td>{employee.city}</td>
      <td>{employee.street}</td>
      <td>{employee.zip_code}</td>
      {
        localStorage.getItem("role") === "manager"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={editEmployee} />
          <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteEmployee}/>
        </td>
      }
    </tr>
  );
}

