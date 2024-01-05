import React from 'react';
import loginImg from '../../../assets/images/login-img/login.png'
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {


    const handleUserInfoSubmit = e => {
        e.preventDefault();
        Swal.fire({
            title: 'Congrates!',
            text: 'Everything Successfully Submited',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        e.target.reset();
    }

    return (
        <div className='my-4 md:my-16'>
            <h2 className='text-yellow-400 text-2xl md:text-4xl font-semibold my-2 text-center'>CONTACT WITH US -------</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-full md:w-8/12 lg:w-6/12 lg:text-left">
                       <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full md:w-8/12 lg:w-6/12 shadow-2xl shadow-black bg-green-950 border border-green-900">
                        <form onSubmit={handleUserInfoSubmit} className="card-body contact-form">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300 font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300 font-semibold">Your Phone</span>
                                </label>
                                <input type="text" placeholder="Enter Your Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300 font-semibold">Your Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300 font-semibold">Your Message</span>
                                </label>
                                {/* <input type="text" placeholder="Enter Your Email" className="input input-bordered" required /> */}
                                <textarea name="textarea" id="" cols="15" rows="5" placeholder='Enter Your Message in Here' required></textarea>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-warning">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;