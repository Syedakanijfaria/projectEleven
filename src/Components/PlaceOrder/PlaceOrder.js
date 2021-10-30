import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    // const [specificDetail, setSpecificDetail] = useState({})
    useEffect(() =>
        fetch(`https://morning-falls-44195.herokuapp.com/productTourPlans/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])
    // useEffect(() => {
    //     if (details.length > 0) {
    //         const matchedData = details.find(detail => detail.key === id)
    //         setSpecificDetail(matchedData);
    //     }

    // }, [details])

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
                        <p>{details?.price}</p>
                        <p>{details?.days}</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">

                    </div>
                </div>
            </div >
        </div >
    );
};

export default PlaceOrder;