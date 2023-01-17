import React, { useState } from 'react';
import Link from '../Link/Link';
import { ArrowSmallUpIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        {id:1,name: 'Home',link: '/home'},
        {id:2,name: 'Shop',link: '/home'},
        {id:3,name: 'About us',link: '/home'},
        {id:4,name: 'Contacts',link: '/home'},
    ]
    return (
       <nav className='bg-indigo-200'>
        <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open ? <XMarkIcon/> : <ArrowSmallUpIcon></ArrowSmallUpIcon>}
        </div>
         <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
         {/* <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}> */}
           {
            routes.map(route => <Link
            key={route.id}
            route = {route}
            ></Link>)
           }
        </ul>
       </nav>
    );
};

export default Navbar;