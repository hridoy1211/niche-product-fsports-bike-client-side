import React from 'react';
import { useForm } from "react-hook-form";
import registerForm from '../../images/login/register.png'

import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';
const Register = () => {
    const {  handelRegister, isLoading } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
       handelRegister(data?.email,data?.password)
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
              <h2>Please Register</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
              <input
              className="input-field mt-5 w-50"
              name="name"
              placeholder="Your Name"
              type="text"
              {...register("name", { required: true })}
              />
              <br />
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
                value="Register"
              />
              </form> 
              <br />
              <p>Already Registered? <Link to="/login">Please Login</Link></p>
              </div>
            <div className="col-md-6 col-12">
              <img src={registerForm} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
    );
};

export default Register;