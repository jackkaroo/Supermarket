import '../../styles/Modal.css'
import Input from "../Input/Input"
import {useState} from "react"

export default function EditStoreProductModal ({ product, handleClose, show, fetchData}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productsNumber, setProductsNumber] = useState('');
  const [promotionalProduct, setPromotionalProduct] = useState('');


  const saveChanges = () => {

    const totalPrice = handlePrice(sellingPrice, promotionalProduct);
    console.log('total price', totalPrice);

    let promotionalBool = 0;
    if(promotionalProduct === "Yes") promotionalBool = 1;
    console.log('prombool', promotionalBool);

    const obj = {
      UPC:product.UPC ,
      UPC_prom: null,
      id_product: productId,
      selling_price: totalPrice,
      products_number: productsNumber,
      promotional_product : promotionalBool
    }
    console.log(obj);

    fetch('http://localhost:3001/api/store-products/' + product.UPC, {
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
        alert('You successfully updated store product.')
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
            <Input value={product.id_product} placeholder={product.id_product} type={'number'} label={'Enter Product Id'} setQueryParam={setProductId}/>
            <Input value={product.selling_price} placeholder={product.selling_price} type={'number'} setQueryParam={setSellingPrice} label={'Enter Purchasing Price'}/>
            <Input value={product.products_number} placeholder={product.products_number} type={'number'} label={'Enter Products Number'} setQueryParam={setProductsNumber}/>
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

  const newPrice = parseInt(price)
  if(prom == 1) {
    let num = price + price * 0.2 + 0.2 * (price + price * 0.2);
    return Math.round(num);
  }
  else {
    let num = newPrice + newPrice * 0.3 + 0.2 * (newPrice + newPrice * 0.3);
    return Math.round(num * 100 / 100);
  }
}