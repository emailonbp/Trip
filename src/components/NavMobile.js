import { Close } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavMobile = ({active,showMenu}) => {
  return (
    <ul className={active ? 'flex-col fixed inset-0 left-1/4 flex items-center justify-center gap-12 uppercase bg-stone-50/10 backdrop-blur-md z-10000 lg:hidden ' : 'hidden'}>
      <Close onClick={showMenu} className='cursor-pointer' />
      <li><Link to='/'>Pricing</Link></li>
      <li><Link to='/'>Clients</Link></li>
      <li><Link to='/'>Work</Link></li>
      <li><Link to='/'>Testimonials</Link></li>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/Login'>Login</Link></li> 
    </ul>
  );
};

export default NavMobile