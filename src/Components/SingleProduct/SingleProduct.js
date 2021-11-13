import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './SingleProduct.css'

const SingleProduct = () => {
    const {user} = useAuth()
    const {bikeId} = useParams()
    const [singleProduct, setSingleProduct] = useState([])

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            data.status = 'pending';
            data.email = user?.email;
            fetch('http://localhost:5000/addMyOrders', {
                method:'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId){
                    swal("Are you sure to order this bike?", {
                        buttons: ["Cancel!", "Aww yess!"],
                      });
                      reset();
                }
            })
            console.log(data);
        
        }

    useEffect(() => {
        const url = `http://localhost:5000/singlePoduct/${bikeId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    })

    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 col-12'>
                    <img src={singleProduct?.img} className="" alt="..."/>
                    <h4>{singleProduct?.name}</h4>
                    <p className='text-secondary' >{singleProduct?.description}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Engine</strong>: {singleProduct?.engine}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Power</strong>: {singleProduct?.power}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>ABS</strong>: {singleProduct?.abs}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Cubic Capacity</strong>: {singleProduct?.cc}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Weight</strong>: {singleProduct?.weight}</p>
                    <p className='text-secondary' style={{lineHeight:'10px'}}><strong className='text-dark'>Price</strong>: <span> ৳ </span> {singleProduct?.price}</p>
                </div>

                <div className='col-md-6 col-12'>
                    <h1 className='text-center'>Order</h1>
                    <div className='order-product'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} value={user?.email}/>
                            <input {...register("bikename")} value={singleProduct?.name}/>
                            <input {...register("date")} value={new Date().toLocaleDateString()} />
                            <input {...register("address")} placeholder='Address' />
                            <input {...register("city")} placeholder='City' />
                            <input {...register("phone")} placeholder='Phone' />
                            <input className='submitBtn' type="submit" value='Order Now' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default SingleProduct;