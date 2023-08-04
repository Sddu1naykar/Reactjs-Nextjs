import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setproduct } from '../redux/ProductActions';
import store from '../redux/Store';
import axios from 'axios';
const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
const fetchProducts= async()=>{

    const response = await axios.get("https://fakestoreapi.com/products").catch((error)=>{
        console.log("err",error)
    });
console.log("hi")
    dispatch(setproduct(response.data));
}
useEffect(()=>{
    fetchProducts();
},[])
    console.log("products",products);

    return (
        <div>
            <h1>ProductListing</h1>
        </div>
    )

}
export default ProductListing