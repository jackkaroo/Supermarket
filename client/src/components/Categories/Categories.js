import {useEffect, useState} from "react"
import Category from "./Category"
import CategoryHeader from "./CategoryHeader"
import Header from "../Header"
import NewEmployeeModal from "../Employees/AddNewEmployee"

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    fetch('http://localhost:3001/api/categories', {
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
      setCategories(data);
    });
  };

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="categories-wrapper">
      <Header/>
      <div className="header">
        <h2>Categories</h2>
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
        <CategoryHeader/>
        <tbody>
        {categories.map((category,index) => <Category key={index} category={category} index={index}/>)}
        </tbody>
      </table>
    </div>
  );
}
