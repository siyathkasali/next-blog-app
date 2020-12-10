import React from 'react';
import styles from './Loader.module.scss'

const Loader = props => {
  return (
    <div className={styles.divCenter}>
      <div className={styles.loading}>
        <div className={`${styles.dots} ${styles.dot1}`}></div>
        <div className={`${styles.dots} ${styles.dot2}`}></div>
        <div className={`${styles.dots} ${styles.dot3}`}></div>
        <div className={`${styles.dots} ${styles.dot4}`}></div>
        <div className={`${styles.dots} ${styles.dot5}`}></div>
        <div className={`${styles.dots} ${styles.dot6}`}></div>
      </div>
    </div>
  )
}


export default Loader;
