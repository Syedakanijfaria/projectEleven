import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth.js';
import MyOrderContent from './MyOrderContent/MyOrderContent.js';

const MyOrder = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() =>
        fetch(`https://morning-falls-44195.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
        , [])
    return (
        <div className="container">
            {/* <h1>this is order review</h1> */}
            <div>
                {
                    users.map((user => <MyOrderContent user={user}></MyOrderContent>))
                }
            </div>
        </div>
    )
}
export default MyOrder;