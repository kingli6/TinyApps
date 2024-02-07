import headerStyles from "./header.module.css";
const Header = () => {
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
        </div>
        <div className={headerStyles.login}>Login</div>
    </div>
  )
}

export default Header
