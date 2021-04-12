import {useState} from "react"
import EditStoreProductModal from "./EditStoreProduct"

export default function StoreProduct( {product, index, fetchData}) {
  const [showModal, setShowModal] = useState(false);

  const deleteProduct = () => {
    fetch('http://localhost:3001/api/store-products/' + product.UPC, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(res => {
      if(res.status === 200) fetchData()
      else {
        alert('You can not delete store product because of database integrity.')
      }
    })
  }


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.UPC}</td>
      <td>{product.UPC_prom}</td>
      <td>{product.id_product}</td>
      <td>{Math.round(product.selling_price)}</td>
      <td>{product.products_number}</td>
      <td>{product.promotional_product}</td>
      {
        localStorage.getItem("role") === "manager"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={() => setShowModal(true)}/>
          <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteProduct}/>
          <EditStoreProductModal product={product} fetchData={fetchData}
                            show={showModal} handleClose={() => setShowModal(false)}/>
        </td>
      }
    </tr>
  );
}

