import {useState} from "react"
import '../../../styles/Queries.css'
import ButtonShow from "../../Button/ButtonShow"
import Input from "../../Input/Input"
import {handleDate} from "../../../helpers/handleDate"
import ButtonReload from "../../Button/ButtonReload"

export default function EleventhQuery( {path} ) {

  const [items, setItems] = useState([]);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [queryParam, setQueryParam] = useState('');

  return (
    <div className="query-item">
      <div className="d-flex justify-content-between mb-30 align-items-center">
        <div>
          <h3>Запит 11</h3>
          <h5>За ID_працівника знайти всю інформацію про себе.</h5>
        </div>
        <div className="d-flex align-items-center">
          <Input setQueryParam={setQueryParam} placeholder={'Enter Id Employee'}/>
          <ButtonReload setItems={setItems} path={path + '/' + queryParam}/>
          <ButtonShow setItems={setItems} setClickedCheck={setClickedCheck} path={path + '/' + queryParam}/>
        </div>
      </div>
      <div className={(clickedCheck)? 'header-show' : 'header-hide'}>
        <table className="table table-hover table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Surname</th>
            <th scope="col">Name</th>
            <th scope="col">Patronymic</th>
            <th scope="col">Role</th>
            <th scope="col">Salary</th>
            <th scope="col">Date birth</th>
            <th scope="col">Date start</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Street</th>
            <th scope="col">Zip code</th>
          </tr>
          </thead>
          <tbody>
          {items.map((employee,index) =>
            <tr key={employee.id_employee}>
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
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}





