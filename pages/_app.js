import Layout from "../components/Layout"
import { Provider } from 'react-redux';
import Store from "./shop/Store/Store";
// import CartDetail from "./shop/Cart/CartDetail";
// import ProductDetail from './ProductDetail';

function MyApp({ Component, pageProps }) {
  console.log("store",Store)
  return (
    // <Layout>
    //   {/* <Component props={...pageProps} /> */}
    // </Layout>
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
   
  )
}

export default MyApp
// above code says ecach components individually recieved and returning in layout components for that 
// we are using this 
// all page componnets are wrappeed with layout component  