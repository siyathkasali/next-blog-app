import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.scss';

const Navbar = props => {
  return (
    <div className={styles.navbar}>
      <Link href={{pathname: '/'}}><h1 className={styles.navbarText}>Next Blog App</h1></Link>
    </div>
  )
}

export default Navbar;
