import { combineReducers } from 'redux';
import { Productreducer } from './Productreducer';

const reducer = combineReducers({
  allproducts: Productreducer,
});

export default reducer;
