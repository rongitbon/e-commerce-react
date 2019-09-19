import { combineReducers } from 'redux';

import userReducer from './user/user.jsx';

export default combineReducers({
    user: userReducer
});