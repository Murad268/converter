import React, {useState} from 'react';
import Navbarİtem from '../NavbarItem/NavbarItem';
import './navbar.css'
const Navbar = () => {
   const [links, setLinks] = useState([
      {id: 0, link: "Главная страница", url: '/'},
      {id: 1, link: "Конвертировать валюту", url: '/cur'}
   ])
   return (
      <nav className='navbar'>
         <div className="navbar__left">
            MuradConverter
         </div>
         <div className="navbar__right">
            {
               links.map(link => {
                  return <Navbarİtem link={link} key={link.id}/>
               })
            }
         </div>
      </nav>
   );
};

export default Navbar;