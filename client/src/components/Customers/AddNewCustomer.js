import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"

export default function NewCustomerModal ({ handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [percent, setPercent] = useState('');


  const saveChanges = () => {
    const obj = {
      card_number: Math.random().toString(36).substring(10),
      cust_surname: surname,
      cust_name: name,
      cust_patronymic: patronymic,
      phone_number: phone,
      city: city,
      street: street,
      zip_code: zip,
      percent: percent,
    }
    console.log(obj);

    fetch('http://localhost:3001/api/customers', {
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
        alert('You successfully added new customer.')
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
        <h2 className="mb-30">Add new Customer</h2>
        <div className='d-flex justify-content-center '>
          <div className='d-flex justify-content-center '>
            <div>
              <Input label={'Enter Surname'} setQueryParam={setSurname}/>
              <Input setQueryParam={setName} label={'Enter Name'}/>
              <Input setQueryParam={setPatronymic} label={'Enter Patronymic'}/>
            </div>
            <div>
              <Input type={'number'} setQueryParam={setPhone} label={'Enter Phone'}/>
              <Input setQueryParam={setCity} label={'Enter City'}/>
              <Input setQueryParam={setStreet} label={'Enter Street'}/>
            </div>
            <div>
              <Input type={'number'} setQueryParam={setZip} label={'Enter Zip Code'}/>
              <Input type={'number'} setQueryParam={setPercent} label={'Enter Sale Percent'}/>
              <div className="">
                <button className="btn btn-success" onClick={saveChanges}>Save</button>
                <button className="btn btn-danger" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
