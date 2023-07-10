// Shopelectronics.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../../Sidebar';
import Head from 'next/head';
import styles from '../../../styles/sass/product.module.scss';
import ProductDetail from './ProductDetail';

const Shopelectronics = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?category=${category}`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedProduct();
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Electronics</title>
      </Head>

      <div className={styles.sidebar}>
        <Sidebar handleCategoryChange={handleCategoryChange} />
      </div>
      <div className={styles.content}>
        {!selectedProduct ? (
          <div>
            <h1 className={styles.title}>LATEST {category.toUpperCase()} PRODUCTS</h1>
            <div className={styles.productList}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={styles.productCard}
                  onClick={() => handleProductClick(product)}
                >
                  <div className={styles.img}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <p className={styles.productPrice}>Rs.{product.price}</p>
                    <p className={styles.discount}>Offer price {product.discountPercentage}%</p>
                  </div>
                </div>
             
             ))}
            </div>
          </div>
        ) : (
          //here we are passing clicked product details to show productDetail
          <ProductDetail
            product={selectedProduct}
            handleBack={() => setSelectedProduct()}
          />
        )}
      </div>
    </div>
  );
};

export default Shopelectronics;
