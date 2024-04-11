import data from './data'
import { IoIosColorPalette } from "react-icons/io";
import './navbar.css'
import { useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpenMenu(false); // Close the menu when a link is clicked
  };
  return (
    <nav>
      <div className="container nav__container ">
      <h3> <a href="">Ashutosh<br/>Singh</a></h3>
    
      <button className='toggle__btn' onClick={toggleMenu}>{ openMenu ?<CgClose className='menu__icon'/> : <CgMenu className='menu__icon'/>}</button>
      <ul className={`nav__menu ${openMenu && 'is__open'} `}>
       {data.map(item=><li key={item.id}><a href={item.link} className={item.link === activeLink ? 'active' : ''}onClick={() => handleLinkClick(item.link)}>{item.title}</a></li>)}
     </ul>
      </div>
    </nav>
  )
}

export default Navbar