import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"

export default function NewProductModal ({ handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [productName, setProductName] = useState('');
  const [categoryNumber, setCategoryNumber] = useState('');
  const [characteristics, setCharacteristics] = useState('');


  const saveChanges = () => {
    const obj = {
      category_number: categoryNumber,
      product_name: productName,
      characteristics : characteristics
    }
    console.log(obj);

    fetch('http://localhost:3001/api/products', {
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
        alert('You successfully added new product.')
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
        <h2 className="mb-30">Add new Product</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input type={'number'} setQueryParam={setCategoryNumber} label={'Enter Category Number'}/>
            <Input label={'Enter Product Name'} setQueryParam={setProductName}/>
            <Input setQueryParam={setCharacteristics} label={'Enter Characteristics'}/>

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
