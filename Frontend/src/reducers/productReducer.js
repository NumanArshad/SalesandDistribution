import {Products_Action, Products_Status} from '../constants/productActions'

const initialState={
    products_status:Products_Status.SHOW,
    products:[],
    product:{}
}

export default function(state = initialState, action) {
    switch(action.type){
        case Products_Action.SHOW:            
            return {...state, products_status:Products_Status.SHOW, products:action.payload}
        case Products_Action.New:
            return {...state, products_status:Products_Status.New, product: action.payload}
        case Products_Action.UNDERUPDATE:
                return {...state,products_status:Products_Status.UNDERUPDATE,product:action.payload}
        default:
            return state;    
    }
}