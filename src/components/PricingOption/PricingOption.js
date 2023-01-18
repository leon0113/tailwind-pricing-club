import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';



const PricingOption = (props) => {
    const {name,pricing,benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-400 py-2 rounded test-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{pricing}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits: </h3>
               {
                benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
               }
            </div>
            <button className='bg-yellow-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-800 font-bold'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
        
    );
};

export default PricingOption;