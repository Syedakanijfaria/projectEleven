import React, { useState } from 'react';

const ManageContent = (props) => {
    const { _id, Title, Name, Gender, Price, Email, Number, Date } = props.user || {}
    const [users, setUsers] = useState([]);

    const handlePending = id => {
        const aproved = window.confirm('Your order has been aproved!');
        if (aproved) {
            const url = `https://morning-falls-44195.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedcount) {
                        alert('Aproved successfully')
                        setUsers({});
                    }
                })
        }
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete it?');
        if (proceed) {
            const url = `https://morning-falls-44195.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }

    }

    return (
        <div className="col-md-3">
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Title: {Title}</h5>
                    <p className="card-text">User Name: {Name}</p>
                    <p className="card-text">Price: {Price}</p>
                    <p className="card-text">Email: {Email}</p>
                    <p className="card-text">Mobile Number:{Number}</p>
                    <p className="card-text">Departure Date: {Date}</p>
                    <p className="card-text">Gender: {Gender}</p>
                    <button className="btn btn-warning" onClick={() => handlePending(_id)} >Pending</button>
                    <button className="btn btn-warning" onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};
export default ManageContent;