import React from 'react';
import errorImg from '../../assets/images/error-404/error404-2.jpg';

const Error404 = () => {
    return (
        <div className='flex justify-center items-center m-8 md:m-20'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default Error404;