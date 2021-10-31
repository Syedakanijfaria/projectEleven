import React, { useEffect, useState } from 'react';
import ManageContent from './ManageContent/ManageContent.js';

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    // const [specificDetail, setSpecificDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <h1>this is order review</h1>
            <div>
                {
                    users.map((user => <ManageContent user={user}></ManageContent>))
                }
            </div>
        </div>
    );
};
export default ManageAllOrder;