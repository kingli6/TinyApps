import { Link } from 'react-router-dom';
import styles from "../basicsReact/header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

  return (
  <div className={styles.navbody}>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
        <div className={styles.logo}>Tiny Apps</div>
        </Link>
        <ul className={styles.links}>
          <div className={styles.contact}>
            <Link to="/contact" >Contact</Link>
          </div>
        </ul>
        <div className={styles.toggle_btn}>
          <i className={styles.logoBar}><FontAwesomeIcon icon={faBars} /></i>
        </div>
      </nav>
      {/* // adding two css classes ={`${styles.dropdown_menu} open`}*/}
      <div className={styles.dropdown_menu}>
        <div className={styles.contact}>
          <Link to="/contact" >
            Contact
          </Link>
        </div>
      </div>
    </header>
    {/* <sript>
      const toggleBtn = document.querySelector('.toggle_btn')
      const toggleBtnIcon = document.querySelector('.toggle_btn div')
      const dropdownMenu = document.querySelector('.dropdown_menu')

      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
      }
    </sript> */}
  </div>
  );
};

export default Navbar;
