
export default function StoreProduct( {product, index}) {
  const editStoreProduct = () => {
  }

  const deleteStoreProduct = () => {
    // fetch('http://localhost:3001/api/products/' + product.id_product, {
    //   method: 'DELETE',
    // });
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
      <td>
        <img className="icon" src="https://imgur.com/gsqALsZ.png" onClick={editStoreProduct} />
        <img className="icon" src="https://imgur.com/ypHqYP0.png" onClick={deleteStoreProduct}/>
      </td>
    </tr>
  );
}

