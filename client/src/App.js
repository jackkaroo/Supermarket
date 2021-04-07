import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Employees from "./components/Employees/Employees"
import Categories from "./components/Categories/Categories"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"


export default function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

