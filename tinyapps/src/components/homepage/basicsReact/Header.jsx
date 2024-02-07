import headerStyles from "./header.module.css";
import CartContext from "./services/CartContext";
import { useContext } from "react";

const Header = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>Home?</div>
        <div className={headerStyles.nav}>
            <div className={headerStyles.navItem}>ItemB</div>
            <div className={headerStyles.navItem}>ItemC</div>
        </div>
        <div className={headerStyles.cart}>
            <img src={""} alt="" />
            <span>Cart</span>
            <span>{cartItems.length}</span>
        </div>
        <div className={headerStyles.login}>Login</div>
    </div>
  )
}

export default Header
