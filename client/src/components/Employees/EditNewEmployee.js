import {handleDate} from "../../helpers/handleDate"
import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"
const { getFetchHeaders } = require("../../helpers/webApiHelper");


export default function EditEmployeeModal ({ employee, handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');
  const [birth, setBirth] = useState('');
  const [start, setStart] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const saveChanges = () => {
    const obj = {
      id_employee: employee.id_employee,
      email: email,
      password: password,
      empl_surname: surname,
      empl_name: name,
      empl_patronymic: patronymic ,
      role: role,
      salary: salary,
      date_of_birth: birth ,
      date_of_start: start,
      phone_number: phone,
      city: city,
      street: street,
      zip_code: zip
    }
    console.log(obj);

    fetch('http://localhost:3001/api/employees/' + employee.id_employee , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(obj)
    })
    .then(res => {
      if(res.status === 200) {
        alert('You successfully added new employee.')
        fetchData();
        handleClose();
      }
      else {
        alert('You entered invalid information. Try again.')
      }
    })
  }

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h2 className="mb-30">Edit Employee</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input value={employee.empl_surname} setQueryParam={setSurname} placeholder={employee.empl_surname} label={'Enter Surname'}/>
            <Input value={employee.empl_name} setQueryParam={setName} placeholder={employee.empl_name} label={'Enter Name'}/>
            <Input value={employee.empl_patronymic} setQueryParam={setPatronymic} placeholder={employee.empl_patronymic} label={'Enter Patronymic'}/>
            {/*<Input setQueryParam={setRole} placeholder={'Enter Role'}/>*/}
            <label>Enter Role</label>
            <select onChange={e => setRole(e.target.value)}>
              <option disabled selected>Choose role</option>
              <option>Seller</option>
              <option>Manager</option>
            </select>
            <Input value={Math.round(employee.salary)} type="number" setQueryParam={setSalary} placeholder={Math.round(employee.salary)} label={'Enter Salary'}/></div>
          <div>
            {/*<input type="date" value={(employee.date_of_birth)}/>*/}
            <Input type={'date'} value={(employee.date_of_birth)}  setQueryParam={setBirth} label={'Enter Date Birth'}/>
            <Input type={'date'} value={(employee.date_of_start)} setQueryParam={setStart} label={'Enter Date Start'}/>
            <Input value={employee.phone_number} setQueryParam={setPhone} placeholder={employee.phone_number} label={'Enter phone'}/>
            <Input value={employee.city} setQueryParam={setCity} placeholder={employee.city} label={'Enter city'}/>
            <Input value={employee.street} setQueryParam={setStreet} placeholder={employee.street} label={'Enter street'}/>
          </div>
          <div>
            <Input value={employee.zip_code} setQueryParam={setZip} placeholder={employee.zip_code} label={'Enter zip code'}/>
            <Input value={employee.email} type="email" setQueryParam={setEmail} placeholder={employee.email} label={'Enter email'}/>
            <Input value={employee.password} type="password" setQueryParam={setPassword} label={'Enter Password'} placeholder={employee.password}/>
            <div className="">
              <button className="btn btn-success" onClick={saveChanges}>Save</button>
              <button className="btn btn-danger" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
