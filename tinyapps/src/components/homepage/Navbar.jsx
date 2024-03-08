import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../basicsReact/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    console.log("Toggling dropdown"); // Add console.log statement
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.navbody}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/">
            <div className={styles.logo}>Tiny Apps</div>
          </Link>
          <ul className={styles.links}>
            <div className={styles.contact}>
              <Link to="/contact">Contact</Link>
            </div>
          </ul>
          <div
            className={styles.toggle_btn}
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
          >
            <i className={styles.logoBar}>
              <FontAwesomeIcon icon={faBars} />
            </i>
          </div>
        </nav>
        {isDropdownOpen && (
          <div className={styles.dropdown_menu}>
            <div className={styles.contact}>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
