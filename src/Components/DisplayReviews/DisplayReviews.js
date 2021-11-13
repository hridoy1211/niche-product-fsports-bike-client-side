import React, { useEffect, useState } from 'react';
import './DisplayReviews.css'
import emptyProfile from '../../images/logo/empty-profile.jpg'

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/displayReviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='container'>
            <h1 className='my-5 text-center'>Happy Clients says</h1>
            <div className='text-center'>
            <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => 
                    <div key={review._id} className="col">
                        <div className="card h-100 p-2">
                            <img src={review.img ? review.img : emptyProfile}className="card-img-top feedback-img mx-auto"  alt="..."/>
                            <div className="card-body">
                                <h5 style={{color: '#0095db'}} className="card-title">{review.name}</h5>
                                <p className="card-text">{review.email}</p>
                                <p className="card-text text-secondary">{review.message}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default DisplayReviews;