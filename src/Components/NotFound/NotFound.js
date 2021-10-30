import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <img className="w-100" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" />
            <h2 className="error-bg text-danger mt-5"> 404 not found</h2>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;