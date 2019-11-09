import { combineReducers } from 'redux';
import packages_Reducer from './packages'
import users_Reducer from './users'
import payment_Reducer from './payment'
import signIn_Reducer from './signIn'
import signUp_Reducer from './signUp'
import product_Reducer from './productReducer';
import inventory_Reducer from './inventoryReducer';

const rootReducer= combineReducers({
    packages_Reducer,
    users_Reducer,
    payment_Reducer,
    signIn_Reducer,
    signUp_Reducer,
    product_Reducer,
    inventory_Reducer
});
export default rootReducer
