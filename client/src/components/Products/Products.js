import {useEffect, useState} from "react"
import Product from "./Product"
import ProductHeader from "./ProductHeader"
import Header from "../Header"

export default function Products() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    fetch('http://localhost:3001/api/products', {
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
      setProducts(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="products-wrapper">
      <Header/>
      <div className="header">
        <h2>Products</h2>
        <button className="btn btn-primary">Add new</button>
      </div>
      <table className="table table-hover table-bordered">
        <ProductHeader/>
        <tbody>
        {products.map((product,index) => <Product key={product.id_product} product={product} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
