import React from 'react';
import DisplayReviews from '../../DisplayReviews/DisplayReviews';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <br />
            <Products></Products>
            <br />
            <FAQ></FAQ>
            <br />
            <DisplayReviews></DisplayReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;