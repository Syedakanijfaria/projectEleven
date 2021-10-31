import React from 'react';

const MyOrderContent = (props) => {
    const { _id, Title, Name, Gender, Price, Email, Number, Date } = props.user || {}

    return (
        <div className="col-md-3">
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Name}</p>
                    <p className="card-text">{Price}</p>
                    <p className="card-text">{Email}</p>
                    <p className="card-text">{Number}</p>
                    <p className="card-text">{Date}</p>
                    <p className="card-text">{_id}</p>
                    <p className="card-text">{Gender}</p>
                </div>
                {/* <button onClick={() => handleDetails(_id)} className="btn btn-primary">See Details</button> */}
            </div>
        </div>
    );
};
export default MyOrderContent;