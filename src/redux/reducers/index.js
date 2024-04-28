import { combineReducers } from 'redux'
import { productReducer, selectedProducts } from './productReducers'
 
const rootReducer=combineReducers({
    allProducts:productReducer,
    product : selectedProducts
})


export default rootReducer