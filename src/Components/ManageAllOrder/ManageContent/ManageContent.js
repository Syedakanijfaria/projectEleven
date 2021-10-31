import React from 'react';

const ManageContent = (props) => {
    const { _id, Title, Name, Gender, Price, Email, Number, Date } = props.user || {}

    // const history = useHistory()
    // const handleDetails = (_id) => {
    //     const uri = `/placeOrder/${_id}`
    //     history.push(uri)
    // }

    return (
        <div className="col-md-3">
            <div className="card" style={{ "width": "18rem" }}>
                {/* //<img src={image} className="card-img-top" alt="..." /> */}
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
export default ManageContent;