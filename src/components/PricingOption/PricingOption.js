import React from 'react';

const PricingOption = (props) => {
    const {name,pricing} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-400 py-2 rounded test-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{pricing}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
        </div>
        
    );
};

export default PricingOption;