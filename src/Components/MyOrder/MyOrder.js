import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth.js';
//import { useParams, useHistory } from 'react-router-dom';
import MyOrderContent from './MyOrderContent/MyOrderContent.js';

const MyOrder = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    // const [specificDetail, setSpecificDetail] = useState({})
    useEffect(() =>
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [])
    return (
        <div className="container">
            <h1>this is order review</h1>
            <div>
                {
                    users.map((user => <MyOrderContent user={user}></MyOrderContent>))
                }
            </div>
        </div>
    )
}
export default MyOrder;