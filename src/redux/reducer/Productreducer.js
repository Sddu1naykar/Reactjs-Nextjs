//Note: reducer always takes the initial state and action 
import { ActionTypes } from "../action-types";
const initialState = {
  product: [],
};

export const Productreducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ActionTypes.SET_PRODUCT:
          return {...state,product:payload};
      default:
          return state;
  }
};
