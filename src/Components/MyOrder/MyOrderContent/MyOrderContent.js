import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth.js';

const MyOrderContent = (props) => {
    const { user } = useAuth();
    const email = user.email;
    const { _id, Title, Name, Gender, Price, Email, Number, Date, Address } = props.user || {};
    const [users, setUsers] = useState([]);
    const [isDelete, setIsDelete] = useState({})
    useEffect(() =>
        fetch(`https://morning-falls-44195.herokuapp.com/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [email, isDelete]);
    const handleDelete = id => {
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
                    setIsDelete(true);
                } else { setIsDelete(false); }
            })
    }
    return (
        <div className="col-md-3">
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Title: {Title}</h5>
                    <p className="card-text">User Name: {Name}</p>
                    <p className="card-text">Price: {Price}</p>
                    <p className="card-text">Email: {Email}</p>
                    <p className="card-text">Mobile Number: {Number}</p>
                    <p className="card-text">Departure Date:{Date}</p>
                    <p className="card-text">Address: {Address}</p>
                    <p className="card-text">Gende: {Gender}</p>
                    <button onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};
export default MyOrderContent;