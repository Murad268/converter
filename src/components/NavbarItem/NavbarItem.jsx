
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbarİtem = ({link}) => {
   return (
      <NavLink to={link.url} className='navbarItem'>
         {link.link}
      </NavLink>
   );
};

export default Navbarİtem;