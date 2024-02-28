import styles from './testPage.module.css';
const TestPage1 = () => {
  return (
    <div>
      <h2>TestPage1</h2>
      <div className={styles.parent}>parent
        <div className={styles.child}>
          <p>child</p>
        </div>
      </div>
    </div>
  )
}

export default TestPage1
