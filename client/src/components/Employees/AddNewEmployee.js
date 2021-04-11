import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"
const { getFetchHeaders } = require("../../helpers/webApiHelper");

export default function NewEmployeeModal ({ handleClose, show, fetchData}) {
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
  const [id, setId] = useState('');


  const saveChanges = () => {
    const obj = {
      id_employee: Math.random().toString(36).substring(10),
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

    fetch('http://localhost:3001/api/employees', {
      method: 'POST',
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
        <h2 className="mb-30">Add new Employee</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input label={'Enter Surname'} setQueryParam={setSurname}/>
            <Input setQueryParam={setName} label={'Enter Name'}/>
            <Input setQueryParam={setPatronymic} label={'Enter Patronymic'}/>
            <label>Enter Role</label>
            <select onChange={e => setRole(e.target.value)}>
              <option disabled selected>Choose role</option>
              <option>Seller</option>
              <option>Manager</option>
            </select>
            <Input type="number" setQueryParam={setSalary} label={'Enter Salary'}/></div>
          <div>
            <Input type={'date'}  setQueryParam={setBirth} label={'Enter Date Birth'}/>
            <Input type={'date'} setQueryParam={setStart} label={'Enter Date Start'}/>
            <Input setQueryParam={setPhone} label={'Enter Phone'}/>
            <Input setQueryParam={setCity} label={'Enter City'}/>
            <Input setQueryParam={setStreet} label={'Enter Street'}/>
          </div>
          <div>
            <Input setQueryParam={setZip} label={'Enter Zip Code'}/>
            <Input type="email" setQueryParam={setEmail} label={'Enter Email'}/>
            <Input type="password" setQueryParam={setPassword} label={'Enter Password'}/>
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
