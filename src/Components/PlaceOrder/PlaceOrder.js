import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth.js';
import axios from 'axios';

const PlaceOrder = () => {

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

    const { user } = useAuth();
    const { displayName, email } = user;
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
        // const uri = `/myOrder/data`;
        // history.push(uri);
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
                            <p>Tour Tilte: <input {...register("Title", { required: true })} placeholder="Title" /></p><br />
                            <p>User Name: <input type="text" {...register("Name")} defaultValue={displayName}
                            /></p><br />
                            <p>Gender: <select {...register("Gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select></p><br />
                            <p>Mail:<input type="email" {...register("Email")} defaultValue={email} /></p><br />
                            <p>Price: $<input type="number" {...register("Price", { required: true })} /></p><br />
                            <p>Departure Date: <input type="date" {...register("Date", { required: true })} placeholder="Departure Date" /></p><br />
                            <p>Mobile Number: <input type="Mobile number" {...register("Number", { required: true })} placeholder="Mobile Number" /></p><br />
                            <input type="submit" value="Book Now" />
                            {/* <Link to="/myOrder">
                                <input type="submit" value="Book Now" />
                            </Link> */}
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default PlaceOrder;