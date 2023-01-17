import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl'>Save most of your money</h2>
            <p>By opening a bank account</p>
        </div>
    );
};

export default Header;