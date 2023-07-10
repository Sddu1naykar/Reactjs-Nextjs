import Layout from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/sass/CartDetail.module.scss';
import {message} from 'antd'
const CartDetail = () => {
  const [existingData, setExistingData] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('seletedProducts')) || [];
    setExistingData(dataFromLocalStorage);
  }, []);

  const calculateTotalPrice = () => {
    return existingData.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleCancelProduct = (product) => {
    const updatedCartItems = existingData.filter((item) => item.id !== product.id);
    setExistingData(updatedCartItems);
    localStorage.setItem('seletedProducts', JSON.stringify(updatedCartItems));
    localStorage.removeItem('product_' + product.id); // Remove the specific product from localStorage
 message.success("Item removed from cartv ")
  };

  const handleIncrementQuantity = (product) => {
    const updatedCartItems = existingData.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          // quantity: item.quantity = 0,
          quantity: item.quantity +  1,
        };
      }
      return item;
    });
    setExistingData(updatedCartItems);
    localStorage.setItem('seletedProducts', JSON.stringify(updatedCartItems));
  };

  const handleDecrementQuantity = (product) => {
    const updatedCartItems = existingData.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        return {
          ...item,
          // quantity: item.quantity = 0,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setExistingData(updatedCartItems);
    localStorage.setItem('seletedProducts', JSON.stringify(updatedCartItems));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart Detail</h1>
        {existingData.length > 0 ? (
          <>
            <>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th className = {styles.head}>Image</th>
                <th  className = {styles.head}>Product Details</th>
                <th  className = {styles.head}>Quantity</th>
                <th  className = {styles.head}>Price</th>
                <th  className = {styles.head}>Total</th>
                <th  className = {styles.head}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {existingData.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.thumbnail} alt='' className={styles.productImage} />
                  </td>
                  <td>
                    <p className={styles.productTitle}>{product.title}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productSize}>Size: {product.size}</p>
                    {/* Add any other relevant details */}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDecrementQuantity(product)}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button typeof='number'
                      onClick={() => handleIncrementQuantity(product)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </td>
                  <td>Rs.{product.price}</td>
                  <td>Rs.{product.price * product.quantity}</td>
                  <td>
                    <button onClick={() => handleCancelProduct(product)} className={styles.cancelButton}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
    
          <div className={styles.totalPrice}>Total Price: Rs. {calculateTotalPrice()}</div>
        </>
          </>
        ) : (
          <p className={styles.emptyCart}>Your Bag Is Empty. Start Filling It Up!</p>
        )}
      </div>
    </Layout>
  );
};

export default CartDetail;
