import React, {Component} from 'react';
import {Inventory_Action, Inventory_Status} from '../../../constants/inventoryConstants';
import AddInventory from './addInventory';
import ShowInventory from './showInventory';
import { connect } from 'react-redux';
import DashboardDis from '../dashboard/dashboard';
import {fetchInventories, PostInventory, updateInventory, fetchInventorybyId, deleteInventory} from '../../../actions/inventoryActions';


// Map state to props

const mapStateToProps = state => ({
    inventories: state.inventory_Reducer.inventories,
    inventory: state.inventory_Reducer.inventory,
    inventory_status: state.inventory_Reducer.inventory_status

})
// Map Dispatch to Props

const mapDispatchToProps = dispatch => {
    return {
        fetchInventories: ()=> {dispatch(fetchInventories())},
        PostInventory: (TotalPacket_Cartoon, Price)=>
        {dispatch(PostInventory(TotalPacket_Cartoon, Price))},
        AddInventory:()=>{dispatch({type:Inventory_Action.NEW})},
        fetchInventorybyId:(inventoryId)=>{dispatch(fetchInventorybyId(inventoryId))},
        deleteInventory:(inventoryId)=>{dispatch(deleteInventory(inventoryId))},
        updateInventory: (inventoryId, TotalPacket_Cartoon, Price)=>
        {dispatch(updateInventory(inventoryId, TotalPacket_Cartoon, Price))},
    }
}


class InventoryView extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // if(this.props.products_status === 'LOAD_SHOW' || this.props.products_status === 'SHOW_Products') {
        //     this.props.fetchProducts();
        // }
    }

    getScreen(status) {
        switch(status) {
            case Inventory_Status.SHOW:
                // alert(this.props.products)
                return <ShowInventory inventorylist = {this.props.inventories} addInventory={this.props.AddInventory}/>
            case Inventory_Status.NEW:
                return <AddInventory fetchInventories={this.props.fetchInventories} PostInventory={this.props.PostInventory}/>
            case Inventory_Status.UNDERUPDATE:
                return <AddInventory prod={this.props.inventories} 
                updateInventory={this.props.updateInventory}
                fetchInventories={this.props.fetchInventories} PostInventory={this.props.PostInventory}
                />
            default:

        }
    }

    render() {
        return (<DashboardDis getScreen = {this.getScreen(this.props.inventory_status)} />)
            
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryView)











