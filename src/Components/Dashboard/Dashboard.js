import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Reviews from '../Reviews/Reviews';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import Payment from '../Payment/Payment';


const Dashboard = () => {
    let {path, url} = useRouteMatch()
    const{user} = useAuth()
    const[isAdmin, setIsAdmin] = useState(false)

    useEffect(() =>{
        fetch(`http://localhost:5000/checkAdmin/${user.email}`)
        .then(res=> res.json())
        .then(data => {
            if(data[0]?.role === 'admin'){
                setIsAdmin(true)
            }
            else{
                setIsAdmin(false)
            }
        })
    },[user?.email])
    console.log(isAdmin);

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="dashboard-container p-4">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}><li className='dashboard-item mt-3'>Booking List</li></Link>
                            <Link to={`${url}/addReview`}><li className='dashboard-item'>Reviews</li></Link>
                            <Link to={`${url}/addProducts`}><li className='dashboard-item'>Add Products</li></Link>
                            <Link to={`${url}/payment`}><li className='dashboard-item'>Payment</li></Link>
                            <Link to={`${url}/manageOrder`}><li className='dashboard-item'>Manage Orders</li></Link>
                            <Link to={`${url}/manageProducts`}><li className='dashboard-item'>Manage Products</li></Link>
                            <Link to={`${url}/makeAdmin`}><li className='dashboard-item'>Make Admin</li></Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route exact path={`${path}/addReview`}>
                                <Reviews></Reviews>
                            </Route>
                            <Route exact path={`${path}/addProducts`}>
                                <AddProducts></AddProducts>
                            </Route>
                            <Route exact path={`${path}/manageOrder`}>
                                <ManageOrder></ManageOrder>
                            </Route>
                            <Route exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            
                        </Switch>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;