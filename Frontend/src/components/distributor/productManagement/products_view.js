import React, {Component} from 'react';
import {Products_Action, Products_Status} from '../../../constants/productActions';
import ShowProduct from './showProducts';
import AddProduct from './addProduct';
import { connect } from 'react-redux';
import DashboardDis from '../dashboard/dashboard';
import {fetchProducts, PostProduct, updateProduct, fetchProductbyId, deleteProduct} from '../../../actions/productActions';


// Map state to props

const mapStateToProps = state => ({
    products: state.product_Reducer.products,
    product: state.product_Reducer.product,
    products_status: state.product_Reducer.products_status

})
// Map Dispatch to Props

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: ()=> {dispatch(fetchProducts())},
        PostProduct: (productName, productPrice, productCategory, productCompany, primaryUnit, scondaryUnit, expiryDate)=>
        {dispatch(PostProduct(productName, productPrice, productCategory, productCompany, primaryUnit, scondaryUnit, expiryDate))},
        AddProduct:()=>{dispatch({type:Products_Action.NEW})},
        fetchProductbyId:(id)=>{dispatch(fetchProductbyId(id))},
        deleteProduct:(id)=>{dispatch(deleteProduct(id))},
        updateProduct: (id, productName, productPrice, productCategory, productCompany, primaryUnit, scondaryUnit, expiryDate)=>
        {dispatch(updateProduct(id, productName, productPrice, productCategory, productCompany, primaryUnit, scondaryUnit, expiryDate))},
    }
}


class ProductsView extends Component {

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
            case Products_Status.SHOW:
                // alert(this.props.products)
                return <ShowProduct productlist = {this.props.products} addProduct={this.props.AddProduct}/>
            case Products_Status.NEW:
                return <AddProduct fetchProducts={this.props.fetchProducts} PostProduct={this.props.PostProduct}/>
            case Products_Status.UNDERUPDATE:
                return <AddProduct prod={this.props.product} 
                updateProduct={this.props.updateProduct}
                fetchProducts={this.props.fetchProducts} PostProduct={this.props.PostProduct}
                />
            default:

        }
    }

    render() {
        return (<DashboardDis getScreen = {this.getScreen(this.props.products_status)} />)
            
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)











