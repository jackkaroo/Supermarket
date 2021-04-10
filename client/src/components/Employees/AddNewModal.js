import './Modal.css'
import Input from "../Input/Input"
import {useState} from "react"

export default function Modal ({ handleClose, show, children}) {
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
      id_employee: id,
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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });
  }

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h2 className="mb-30">Add new Employee</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input setQueryParam={setSurname} placeholder={'Enter Surname'}/>
            <Input setQueryParam={setName} placeholder={'Enter Name'}/>
            <Input setQueryParam={setPatronymic} placeholder={'Enter Patronymic'}/>
            {/*<Input setQueryParam={setRole} placeholder={'Enter Role'}/>*/}
            <select onChange={e => setRole(e.target.value)}>
              <option disabled>Choose role</option>
              <option>Seller</option>
              <option>Manager</option>
            </select>
            <Input type="number" setQueryParam={setSalary} placeholder={'Enter Salary'}/></div>
          <div>
            <Input type={'date'}  setQueryParam={setBirth} placeholder={'Enter Birth'}/>
            <Input type={'date'} setQueryParam={setStart} placeholder={'Enter Start'}/>
            <Input setQueryParam={setPhone} placeholder={'Enter Phone'}/>
            <Input setQueryParam={setCity} placeholder={'Enter City'}/>
            <Input setQueryParam={setStreet} placeholder={'Enter Street'}/>
          </div>
          <div>
            <Input setQueryParam={setZip} placeholder={'Enter Zip'}/>
            <Input type="email" setQueryParam={setEmail} placeholder={'Enter Email'}/>
            <Input type="password" setQueryParam={setPassword} placeholder={'Enter Password'}/>
            <Input setQueryParam={setId} placeholder={'Enter Id'}/>
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
