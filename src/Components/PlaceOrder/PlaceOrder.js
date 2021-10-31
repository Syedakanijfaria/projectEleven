import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth.js';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { id } = useParams()
    const [details, setDetails] = useState([])
    // const [specificDetail, setSpecificDetail] = useState({})
    useEffect(() =>
        fetch(`https://morning-falls-44195.herokuapp.com/productTourPlans/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [id])
    // useEffect(() => {
    //     if (details.length > 0) {
    //         const matchedData = details.find(detail => detail.key === id)
    //         setSpecificDetail(matchedData);
    //     }

    // }, [details])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <img src={details?.image} className="" alt="..." />
                    </div>
                    <div className="">
                        {/* <h2> This is dynamic page and id is:{id}</h2> */}
                        <h5 className="">{details?.name}</h5>
                        <p className="">{details?.description}</p>
                        <p>Price:$ {details?.price}</p>
                        <p>{details?.days}</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Tour Tilte: <input {...register("name")} defaultValue={details?.name} placeholder="title" /></p><br />
                            <p>User Name: <input type="text" {...register(" name")} defaultValue={displayName} /></p><br />
                            <p>Gender: <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select></p><br />
                            <p>Mail:<input type="email" {...register("email")} defaultValue={email} /></p><br />
                            <p>Price: $<input type="number" {...register("price")} defaultValue={details?.price} /></p><br />
                            <p>Mobile Number: <input type="Mobile number" {...register("Mobile number", { required: true })} placeholder="Mobile number" /></p><br />
                            <input type="submit" value="Book Now" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default PlaceOrder;