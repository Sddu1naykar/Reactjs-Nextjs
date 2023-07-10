import React from 'react';
import Link from 'next/link';
import styles from '../styles/sass/Navbar.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <FiHome size={34} />
          </a>
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/Login">
          <a className={styles.navLink}>Login</a>
        </Link>
        <Link href="/Signup">
          <a className={styles.navLink}>Signup</a>
        </Link>
        <Link href="/About">
          <a className={styles.navLink}>About</a>
        </Link>
        <Link href="/shop/Cart/CartDetail">
          <a className={styles.navLink}>
            <FiShoppingCart size={38} className={styles.cartIcon} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

