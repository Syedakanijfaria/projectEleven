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
                    <h4>{name}</h4>
                    <h5>Price: {price}</h5>
                    <h5>Description:</h5> {description}
                </div>
                <button onClick={() => handleDetails(_id)} className="btn btn-danger">See Details</button>
            </div>
        </div>
    );
};

export default TourPlanContent;