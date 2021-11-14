import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import ContactHome from './Components/ContactUs/ContactHome';
import AddProducts from './Components/AddProducts/AddProducts';
import AuthProvider from './Components/context/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import MyOrder from './Components/MyOrder/MyOrder';
import Reviews from './Components/Reviews/Reviews';
import DisplayReviews from './Components/DisplayReviews/DisplayReviews';
import Products from './Components/Home/Products/Products';
import AllProducts from './Components/AllProducts/AllProducts';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Payment from './Components/Payment/Payment';
import Explore from './Components/Explore/Explore';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/contact'>
            <ContactHome></ContactHome>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
            <Register></Register>
          </Route>

          <Route exact path='/singlePoduct/:bikeId'>
            <SingleProduct></SingleProduct>
          </Route>

          <Route exact path='/addProducts'>
            <AddProducts></AddProducts>
          </Route>

          <Route exact path='/addReview'>
            <Reviews></Reviews>
          </Route>

          <Route exact path='/allProducts'>
            <Products></Products>
          </Route>

          <Route exact path='/allProducts2'>
            <AllProducts></AllProducts>
          </Route>

          <Route exact path='/displayReviews'>
            <DisplayReviews></DisplayReviews>
          </Route>

          <Route exact path='/explore'>
            <Explore></Explore>
          </Route>

          <Route exact path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </Route>

          <Route exact path='/payment'>
            <Payment></Payment>
          </Route>
          
          <Route exact path='/manageProducts'>
            <ManageProducts></ManageProducts>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route exact path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route exact path='/myOrder'>
            <MyOrder></MyOrder>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
