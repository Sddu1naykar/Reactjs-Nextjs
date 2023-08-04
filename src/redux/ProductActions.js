import { ActionTypes } from "./action-types"

export const setproduct = (product)=>{
   // actions are return the plain java script object
    return(
        {
         type: ActionTypes.SET_PRODUCT,
         payload:product,
        }
    )
}


export const selectedProduct = (product)=>{
    // actions are return the plain java script object
     return(
         {
          type: ActionTypes.SELECTED_PRODUCT,
          payload:product,
         }
     )
 }