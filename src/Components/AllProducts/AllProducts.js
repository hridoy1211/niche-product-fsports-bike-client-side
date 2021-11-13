import React from 'react';
import Products from '../Home/Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AllProducts = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;