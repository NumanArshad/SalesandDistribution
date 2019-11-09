import {Inventory_Action, Inventory_Status} from '../constants/inventoryConstants';

const initialState = {
    inventory_status: Inventory_Status.SHOW,
    inventory: {},
    inventories: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case Inventory_Action.SHOW:
            return {...state, inventory_status: Inventory_Status.SHOW, inventories: action.payload} 
        case Inventory_Action.New:
            return {...state, inventory_status:Inventory_Status.New, inventory: action.payload}
        case Inventory_Action.UNDERUPDATE:
            return {...state,inventory_status:Inventory_Status.UNDERUPDATE,inventory: action.payload}
        default:
            return state;
    }

}