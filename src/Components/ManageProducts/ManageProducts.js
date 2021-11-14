import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    
    const [manageProducts, setManageProducts] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        fetch('https://gentle-brushlands-73473.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => setManageProducts(data))
    },[isDeleted])

    const handleProductDelete = (id) =>{
        const url = `https://gentle-brushlands-73473.herokuapp.com/deleteProduct/${id}`
        fetch(url, {
            method : 'DELETE',
            headers : {'content-type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {

            if(data){
                window.confirm('Are you sure to delete this Service ?')
                setIsDeleted(data)
            }
        })
    }

    return (
        <div>
            <div className='container my-5'>
                <h1 className='text-center my-5'>Update/Delete Bikes</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        manageProducts.map(manageProduct => 
                        <div key={manageProduct._id} className="col">
                            <div className="card h-100">
                                <img src={manageProduct.img}className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{manageProduct.name}</h5>
                                    <p className="card-text"> <span> ৳ </span> {manageProduct.price}</p>
                                </div>
                                <div className="d-grid gap-2 p-2" >
                                    <button onClick={() => handleProductDelete(manageProduct._id)} className="btn btn-design" style={{textDecoration:'none'}} type="button">Delete Product</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;