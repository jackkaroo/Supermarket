
export default function Category( {category, index}) {

  const editCategory = () => {
  }

  const deleteCategory = () => {
    // fetch('http://localhost:3001/api/categories/' + category.id_category, {
    //   method: 'DELETE',
    // });
  }


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.category_number}</td>
      <td>{category.category_name}</td>
      <td>
        <img className="icon" alt="" src="https://imgur.com/gsqALsZ.png" onClick={editCategory} />
        <img className="icon" alt="" src="https://imgur.com/ypHqYP0.png" onClick={deleteCategory}/>
      </td>
    </tr>
  );
}

