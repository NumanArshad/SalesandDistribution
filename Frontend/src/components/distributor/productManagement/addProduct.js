import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
import ProductsView from './products_view';
// import {PostProduct, fetchProducts} from '../../../actions/productActions';
import TextField from '@material-ui/core/TextField';
import { Link,withRouter } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(7, 7,4,7),
		marginTop: 85,
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(7, 4,4,4),
		},
	},
	textField: {
		marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

 function AddPrdoduct(props) {
	const classes = useStyles();
	const [productObj, setProductAttribute] = useState({Name:'', Price:0, Category: '', PrimaryUnit:'', ScondaryUnit:'',
	ExpiryDate: null});

	useEffect(() => {
		
		if(props.pack!==undefined){
			setProductAttribute({Name:props.prod.Name,Price:props.prod.Price,Category:props.prod.Category,
			PrimaryUnit:props.prod.PrimaryUnit,SecondaryUnit:props.prod.ScondaryUnit, ExpiryDate:props.prod.ExpiryDate})
		}
	  }, []);  //here if [] used mean render only first else render on state change 
	
	

		// Update the document title using the browser API
		//document.title = `You clicked ${count} times`;
	 


	return (
		<div style={{textAlign:'center'}}>
			
			<Paper className={classes.root} >
	  {props.prod!==undefined?
	  
	  <div>
		
	  <Grid container spacing={3} justify="center"
	  alignItems="center" >
		  <Grid item lg={6} md={6} xs={12}>
			  <TextField  fullWidth label="Package Name" className={classes.textField}
			  value={productObj.Name}
			  
			  onChange={(event)=>setProductAttribute({...productObj,Name:event.target.value})} />
		  </Grid>
		  <Grid item lg={6} md={6}  xs={12}>
			  <TextField value={productObj.Price}
			   fullWidth label="Price" className={classes.textField} 
			  onChange={(event)=>setProductAttribute({...productObj,Price:event.target.value})}/>
		  </Grid>
{/* Starts from there */}
		  <Grid item lg={4} md={4} xs={12}>
			  <TextField  value={productObj.Category}
			  fullWidth label="Category" className={classes.textField} 
			  onChange={(event)=>setProductAttribute({...productObj,Category:event.target.value})}/>{' '}
		  </Grid>
		  <Grid item lg={4} md={4}  xs={12}>
			  <TextField  fullWidth label="Primary Unit" 
			  value={productObj.PrimaryUnit}
			  className={classes.textField} 
			  onChange={(event)=>setProductAttribute({...productObj,PrimaryUnit:event.target.value})}/>
		  </Grid>
		  <Grid item lg={4} md={4}  xs={12}>
			  <TextField  fullWidth label="Scondary Unit" 
			  value={productObj.ScondaryUnit}
			  className={classes.textField} 
			  onChange={(event)=>setProductAttribute({...productObj,ScondaryUnit:event.target.value})}/>
		  </Grid>
		<Grid item lg={4} md={4} xs={12}>
			  <TextField value={productObj.ExpiryDate}
			   fullWidth label="Expiry Date" className={classes.textField} 
			  onChange={(event)=>setProductAttribute({...productObj, ExpiryDate:event.target.value})}/>
		  </Grid>

		  

	  
	  </Grid>
	  <br /> 	<br /> 
		  <Grid container spacing={2} justify='flex-start'>
		  <Grid item>
	  <Button alignItems="center" variant="contained" color="default"
	  onClick={()=>props.fetchProducts()}>
		  
			  Cancel
		  </Button>
		  </Grid>
	  <Grid item>
	  <Button alignItems="center" variant="contained" color="secondary" disabled={true}
	  onClick={()=>props.PostProduct(productObj.Name,productObj.Price,productObj.Category,
		productObj.PrimaryUnit,productObj.ScondaryUnit, productObj.ExpiryDate)}>
		  
			  Save as New
		  </Button>
		  </Grid>
		  <Grid item 	>
			  <Button alignItems="center" variant="contained" color="primary"
			   onClick={()=>props.updateProduct(props.prod.id,productObj.Name,productObj.Price,productObj.Category,
				productObj.PrimaryUnit,productObj.ScondaryUnit, productObj.ExpiryDate)}
			  >
		  
			  Save
		  </Button>
		  </Grid>
		  </Grid>
		  </div>:
		  <div>
		  <Grid container spacing={3} justify="center"
		  alignItems="center" >
			  <Grid item lg={6} md={6} xs={12}>
				  <TextField  fullWidth label="Name" className={classes.textField}
				  
				  onChange={(event)=>setProductAttribute({...productObj,Name:event.target.value})} />
			  </Grid>
			  <Grid item lg={6} md={6}  xs={12}>
				  <TextField  fullWidth label="Price" className={classes.textField} 
				  onChange={(event)=>setProductAttribute({...productObj,Price:event.target.value})}/>
			  </Grid>

			  <Grid item lg={4} md={4} xs={12}>
				  <TextField  fullWidth label="Category" className={classes.textField} 
				  onChange={(event)=>setProductAttribute({...productObj,Category:event.target.value})}/>{' '}
			  </Grid>
			  <Grid item lg={4} md={4}  xs={12}>
				  <TextField  fullWidth label="PrimaryUnit" className={classes.textField} 
				  onChange={(event)=>setProductAttribute({...productObj,PrimaryUnit:event.target.value})}/>
			  </Grid>
			<Grid item lg={4} md={4} xs={12}>
				  <TextField  fullWidth label="Scondary Uni" className={classes.textField} 
				  onChange={(event)=>setProductAttribute({...productObj,storage:event.target.value})}/>
			  </Grid>
			  <Grid item lg={4} md={4} xs={12}>
				  <TextField  fullWidth label="Expiry Date" className={classes.textField} 
				  onChange={(event)=>setProductAttribute({...productObj, ExpiryDate:event.target.value})}/>
			  </Grid>

			  

		  
		  </Grid>
		  <br /> 	<br /> 
			  <Grid container spacing={2} justify='flex-start'>
			  <Grid item>
		  <Button alignItems="center" variant="contained" color="default"
		  onClick={()=>props.fetchProducts()}>
			  
				  Cancel
			  </Button>
			  </Grid>
		  <Grid item>
		  <Button alignItems="center" variant="contained" color="secondary"
		  onClick={()=>props.PostProduct(productObj.Name, productObj.Price, productObj.Category,
			productObj.PrimaryUnit, productObj.SecondaryUnit, productObj.ExpiryDate)}>
			  
				  Save as New
			  </Button>
			  </Grid>
			  <Grid item 	onClick={()=>props.showProduct()}>
				  <Button alignItems="center" variant="contained" color="primary"
				  disabled={true}
				  >
			  
				  Save
			  </Button>
			  </Grid>
			  </Grid>
			  </div>	}
				
			</Paper>
		</div>
	);
}

export default withRouter(AddPrdoduct)