import React, { useRef, useState } from 'react';
import './navbar.css';
import Underline from '/src/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '/src/assets/menu_open.svg';
import menu_close from '/src/assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const menuOpen = () => {
    menuRef.current.style.right = "0";
    document.body.style.overflow = "hidden";
  };

  const menuClose = () => {
    menuRef.current.style.right = "-100%";
    document.body.style.overflow = "auto";
  };

  const handleMenuItemClick = (section) => {
    setMenu(section);
    menuClose();
  };

  return (
    <div className='navbar flex items-center justify-between relative'>
      <h1 className='logo font-bold text-[3.5vw] whitespace-nowrap'>Ali Umair</h1>
      <img src={menu_open} alt="" onClick={menuOpen} className='nav-mob-open lg:hidden' />
      <ul ref={menuRef} className='nav-menu flex gap-9 text-[18px] cursor-pointer list-none'>
        <img src={menu_close} onClick={menuClose} alt='' className='nav-mob-close' />
        <li>
          <AnchorLink href="#home">
            <p onClick={() => handleMenuItemClick("home")} className='whitespace-nowrap'>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={Underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink href="#about" offset={50}>
            <p onClick={() => handleMenuItemClick("about")} className='whitespace-nowrap'>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={Underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink href="#work" offset={50}>
            <p onClick={() => handleMenuItemClick("work")} className='whitespace-nowrap'>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={Underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink href="#contact" offset={50}>
            <p onClick={() => handleMenuItemClick("contact")} className='whitespace-nowrap'>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={Underline} alt="underline" /> : <></>}
        </li>
      </ul>
      <div className='btn pointer text-[18px] hover:scale-[1.05] transition 0.8s lg:flex hidden'>
        <AnchorLink href='#contact' offset={50}>
          <button>Contact With Me</button>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
