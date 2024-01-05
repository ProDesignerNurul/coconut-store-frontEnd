import React from 'react';
import './CoconutDetails.css';
import { Link } from 'react-router-dom';

const CoconutDetails = ({ coconut }) => {
    // console.log(coconut);
    const { _id, name, mainPic, price } = coconut;

    return (
        <div>
            <div className="card coconut-img card-compact border  border-green-900 w-[360px] md:w-96 text-gray-200 bg-green-950 shadow-md shadow-black">
                <figure ><img src={mainPic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{name}</h2>
                    <p>${price}</p>
                    <div className="card-actions justify-start">
                        <p className="btn btn-outline btn-warning btn-sm"><Link to={`/coconuts/${_id}`}>See More Details</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoconutDetails;