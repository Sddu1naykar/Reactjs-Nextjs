import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {  addSignupDetails } from "./Signuslice";


export const  rootreducer = combineReducers({
    reducer: addSignupDetails,

} );

 const store = configureStore({
    reducer: rootreducer,
  });
  export default store;


