import  styles from './containers/App.scss';
// import styles from './'
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductcDetails from './containers/ProductDetails';
import Productcomponent from './containers/Productccomponent';

function App() {
  return (
    <div className={styles.code}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductcDetails} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
      <ProductListing/>
      <Productcomponent/>
    </div>
  );
}

export default App;
