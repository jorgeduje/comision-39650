import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">Aca el logo</Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
          >
            Todas
          </NavLink>
          <NavLink
            to="/category/urbanas"
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
          >
            Urbanas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.noActive
            }
            to="/category/deportivas"
          >
            Urbanas
          </NavLink>


          {/* <Button
            variant="contained"
            onClick={() => navigate("/category/deportivas")}
          >
            Deportivas
          </Button> */}
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
