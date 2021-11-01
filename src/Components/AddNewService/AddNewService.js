import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth.js';
import axios from 'axios';

const AddNewService = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/productTourPlans', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Tour Tilte: <input {...register("Title", { required: true })} placeholder="Title" /></p><br />
                            <p>User Name: <input type="text" {...register("Name")} defaultValue={displayName}
                            /></p><br />

                            <p>Mail:<input type="email" {...register("Email")} defaultValue={email} /></p><br />
                            <p>Price: $<input type="number" {...register("Price")} /></p><br />


                            <input type="submit" value="Book Now" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};
export default AddNewService;