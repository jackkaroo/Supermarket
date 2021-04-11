import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    history.push('/auth');
  }

  return (
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
        <button onClick={logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}

