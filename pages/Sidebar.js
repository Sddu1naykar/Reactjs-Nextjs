import React from 'react';
import Link from 'next/link';
import styles from '../styles/sass/Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className = {styles.sidebar}>
            <h2 className = {styles.title}>CATEGORIES</h2>
            <ul className = {styles.categoryList}>
                <li>
                    <Link href="/shop/Men/Shirts">
                        <a onClick={() => handleCategoryChange('men')}>MEN</a>
                    </Link>
                    <ul className={styles.subCategoryList}>
                        <li>
                            <Link href="/shop/Men/Shirts">
                                <a onClick={() => handleCategoryChange('shirts')}>Shirts</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Men/Pants">
                                <a onClick={() => handleCategoryChange('Pants')}>Pants</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Men/Footwear">
                                <a onClick={() => handleCategoryChange('Footwear')}>Footwear</a>
                            </Link>
                        </li>
                        {/* Add more subcategories for MEN */}
                    </ul>
                </li>
                <li>
                    <Link href="/shop/Women">
                        <a onClick={() => handleCategoryChange('women')}>WOMEN</a>
                    </Link>
                    <ul className={styles.subCategoryList}>
                        <li>
                            <Link href="/shop/Women/Dresses">
                                <a onClick={() => handleCategoryChange('women')}>Dresses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Women/Tops">
                                <a onClick={() => handleCategoryChange('women')}>Tops</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Women/Shoes">
                                <a onClick={() => handleCategoryChange('women')}>Shoes</a>
                            </Link>
                        </li>
                        {/* Add more subcategories for WOMEN */}
                    </ul>
                </li>
                <li>
                    <Link href="/shop/Kids">
                        <a onClick={() => handleCategoryChange('kids')}>KIDS</a>
                    </Link>
                    <ul className={styles.subCategoryList}>
                        <li>
                            <Link href="/shop/Kids/Boys">
                                <a onClick={() => handleCategoryChange('kids')}>Boys</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Kids/Girls">
                                <a onClick={() => handleCategoryChange('kids')}>Girls</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Kids/Shoes">
                                <a onClick={() => handleCategoryChange('kids')}>Shoes</a>
                            </Link>
                        </li>
                        {/* Add more subcategories for KIDS */}
                    </ul>
                </li>
                <li>
                    <Link href="/shop/Indie">
                        <a onClick={() => handleCategoryChange('indie')}>INDIE</a>
                    </Link>
                    <ul className={styles.subCategoryList}>
                        <li>
                            <Link href="/shop/Indie/Clothing">
                                <a onClick={() => handleCategoryChange('indie')}>Clothing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Indie/Accessories">
                                <a onClick={() => handleCategoryChange('indie')}>Accessories</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Indie/Jewelry">
                                <a onClick={() => handleCategoryChange('indie')}>Jewelry</a>
                            </Link>
                        </li>
                        {/* Add more subcategories for INDIE */}
                    </ul>
                </li>
                <li>
                    <Link href="/shop/Electronics/Shopelectronics">
                        <a >Electronics</a>
                    </Link>
                    <ul className={styles.subCategoryList}>
                        <li>
                            <Link href="/shop/Electronics/Shopelectronics">
                                <a onClick={() => handleCategoryChange('laptops')}>Laptop</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop/Electronics/Shopelectronics">
                                <a onClick={() => handleCategoryChange('smartphones')}>smartphones</a>
                            </Link>
                        </li>
                
                    </ul>
                </li>

            </ul>
        </div>


    );
};

export default Sidebar
