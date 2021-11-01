import React from 'react';
import { useHistory } from 'react-router-dom';

const TourPlanContent = (props) => {
    const { _id, image, name, price, description } = props.service || {};

    const history = useHistory();

    const handleDetails = (_id) => {
        const uri = `/placeOrder/${_id}`;
        history.push(uri);
    }

    return (
        <div className="col-md-4">
            <div className="card" style={{ "width": "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {price}
                </div>
                <button onClick={() => handleDetails(_id)} className="btn btn-danger">See Details</button>
            </div>
        </div>
    );
};

export default TourPlanContent;