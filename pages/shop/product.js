import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import Head from 'next/head';
import styles from '../../styles/sass/product.module.scss';
import Navbar from '../../components/Navbar';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      console.log(data); // Log the data to check its structure
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      // Handle the error state or display an error message
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className = {styles.content}>
        <h1 className={styles.title}>LATEST - PRODUCTS</h1>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.img}>
                <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
              </div>

              <div className={styles.productInfo}>
                <h4 className={styles.productTitle}>{product.title}</h4>
                <p className={styles.productPrice}>Rs.{product.price}</p>
                <p className={styles.Discount}>offer price {product.discountPercentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
