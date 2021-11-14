import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/fsport-logo.jpg'
import useAuth from '../../hooks/useAuth';
import './Navigation.css'
import emptyProfile from '../../../images/logo/empty-profile.jpg'

const Navigation = () => {
    const {user, logOut} = useAuth()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#fef3f4'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='w-75' style={{backgroundColor:'', padding:'7px', borderRadius:'10px' }} src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/home' className="nav-link"><span>Home</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/dashboard' className="nav-link"><span>Dashboard</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/explore' className="nav-link"><span>Explore</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact' className="nav-link"><span>Contact Us</span></Link>
                    </li>
                   
                </ul>
                
                <div>
          <ul className='access-btn'>
            {user.email ? <li> <span> <img className='header-img' src={user?.photoURL ? user?.photoURL : emptyProfile} alt="" /> 
            &nbsp; <strong style={{ color: '#e85556' }}>{user?.displayName ? user?.displayName : user?.email}</strong> &nbsp;</span> 
            
            {user.email && <button onClick={logOut} className="btn btn-design">Logout</button>}</li>
            : <li><Link to='/login'><button className="btn btn-design" type="submit">Login</button></Link></li> }
          </ul>
      </div>
                
                </div>
            </div>
        </nav>
    );
};

export default Navigation;