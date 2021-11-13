import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';


// 
// 
// 
// 
// 
// https://i.ibb.co/C6NvxWW/honda-up-7.jpg
// https://i.ibb.co/LhpBVSP/honda-up-8.jpg




const Products = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div>
            <div className='container my-5'>
            <h1 className='text-center my-5'>Our Latest Bikes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    bikes.map(bike => <div key={bike._id} className="col">
                    <div className="card h-100">
                    <img src={bike.img}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{bike.name}</h5>
                        <p className="card-text"> <span> ৳ </span> {bike.price}</p>
                    </div>
                    <Link to={`/singlePoduct/${bike._id}`}><div className="d-grid gap-2" >
                        <button className="btn btn-outline-danger" style={{textDecoration:'none'}} type="button">Details</button>
                        </div>
                    </Link>
                    </div>
                </div>)
                }
            </div>
        </div>
        </div>
    );
};



export default Products;