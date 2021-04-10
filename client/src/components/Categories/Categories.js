import {useEffect, useState} from "react"
import Category from "./Category"
import CategoryHeader from "./CategoryHeader"

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    fetch('http://localhost:3001/api/categories')
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
      <div className="header">
        <h2>Categories</h2>
        <button className="btn btn-primary">Add new</button>
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