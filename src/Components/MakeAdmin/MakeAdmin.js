import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        fetch('https://gentle-brushlands-73473.herokuapp.com/makeAdmin',{
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                swal("Successfully!", "Make an Admin!", "success");
                reset()
            }
        })
    }

    return (
        <div>
            <div className="">
            <div className='add-products container'>
                <h1 className='text-center my-5'>Please make an Admin</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder="Email" />
                    <input className='submitBtn' type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default MakeAdmin;