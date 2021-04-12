import {useState} from "react"
import EditProductModal from "./EditProduct"

export default function Product( {product, index, fetchData}) {

  const [showModal, setShowModal] = useState(false);

  const deleteProduct = () => {
    fetch('http://localhost:3001/api/products/' + product.id_product, {
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
        alert('You can not delete product because of database integrity. ' +
          'Delete store product before.')
      }
    })
  }


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id_product}</td>
      <td>{product.category_number}</td>
      <td>{product.product_name}</td>
      <td>{product.characteristics}</td>
      {
        localStorage.getItem("role") === "manager"
        &&
        <td>
          <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={() => setShowModal(true)}/>
          <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteProduct}/>
          <EditProductModal product={product} fetchData={fetchData}
                             show={showModal} handleClose={() => setShowModal(false)}/>
        </td>
      }
    </tr>
  );
}

