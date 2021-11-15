import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import login from '../../images/login/login.jpg'

const Login = () => {
    const {user, handelLogin, signInUsingGoogle, isLoading}=useAuth()
    const location = useLocation()
    const history = useHistory()

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        handelLogin(data?.email,data?.password, location, history)
        console.log(data);
      };

      if(isLoading){
        return <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
      }
    return (
        <div className='container'>
           <div className="row d-flex justify-content-center align-items-center">
             <div className="col-md-6 col-12">
                <h2>Please Login</h2> 
                <form onSubmit={handleSubmit(onSubmit)}>  
                <input
                  className="input-field mt-2 w-50"
                  name="email"
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: true })}
                />
              
                <br />
                <input
                  className="input-field mt-2 w-50"
                  name="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <br />
                
                <input
                  className="submit-btn btn btn-danger mt-3 w-50"
                  type="submit"
                  value="Log in"
                />
              </form> 
              <br />
              <p>Are You New User? <Link to="/register">Please Register</Link></p>

              <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
             </div>

             <div className="col-md-6 col-12">
              <img src={login} className='img-fluid' alt="" />
             </div>
           </div>
        </div>
    );
};

export default Login;