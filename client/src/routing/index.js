import { Route, Switch } from "react-router-dom";

import Home from "../containers/Home"
import Categories from "../components/Categories/Categories"
import Employees from "../components/Employees/Employees"
import Products from "../components/Products/Products"
import StoreProducts from "../components/StoreProducts/StoreProducts"
import Checks from "../components/Checks/Checks"
import Customers from "../components/Customers/Customers"
import Manager from "../components/Manager/Manager"
import Seller from "../components/Seller/Seller"
import Auth from "../containers/Auth"

import Header from "../components/Header";

export default function () {
  return (

      <Switch>
        <Route path="/employees">
          <Employees/>
        </Route>
        <Route path="/categories">
          <Categories/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/store_products">
          <StoreProducts/>
        </Route>
        <Route path="/checks">
          <Checks/>
        </Route>
        <Route path="/customers">
          <Customers/>
        </Route>
        <Route path="/manager">
          <Manager/>
        </Route>
        <Route path="/seller">
          <Seller/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Auth/>
        </Route>
      </Switch>

  );
}
