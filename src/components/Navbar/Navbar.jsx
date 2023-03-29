
// import "./Navbar.css"

import styles from "./Navbar.module.css"


export const Navbar = ( {color} ) => {

  let apellido = "perez"

  return (
    <div className={styles.containerNavbar}>
      <ul>
        <li style={{backgroundColor: color, listStyle: "none"}}>productos</li>
        <li>servicios</li>
        <li>contacto</li>
      </ul>
    </div>
  );
};
