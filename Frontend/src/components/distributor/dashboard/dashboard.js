import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import CustomizedMenus from '../../superAdmin/dashboard/Menus'
import ListSubheader from '@material-ui/core/ListSubheader';
import { withRouter } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ChartContainer from '../../superAdmin/dashboard/chartContainer'
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import NestedList from './DropDownMenu'
import withWidth from '@material-ui/core/withWidth';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import {FetchRolesbyDistributor,GetUsertoRole,GetRolePrivileges} from '../../../actions/usersActions'
import { Users_Action, Users_Status } from '../../../constants/usersActions'

import {fetchProducts, PostProduct} from '../../../actions/productActions'
import {Products_Status, Products_Action} from '../../../constants/productActions';
import ProductsView from '../productManagement/products_view';

import AddInventory from '../inventoryManagement/addInventory';
import AddProduct from '../productManagement/addProduct';


const mapStateToProps = state => ({
	users_Status: state.users_Reducer.users_Status,	
	products_status: state.product_Reducer.products_status
})
const mapDipatchToProps = dispatch => ({
	LoadNewUser: () => { dispatch({ type: Users_Action.NEW }) },
	LoadShowUser: () => { dispatch({ type: Users_Action.SHOW }) },
	LoadNewRole: () => { dispatch({ type: Users_Action.NEWRole }) },
	LoadShowRole: () => { dispatch({ type: Users_Action.SHOWROLE }) },
	GetRolePrivileges:(DistributorId)=> dispatch(GetRolePrivileges(DistributorId)),
	FetchRolesbyDistributor:(DistributorId)=>{dispatch(FetchRolesbyDistributor(DistributorId))},
	GetUsertoRole:(DistId)=>dispatch( GetUsertoRole(DistId)),
	fetchProducts:() => {dispatch({type: Products_Action.SHOW})},
	PostProduct: () => {dispatch({type: Products_Action.NEW})}
})
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},

	///drawer classes
	drawerRoot: {
		paddingTop: 60,
		width: '100%',
		maxWidth: 240,
		height:'100%',
		overflowY: 'hidden',
		//paddingBottom: '170%',
		backgroundColor: 'red'//theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

function DashboardDis(props) {
	const { container, getScreen } = props;
	const [open, setOpen] = React.useState(false);
	const [headerMargin, setMargin] = useState(80)
	function handleClick() {
		setOpen(!open);
	}

	
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}





	const header = (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit">
					Photos
          </Typography>
			</Toolbar>
		</AppBar>
	);


	const drawer = (		
		<List style={{ backgroundColor: '#212121', color: 'white' }}
			component="nav"
			aria-labelledby="nested-list-subheader"			
			className={classes.drawerRoot}
		>
			<ListItem button onClick={() => props.history.push('/distributor/snd/dashboard/'+props.match.params.userId)}>
				<ListItemIcon>
					<DashboardIcon style={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>

			<ListItem button onClick={handleClick}
			>
				<ListItemIcon>
					<PeopleIcon style={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Manage Roles" />
				{open ? <ExpandMore /> : <ExpandLess />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						onClick={() => { window.location.pathname==='/distributor/snd/roles/'+props.match.params.userId?
						props.LoadNewRole():props.LoadNewRole(); props.history.push('/distributor/snd/roles/'+props.match.params.userId) }}>
						<ListItemIcon>
							<GroupAddIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Create Roles" />
					</ListItem>
					<ListItem button className={classes.nested}
						onClick={() => { 
					window.location.pathname==='/distributor/snd/roles/'+props.match.params.userId?props.GetRolePrivileges(props.match.params.userId):
					 props.GetRolePrivileges(props.match.params.userId);props.history.push('/distributor/snd/roles/'+props.match.params.userId) }}>
						<ListItemIcon>
							<ViewListIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Show Roles" />
					</ListItem>
				</List>
			</Collapse>

			
			<ListItem button onClick={handleClick}
			>
				<ListItemIcon>
					<PersonIcon style={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Manage Users" />
				{open ? <ExpandMore /> : <ExpandLess />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						onClick={() => { 
							window.location.pathname=='/distributor/snd/users/'+props.match.params.userId?
							// props.LoadNewUser():props.LoadNewUser(); props.history.push('/distributor/snd/users/'+props.match.params.userId) }}>
						
						props.FetchRolesbyDistributor(props.match.params.userId):
						props.FetchRolesbyDistributor(props.match.params.userId); props.history.push('/distributor/snd/users/'+props.match.params.userId) }}>
						<ListItemIcon>
							<PersonAddIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Create User" />
					</ListItem>
					<ListItem button className={classes.nested}
						onClick={() => { 
							window.location.pathname=='/distributor/snd/users/'+props.match.params.userId?
							props.GetUsertoRole(props.match.params.userId)://props.LoadShowUser():
							props.GetUsertoRole(props.match.params.userId); props.history.push('/distributor/snd/users/'+props.match.params.userId) }}>
						<ListItemIcon>
							<ViewListIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Show User" />
					</ListItem>
				</List>
			</Collapse>
			{/* Manage Products */}

			<ListItem button onClick={handleClick}
			>
				<ListItemIcon>
					<PersonIcon style={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Manage Products" />
				{open ? <ExpandMore /> : <ExpandLess />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						onClick={() => { 
							window.location.pathname=='/distributor/snd/products/'?
							props.PostProduct():
							props.history.push('/distributor/snd/products/')
							props.PostProduct()
							
							}}>
							{/* props.LoadNewUser():props.LoadNewUser(); props.history.push('/distributor/snd/users/'+props.match.params.id) }}> */}
						
						{/* props.FetchRolesbyDistributor(props.match.params.product): */}
						{/* // props.FetchRolesbyDistributor(props.match.params.id); props.history.push('/distributor/snd/product/'+props.match.params.id) }}> */}
						<ListItemIcon>
							<PersonAddIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Add Product" />
					</ListItem>
					
					<ListItem button className={classes.nested}
						onClick={() => { 
							window.location.pathname=='/distributor/snd/products/'/*+props.match.params.id*/?
							props.fetchProducts():							
							props.history.push('/distributor/snd/products/'/*+props.match.params.id*/);
							props.fetchProducts()
							}}>

							{/* // props.GetUsertoRole(props.match.params.id)://props.L */}
							{/* // props.GetUsertoRole(props.match.params.id); props.history.push('/distributor/snd/product/'+props.match.params.id) }}> */}
						<ListItemIcon>
							<ViewListIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Show Products" />
					</ListItem>
				</List>
			</Collapse>

			{/* Inventory Management */}
			<ListItem button onClick={handleClick}
			>
				<ListItemIcon>
					<PersonIcon style={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Manage Inventory" />
				{open ? <ExpandMore /> : <ExpandLess />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}
						>
							{/* props.LoadNewUser():props.LoadNewUser(); props.history.push('/distributor/snd/users/'+props.match.params.id) }}> */}
						
						{/* props.FetchRolesbyDistributor(props.match.params.product): */}
						{/* // props.FetchRolesbyDistributor(props.match.params.id); props.history.push('/distributor/snd/product/'+props.match.params.id) }}> */}					

						<ListItemIcon>
							<PersonAddIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Add Inventory(Stock)" />
					</ListItem>
					
					<ListItem button className={classes.nested}
						onClick={() => { 
							// <AddInventory/>
							// props.fetchProducts():							
							// props.history.push('/distributor/snd/products/');
							// props.fetchProducts()
							}}>

							{/* // props.GetUsertoRole(props.match.params.id)://props.L */}
							{/* // props.GetUsertoRole(props.match.params.id); props.history.push('/distributor/snd/product/'+props.match.params.id) }}> */}
						<ListItemIcon>
							<ViewListIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Show Inventory" />
					</ListItem>
				</List>
			</Collapse>

		</List>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: 'white', color: 'grey' }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
						Sales & distribution
						{/* width is {props.width} */}
					</Typography>
					<CustomizedMenus />
				</Toolbar>
			</AppBar>

			<AppBar style={{
				marginTop: props.width === 'xs' ? headerMargin - 10 : headerMargin,
				paddingTop: 3, paddingBottom: 3, backgroundColor: '#f5f5f5', color: '#2e7d32'
			}} className={classes.appBar}
				elevation={1}>
				<Toolbar variant="dense">
					<div>

						{(() => {
							if (window.location.pathname === '/distributor/snd/dashboard/'+props.match.params.userId) {
								return <Typography variant="h6">Dashboard</Typography>
							}
							else if (props.users_Status === Users_Status.NEWRole) {
								return <Typography variant="h6">Create Role</Typography>
							}
							else if (props.users_Status === Users_Status.SHOWROLE) {

								return <Grid container direction="row" spacing={2} justify='flex-start'
									alignItems="center">
									<Grid item><Typography variant="h6"  >Show Role</Typography> </Grid>
									<Grid item> <Fab style={{ backgroundColor: '#2e7d32', color: 'white' }} size="small" className={classes.fab}
										onClick={() => {
											props.LoadNewRole(); //props.history.push('/distributor/snd/roles/createRole/'+props.match.params.userId)
										}
										}>
										<AddIcon />
									</Fab></Grid></Grid>
							}
							else if (props.users_Status === Users_Status.NEW) {

								return <Typography variant="h6">New User</Typography>
							}
							else if (props.users_Status === Users_Status.SHOW) {

								return <Grid container direction="row" spacing={2} justify='flex-start'
									alignItems="center">
									<Grid item><Typography variant="h6"  >Show User</Typography> </Grid>
									<Grid item> <Fab style={{ backgroundColor: '#2e7d32', color: 'white' }} size="small" className={classes.fab}
										onClick={() => {
											window.location.pathname=='/distributor/snd/users/'+props.match.params.userId?
							//props.LoadNewUser():
							props.FetchRolesbyDistributor(props.match.params.userId):
											props.FetchRolesbyDistributor(props.match.params.userId); props.history.push('/distributor/snd/users/'+props.match.params.userId)
										}
										}>
										<AddIcon />
									</Fab></Grid></Grid>
							} else if (props.products_status === Products_Status.SHOW) {
								<Grid container direction="row" spacing={2} justify='flex-start'
									alignItems="center">
									<Grid item><Typography variant="h6"  >Show Products</Typography> </Grid>
									<Grid item> <Fab style={{ backgroundColor: '#2e7d32', color: 'white' }} size="small" className={classes.fab}
										onClick={() => {
											window.location.pathname=='/distributor/snd/products/'}
										}>
										<AddIcon />
									</Fab></Grid></Grid>								
							} else if (props.products_status === Products_Status.NEW) {
								return <Typography variant="h6">Add Product</Typography>	
							}

						})}


					</div>


				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}

				aria-label="Mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{/* <NestedList /> */}
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer classes={{ paper: classes.drawerPaper, }}
						variant="permanent"
						open  >
						{/* <NestedList /> */}
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />				
				{(()=>{
				if (window.location.pathname === '/distributor/snd/dashboard/'+props.match.params.userId) {
					return <ChartContainer />
				}
				else if (window.location.pathname === '/distributor/snd/products/'){
					return <AddProduct />
				} else{
					return getScreen
				}
				})()}
				{/* {window.location.pathname === '/distributor/snd/dashboard/'+props.match.params.userId ? <ChartContainer /> : getScreen} */}
			</main>
		</div>
	);
}

DashboardDis.propTypes = {
	container: PropTypes.object,
};

export default connect(mapStateToProps, mapDipatchToProps)(withRouter(withWidth()(DashboardDis)))