import {useEffect, useState} from "react"
import StoreProduct from "./StoreProduct"
import Header from "../Header"
import NewStoreProductModal from "./AddNewStoreProduct"
import Input from "../Input/Input"
const exportCSVFile = require('../../helpers/csv');

export default function StoreProducts() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  const [productsToBuy, setProductsToBuy] = useState([]);


  const addProductToArray = (productObj) => {
    // console.log(productObj)
    const curProd = productsToBuy;
    curProd.push(productObj);
    setProductsToBuy(curProd);
    console.log(productsToBuy);
  }

  const createOrder = () => {
    fetch('http://localhost:3001/api/checks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({storeProducts: productsToBuy, card_number: cardNumber})
    })
    .then(res => {
      if(res.status === 200) {
        alert('You successfully added new check.')
        fetchData();
      }
      else {
        alert('You entered invalid information. Try again.')
      }
    })
  }

  const fetchData = async () => {
    fetch('http://localhost:3001/api/store-products', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      return response.json();

    })
    .then((data) => {
      console.log(data);
      setStoreProducts(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  const makeReport = () => {
    const fileTitle = 'employees'; // or 'my-unique-title'
    const itemsFormatted = [];
    const headers = {
      UPC: 'upc',
      UPC_prom: "upc prom",
      id_product: "prod_id",
      selling_price: "price",
      products_number: "quantity",
      promotional_product: "promotion"
    };

    storeProducts.forEach((item) => {
      itemsFormatted.push({
        UPC: item.UPC,
        UPC_prom: item.UPC_prom,
        id_product: item.id_product,
        selling_price: item.selling_price,
        products_number: item.products_number,
        promotional_product: item.promotional_product
      });
    });

    exportCSVFile(headers, itemsFormatted, fileTitle);
  }

  return (
    <div className="store-products-wrapper">
      <Header/>
      <div className="header">
        <h2>Store Products</h2>
        <button className="btn btn-secondary" onClick={makeReport}>Report</button>
        {
          localStorage.getItem("role") === "manager"
          && <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add new
          </button>
        }
        {
          localStorage.getItem("role") === "manager"
          &&
          <div className="d-flex align-items-center">
            <button className="btn btn-success"  onClick={createOrder}>
              Create Order
            </button>
            <Input setQueryParam={setCardNumber} placeholder={'Enter Card_number'}/>
          </div>
        }

        <NewStoreProductModal fetchData={fetchData}
                         show={showModal} handleClose={() => setShowModal(false)}/>
      </div>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UPC</th>
          <th scope="col">UPC prom</th>
          <th scope="col">Id Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Promotional product</th>
          <th width="80px"></th>
        </tr>
        </thead>
        <tbody>
        {storeProducts.map((product,index) =>
          <StoreProduct addProductToArray={addProductToArray}
            fetchData={fetchData} key={product.UPC} product={product} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
