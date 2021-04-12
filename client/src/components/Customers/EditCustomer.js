import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"
const { getFetchHeaders } = require("../../helpers/webApiHelper");

export default function EditCustomerModal ({ customer, handleClose, show, fetchData}) {
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
      card_number: customer.card_number,
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

    fetch('http://localhost:3001/api/customers/' + customer.card_number, {
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
        alert('You successfully updated customer.')
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
        <h2 className="mb-30">Edit Customer</h2>
        <div className='d-flex justify-content-center '>
          <div className='d-flex justify-content-center '>
            <div>
              <Input value={customer.cust_surname} placeholder={customer.cust_surname} label={'Enter Surname'} setQueryParam={setSurname}/>
              <Input value={customer.cust_name} placeholder={customer.cust_name} setQueryParam={setName} label={'Enter Name'}/>
              <Input value={customer.cust_patronymic} placeholder={customer.cust_patronymic} setQueryParam={setPatronymic} label={'Enter Patronymic'}/>
            </div>
            <div>
              <Input value={customer.phone_number} placeholder={customer.phone_number} type={'number'} setQueryParam={setPhone} label={'Enter Phone'}/>
              <Input value={customer.city} placeholder={customer.city} setQueryParam={setCity} label={'Enter City'}/>
              <Input value={customer.street} placeholder={customer.street} setQueryParam={setStreet} label={'Enter Street'}/>
            </div>
            <div>
              <Input value={customer.zip_code} placeholder={customer.zip_code} type={'number'} setQueryParam={setZip} label={'Enter Zip Code'}/>
              <Input value={customer.percent} placeholder={customer.percent} type={'number'} setQueryParam={setPercent} label={'Enter Sale Percent'}/>
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
