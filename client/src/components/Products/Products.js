import {useEffect, useState} from "react"
import Product from "./Product"
import ProductHeader from "./ProductHeader"
import Header from "../Header"
import NewEmployeeModal from "../Employees/AddNewEmployee"
const exportCSVFile = require('../../helpers/csv');

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const makeReport = () => {
    const fileTitle = 'employees'; // or 'my-unique-title'
    const itemsFormatted = [];
    const headers = {
      id_product: "id",
      category_number: "category_id",
      product_name: 'name',
      characteristics: 'characteristics'
    };

    products.forEach((item) => {
      itemsFormatted.push({
        id_product: item.id_product,
        category_number: item.category_number,
        product_name: item.product_name,
        characteristics: item.characteristics
      });
    });

    exportCSVFile(headers, itemsFormatted, fileTitle);
  }

  return (
    <div className="products-wrapper">
      <Header/>
      <div className="header">
        <h2>Products</h2>
        <button onClick={makeReport}>Report</button>
        {
          localStorage.getItem("role") === "manager"
          && <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add new
          </button>
        }

        <NewEmployeeModal show={showModal} handleClose={() => setShowModal(false)}>
        </NewEmployeeModal>
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
