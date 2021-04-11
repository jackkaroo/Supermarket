import {useEffect, useState} from "react"
import StoreProduct from "./StoreProduct"
import Header from "../Header"

export default function StoreProducts() {
  const [storeProducts, setStoreProducts] = useState([]);
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

  return (
    <div className="store-products-wrapper">
      <Header/>
      <div className="header">
        <h2>Store Products</h2>
        <button className="btn btn-primary">Add new</button>
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
        {storeProducts.map((product,index) => <StoreProduct key={product.UPC} product={product} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
