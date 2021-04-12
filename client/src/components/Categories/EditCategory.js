import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"
const { getFetchHeaders } = require("../../helpers/webApiHelper");

export default function EditCategoryModal ({ category, handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [name, setName] = useState('');


  const saveChanges = () => {
    const obj = {
      category_name: name,
    }
    console.log(obj);

    fetch('http://localhost:3001/api/categories/' + category.category_number, {
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
        alert('You successfully updated category.')
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
        <h2 className="mb-30">Edit Category</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input value={category.category_name} placeholder={category.category_name} setQueryParam={setName} label={'Enter Category Name'}/>

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
