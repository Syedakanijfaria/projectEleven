import React, { useState } from 'react';

const ManageContent = (props) => {
    const { _id, Title, Name, Gender, Price, Email, Number, Date } = props.user || {}
    const [users, setUsers] = useState([]);

    const handlePending = () => {
        const proceed = window.confirm('Your order has been aproved!');
        if (proceed) {
            const url = `https://morning-falls-44195.herokuapp.com/users`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application / json'
                },
                body: JSON.stringify(users)
            })
                .then(res => res.json(users))
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('Aproved successfully')
                        //const remaining = users.filter(user => user._id !== id);
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
    // const history = useHistory()
    // const handleDetails = (_id) => {
    //     const uri = `/placeOrder/${_id}`
    //     history.push(uri)
    // }

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
                    <button onClick={() => handlePending(_id)} >Pending</button>
                    <button onClick={() => handleDelete(_id)} >Delete</button>
                </div>
            </div>
        </div>
    );
};
export default ManageContent;