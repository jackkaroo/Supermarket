
export default function Product( {product, index}) {
  const editProduct = () => {
  }

  const deleteProduct = () => {
    // fetch('http://localhost:3001/api/products/' + product.id_product, {
    //   method: 'DELETE',
    // });
  }


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id_product}</td>
      <td>{product.category_number}</td>
      <td>{product.product_name}</td>
      <td>{product.characteristics}</td>
      <td>
        <img className="icon" src="https://imgur.com/gsqALsZ.png" onClick={editProduct} />
        <img className="icon" src="https://imgur.com/ypHqYP0.png" onClick={deleteProduct}/>
      </td>
    </tr>
  );
}

