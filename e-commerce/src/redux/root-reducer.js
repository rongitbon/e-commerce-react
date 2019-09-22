import { combineReducers } from 'redux';

import userReducer from './user/user.jsx';
import cartReducer from './cart/cart.jsx';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});