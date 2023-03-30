
// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"


export const Navbar = ( {color} ) => {

  let apellido = "perez"

  return (
    <div className={styles.containerNavbar}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZZ9eo2ymoyiRm1GpEz4JJYTBUUR6nirMJw&usqp=CAU" alt="" />
      <ul style={{display: "flex", gap: "30px"}}>
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
