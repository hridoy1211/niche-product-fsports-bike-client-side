import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import login from '../../images/login/login.jpg'

const Login = () => {
    const {handelLogin, signInUsingGoogle, isLoading}=useAuth()
   
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        handelLogin(data?.email,data?.password)
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