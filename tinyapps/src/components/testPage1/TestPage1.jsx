import styles from './testPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const TestPage1 = () => {
  return (
    <div className={styles.body}>
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}><a href='#'>Tiny Apps</a></div>
        <ul className={styles.links}>
          <li><a href="hero">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <a href="" className={styles.action_btn}>Get Started</a>
        <div className={styles.toggle_btn}>
          <i className={styles.logos}><FontAwesomeIcon icon={faBars} /></i>
        </div>
      </nav>
    </header>
    <positioning>
      <div className={styles.parent}>
        <p>A line of text</p>
        <div className={styles.child}></div>
        <p>More text</p>
      </div>
    </positioning>
      
      <footer>

      </footer>
    </div>
  )
}

export default TestPage1
