import React, { useEffect, useState } from 'react';
import CoconutDetails from '../CoconutDetails/CoconutDetails';
import { useLoaderData } from 'react-router-dom';

const Coconuts = () => {
    // const [coconuts, setCoconuts] = useState([]);

    const coconuts = useLoaderData();
    // console.log(coconuts);

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

        

    return (
        <div className='my-10'>
            <h2 className='text-yellow-400 text-2xl md:text-4xl font-semibold mb-4'>COCONUTS HOUSE -------</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    coconuts && coconuts.map(coconut => <CoconutDetails 
                    key={coconut._id}
                    coconut={coconut}
                    />)
                }
            </div>
        </div>
    );
};

export default Coconuts;