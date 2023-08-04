
import {createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
//import combine reducer for storing inside reduxstore
import reducer from './reducer/index'
import { createRoot } from 'react-dom/client';
const store = createStore(reducer,{});
export default store;