import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MyOrder = () => {

    const [users, setUsers] = useState([])
    // const [specificDetail, setSpecificDetail] = useState({})
    useEffect(() =>
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [])

    return (
        <div className="container">
            <h1>this is order review</h1>
            {/* <div>
                {
                    users.map((user => <MyOrderContent user={user}></MyOrderContent>))
                }
            </div> */}
        </div>
    )
}
export default MyOrder;