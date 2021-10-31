import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MyOrder = () => {
    // const { id } = useParams()
    // const [details, setDetails] = useState([])
    // // const [specificDetail, setSpecificDetail] = useState({})
    // useEffect(() =>
    //     fetch(`https://morning-falls-44195.herokuapp.com/productTourPlans/${id}`)
    //         .then(res => res.json())
    //         .then(data => setDetails(data))
    //     , [id])

    return (
        <div className="container">
            <h1>this is order review</h1>

            {/* <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="">
                        <img src={details?.image} className="" alt="..." />
                    </div>
                    <div className="">
                        <h5 className="">{details?.name}</h5>
                        <p className="">{details?.description}</p>
                        <p>Price:$ {details?.price}</p>
                        <p>{details?.days}</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default MyOrder;