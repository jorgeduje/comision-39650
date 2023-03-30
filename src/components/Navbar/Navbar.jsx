// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

// import imgLogo from "../../assets/images/imagesZapa.jpg";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        // src="logo192.png"
        // src={imgLogo}
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1680216085/imagesZapa_f496gw.jpg"
        alt="Este es el logo de la empresa"
      />
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
