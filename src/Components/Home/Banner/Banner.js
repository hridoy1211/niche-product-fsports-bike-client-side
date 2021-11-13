import React from 'react';
import bike1 from '../../../images/banner/slider2-h1.jpg'
import bike2 from '../../../images/banner/slider1-h1_1.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={bike1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block ">
                        <h3>FORCUS SPORTS</h3>
                        <p>- Up to 10% our all brand new bikes -</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={bike2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Mountain Bike</h3>
                        <p>These bikes specially designed for off-road riding</p>
                    </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
    );
};

export default Banner;