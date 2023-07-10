import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import styles from '../../../styles/sass/productDetail.module.scss';
import { addToCart } from '../Store/CartSlice';
import Navbar from '../../../components/Navbar';
import { useDispatch } from 'react-redux';

// product is props from electronics selected product sending to product Detail
//  handle back is the function
const ProductDetail = ({ product, handleBack, }) => {
  const dispatch = useDispatch();
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [cartitems, SetcartItems] = useState([]);

  const handleAddToCart = () => {
    if (selectedSize) {
      // complete detail of selected product storing ion separate object
      const selectedProduct = {
        brand: product.brand,
        category: product.category,
        description: product.description,
        discountPercentage: product.discountPercentage,
        id: product.id,
        images: product.images,
        price: product.price,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
        title: product.title,
      }

      dispatch(addToCart(selectedProduct));
      setIsAddedToBag(true);
      message.success('Product added successfully!');
      SetcartItems(selectedProduct);
      // Retrieve existing data from local storage or initialize with an empty array

      const existingData = JSON.parse(localStorage.getItem('seletedProducts')) || [];

      console.log("existing data=", existingData)

      const updatedData = [...existingData, selectedProduct];

      // Save the updated array back to local storage
      localStorage.setItem('seletedProducts', JSON.stringify(updatedData));



    } else {
      message.error('Please select a size');
    }
  };

  const handleBackButton = () => {
    if (isAddedToBag) {
      setShowConfirmation(true);

    } else {
      handleBack();
    }
  };

  const handleConfirmBack = () => {
    setShowConfirmation(false);
    handleBack();
  };



  // ===================================================================
  // ===================================================================


  return (
    <div className={styles.pagecontainer}>
      <Navbar />
      <div className={styles.layout}>
        {isAddedToBag && (
          <div style={{ color: 'green' }} className={styles.successMessage} >

          </div>
        )}

        <div className={styles.productCard}>

          <div className={styles.imageContainer}>

            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.sizeChart}>
              <p className={styles.sizeChartText}>Select Size</p>

              <p className={styles.sizeChartText}>Check Size Chart</p>
              <div className={styles.sizeOptions}>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="S"
                    checked={selectedSize === 'S'}
                    onChange={() => setSelectedSize('S')}
                  />
                  S
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="M"
                    checked={selectedSize === 'M'}
                    onChange={() => setSelectedSize('M')}
                  />
                  M
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="L"
                    checked={selectedSize === 'L'}
                    onChange={() => setSelectedSize('L')}
                  />
                  L
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    checked={selectedSize === 'XL'}
                    onChange={() => setSelectedSize('XL')}
                  />
                  XL
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="XXL"
                    checked={selectedSize === 'XXL'}
                    onChange={() => setSelectedSize('XXL')}
                  />
                  XXL
                </label>
              </div>
              <p className={styles.deliveryDate}>
                Select your size to know your estimated delivery date.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.jompers}>JOMPERS</div>
          <h4 className={styles.productTitle}>{product.title}</h4>
          <p className={styles.productPrice}>₹{product.price}</p>
          <p className={styles.discount}>
            MRP₹{product.mrp} ({product.discountPercentage}% OFF)
          </p>
          <p className={styles.taxInfo}>Price inclusive of all taxes</p>
          <p className={styles.offerText}>Use Code MARK</p>
          <p className={styles.tnc}>T&amp;C</p>
          <p className={styles.finalPrice}>
            Get it for ₹{product.finalPrice}
          </p>
          <p className={styles.extraDiscount}>
            Extra Upto 25% Off on ₹2589 and Above. Max Discount Rs.1000.{' '}
            <a href="#">View Products</a>
          </p>
          <p className={styles.moreCount}>+10 More</p>

          <div className={styles.actions}>
            <button onClick={handleAddToCart} className={styles.button}>
              ADD TO BAG

            </button>
          </div>

          <div className={styles.backButton}>
            <button onClick={handleBackButton} className={styles.button}>
              Back
            </button>
          </div>
        </div>
        {showConfirmation && (
          <div className={styles.confirmationMessage}>
            <p>
              Are you sure you want to go back? The product has been added to
              your bag.
            </p>
            <div className={styles.confirmationButtons}>
              <button
                onClick={handleConfirmBack}
                className={styles.confirmButton}
                style={{ color: 'limegreen' }}
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className={styles.cancelButton}
                style={{ color: 'red' }}
              >
                No
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;