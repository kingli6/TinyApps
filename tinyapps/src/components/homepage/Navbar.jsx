import { Link } from 'react-router-dom';
import headerStyles from "../basicsReact/header.module.css"
const Navbar = () => {

  return (
    <nav className={headerStyles.headerContainer}>
      
        <Link to="/">
        <div className={headerStyles.nav}>Home</div>
        </Link>
    
        <div className={headerStyles.nav}>
          <Link to="/contact" >
            Contact
          </Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
