
import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
 import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer ,productCreateReducer,productUpdateReducer,productDeleteReducer} from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'
import { userDetailsReducer, userLoginReducer,userRegisterReducer,userListReducer } from './reducer/userReducer'



  const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,
      userDetails: userDetailsReducer,
      userList: userListReducer,
      productCreate: productCreateReducer,
      productUpdate: productUpdateReducer,
      productDelete: productDeleteReducer})
      
const cartItems_from_storage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')) : []


  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {

  cart: {
    cartItems: cartItems_from_storage,
    userLogin:{userInfo: userInfoFromStorage}
  }
    
}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store


