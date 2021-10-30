import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
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
        <div>
            <h1>Details of:{details?.name}</h1>
            <h2> This is dynamic page and id is:{id}</h2>
        </div>
    );
};

export default Details;