import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.jsx';
import cartReducer from './cart/cart.jsx';
import directoryReducer from './directory/directory.jsx';
import shopReducer from './shop/shop.jsx';
import homepageReducer from './homepage/homepage.jsx';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    homepage: homepageReducer
});

export default persistReducer(persistConfig, rootReducer)