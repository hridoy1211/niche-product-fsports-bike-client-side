import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://gentle-brushlands-73473.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
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
        <Footer></Footer>
        </div>
    );
};

export default Explore;