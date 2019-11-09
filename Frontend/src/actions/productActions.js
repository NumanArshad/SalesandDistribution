import {Products_Action, Products_Status} from "../constants/productActions";
import { createGenerateClassName } from "@material-ui/styles";
import { CLIENT_RENEG_LIMIT } from "tls";
import ROOT_URL from '../constants/config';

export const PostProduct = (id, productName, price, category, primaryunit, scondaryUnit, expiryDate) => dispatch => {
    var prodData = {'Id':id,
        'Name': productName, 'Price': parseInt(price), 'Category': parseInt(category),
        'PrimaryUnit': parseInt(primaryunit), 'ScondaryUnit': parseInt(scondaryUnit), 
        'ExpiryDate' : Date.parse(expiryDate)
    }
    
    const postProd = fetch(ROOT_URL+'/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(prodData)
    }).then((response) => {
        console.log(response.status + "response");
        response.json().then(data => {
            //  console.log(data.status+"data")
            
               return dispatch({ type: Products_Action.SHOW, payload: data})            

        })
    })
}





export const fetchProducts = ()=> dispatch => {
    fetch('http://localhost:3004/products', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // Content-Type: application/json
            'Accept': 'application/json'
            // 'charset': 'UTF-8'
        },
        mode: 'cors'
    }).then((response) => {
        console.log(response.status + "response" + "stattus text is" + response.statusText);
        if (response.status === 404) {
            alert("server error")
        }
        else {
            response.json().then(data => {  
                    console.log(data);
                    return dispatch({ type: Products_Action.SHOW, payload: data })
                }
            )
        }
    }).catch(error => alert(error));

}

export const deleteProduct = (id) => dispatch => {
    const postProd = fetch('https://localhost:3004/products'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
    }).then((response) => {
        console.log(response.status + "response" + "stattus text is" + response.statusText);
        if (response.status === 404) {
            alert("server error")
        }
        else {
            response.json().then(data => {
                
                    return dispatch({ type: Products_Action.SHOW, payload: data })            
            })
        }
    }).catch(error => alert(error))
}


export const fetchProductbyId = (id) => dispatch => {
    const postProd = fetch('https://localhost:3004/products'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
    }).then((response) => {
        console.log(response.status + "response" + "stattus text is" + response.statusText);
        if (response.status === 404) {
            alert("server error")
        }
        else {
            response.json().then(data => {
                    return dispatch({ type: Products_Action.UNDERUPDATE, payload: data })                        
            })
        }
    }).catch(error => alert(error))
}

export const updateProduct = (id, productName, price, category, primaryunit, scondaryUnit, expiryDate) => dispatch => {
    var prodData = {'Id':id,
        'Name': productName, 'Price': parseInt(price), 'Category': parseInt(category),
        'PrimaryUnit': parseInt(primaryunit), 'ScondaryUnit': parseInt(scondaryUnit), 
        'ExpiryDate' : Date.parse(expiryDate)
    }
    
    const postProd= fetch('https://localhost:30004/products/'+id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(prodData)
    }).then((response) => {
        console.log(response.status + "response");
        response.json().then(data => {
            //  console.log(data.status+"data")
            
               return dispatch({ type: Products_Action.SHOW, payload: data})            

        })
    })
}
