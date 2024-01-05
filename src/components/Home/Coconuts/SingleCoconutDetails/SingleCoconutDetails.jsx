import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Swal from 'sweetalert2';

const SingleCoconutDetails = () => {
    const coconut = useLoaderData();
    // console.log(coconut);

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    const handleOrderAlert = () => {
        Swal.fire({
            title: 'Announcement!',
            text: `Order Section is in Working Now, 
            it's Complete Very Soon,
            if you want to order it,
            just text on whatsapp.
            +8801775771747`,
            icon: 'info',
            confirmButtonText: 'OK'
          })
    }

    const { _id, name, description, mainPic, price, picture1, picture2, picture3, picture4 } = coconut;

    return (
        <div className='my-4 md:my-10'>
            <Link onClick={handleNavigate} className='btn btn-wide btn-outline btn-sm text-yellow-400 my-4'>Go Back</Link>
            <div className="card card-compact md:w-8/12 mx-auto text-gray-200 bg-green-950 shadow-md shadow-black">
                <figure>
                    <Carousel>
                        <div>
                            <img src={mainPic} />
                        </div>
                        <div>
                            <img src={picture1} />
                        </div>
                        <div>
                            <img src={picture2} />
                        </div>
                        <div>
                            <img src={picture3} />
                        </div>
                        <div>
                            <img src={picture4} />
                        </div>
                    </Carousel>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p className='text-2xl text-red-500 font-semibold'>${price}</p>
                    <p className='mb-4'>{description}</p>
                    <div className="card-actions justify-start">
                        <p onClick={handleOrderAlert} className="btn btn-outline text-yellow-400 btn-sm w-full"><Link>Order Now</Link></p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleCoconutDetails;