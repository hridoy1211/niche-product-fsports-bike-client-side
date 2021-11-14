import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Reviews = () => {

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            
            fetch('https://gentle-brushlands-73473.herokuapp.com/addReview',{
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Successfully!", "Added your comment!", "success");
                    reset()
                }
            })
        }

    return (
        <div className="">
            <div className='add-products container'>
                <h1 className='text-center my-5'>Please give us a feedback</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("email")} placeholder="Email" />
                    <input {...register("img")} placeholder="Img URL" />
                    <textarea {...register("message")} placeholder="Message" />
                    <input className='submitBtn' type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;