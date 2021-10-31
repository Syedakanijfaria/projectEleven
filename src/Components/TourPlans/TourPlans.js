import React, { useEffect, useState } from 'react';
import TourPlanContent from '../TourPlanContent/TourPlanContent.js';

const TourPlans = () => {
    const [TourPlans, setTourPlans] = useState([])

    useEffect(() =>
        fetch('https://morning-falls-44195.herokuapp.com/productTourPlans')
            .then(res => res.json())
            .then(data => setTourPlans(data))
        , [])

    return (
        <div className="container">
            <div className="row g-5">
                {
                    TourPlans.map((service => <TourPlanContent service={service}>
                    </TourPlanContent>))
                }
            </div>
        </div>
    );
};
export default TourPlans;