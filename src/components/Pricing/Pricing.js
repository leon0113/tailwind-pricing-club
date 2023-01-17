import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOfOption = [
        {id :1,name: 'free',pricing: 0},
        {id :2,name: 'regular',pricing: 110},
        {id :3,name: 'premium',pricing: 300}
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deal of the town</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolor velit provident illo. Quidem sed laborum necessitatibus atque, iure nemo temporibus! Veritatis magni nihil dolore vero adm.</p>
           <div className='grid md:grid-cols-3 gap-3 mt-8'>
           {
                pricingOfOption.map(option => <PricingOption
                key={option.id}
                option={option}
                ></PricingOption>)
            }
           </div>
        </div>
    );
};

export default Pricing;