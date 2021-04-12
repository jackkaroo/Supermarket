import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"

export default function NewStoreProductModal ({ handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productsNumber, setProductsNumber] = useState('');
  const [promotionalProduct, setPromotionalProduct] = useState('');


  const saveChanges = () => {

    const totalPrice = handlePrice(sellingPrice, promotionalProduct);
    console.log(totalPrice);

    let promotionalBool = false;
    if(promotionalProduct === "Yes") promotionalBool = true;
    console.log(promotionalBool);

    const obj = {
      UPC: Math.random().toString(36).substring(12) ,
      UPC_prom: Math.random().toString(36).substring(12),
      id_product: productId,
      selling_price: totalPrice,
      products_number: productsNumber,
      promotional_product : promotionalBool
    }
    console.log(obj);

    fetch('http://localhost:3001/api/store-products', {
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
        alert('You successfully added new store product.')
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
        <h2 className="mb-30">Add new Store Product</h2>
        <div className='d-flex justify-content-center '>
          <div>
            <Input type={'number'} label={'Enter Product Id'} setQueryParam={setProductId}/>
            <Input type={'number'} setQueryParam={setSellingPrice} label={'Enter Purchasing Price'}/>
            <Input type={'number'} label={'Enter Products Number'} setQueryParam={setProductsNumber}/>
            <label>Is Promotional Product?</label>
            <select onChange={e => setPromotionalProduct(e.target.value)}>
              <option disabled selected>Choose</option>
              <option>Yes</option>
              <option>No</option>
            </select>

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

function handlePrice(price, prom) {
  if(prom)
    return price + price * 0.2 + 0.2 * (price + price * 0.2);
  else
    return price + price * 0.3 + 0.2 * (price + price * 0.3);
}