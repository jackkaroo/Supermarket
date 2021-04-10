import './Header.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Home from "../Home/Home"
import Categories from "../Categories/Categories"
import Employees from "../Employees/Employees"
import Products from "../Products/Products"
import StoreProducts from "../StoreProducts/StoreProducts"
import Checks from "../Checks/Checks"
import Customers from "../Customers/Customers"
import Manager from "../Manager/Manager"
import Seller from "../Seller/Seller"

export default function Header() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employees</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/store_products">Store Products</Link>
              </li>
              <li>
                <Link to="/checks">Checks</Link>
              </li>
              <li>
                <Link to="/customers">Client Cards</Link>
              </li>
              <li>
                <Link to="/manager">Manager</Link>
              </li>
              <li>
                <Link to="/seller">Seller</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/store_products">
              <StoreProducts />
            </Route>
            <Route path="/checks">
              <Checks />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/manager">
              <Manager />
            </Route>
            <Route path="/seller">
              <Seller />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

