import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
   <div className='largecontainer'>
  <div className='header'>
    <h1 className='head'>LATEST PRODUCTS</h1>
 </div>
    <div className="product-container">
    
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
