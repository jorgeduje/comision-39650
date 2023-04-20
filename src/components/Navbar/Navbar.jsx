import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision 39650</Link>

        <div className={styles.categories}>
          <Link to="/">Todas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
          <Link to="/category/urbanas">Urbanas</Link>
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
