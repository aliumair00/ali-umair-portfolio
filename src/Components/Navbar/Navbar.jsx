import React, { useRef, useState } from 'react';
import Underline from '/src/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '/src/assets/menu_open.svg';
import menu_close from '/src/assets/menu_close.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const menuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const menuClose = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleMenuItemClick = (section) => {
    setMenu(section);
    menuClose();
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='flex items-center justify-between px-[50px] py-[40px] md:px-[8vw] md:py-[20px] absolute top-0 w-full z-50'
    >
      <h1 className='font-bold text-[3.5vw] whitespace-nowrap bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent'>Ali Umair</h1>

      <img
        src={menu_open}
        alt=""
        onClick={menuOpen}
        className='block md:hidden fixed right-[30px] top-[30px] cursor-pointer z-10'
      />

      {/* Backdrop for click-outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 block md:hidden transition-opacity duration-500"
          onClick={menuClose}
        />
      )}

      <ul
        ref={menuRef}
        className={`flex flex-col items-start gap-[30px] bg-[#1F0016] w-[360px] h-full z-50 transition-all duration-500 fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} md:static md:flex-row md:items-center md:gap-9 md:bg-transparent md:w-auto md:h-auto md:transition-none text-[18px] cursor-pointer list-none`}
      >
        <img
          src={menu_close}
          onClick={menuClose}
          alt=''
          className='block md:hidden relative top-[30px] left-[290px] w-[30px] cursor-pointer'
        />

        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item} className='flex gap-[20px] text-[30px] pl-[100px] md:p-0 md:text-[18px] md:flex-col md:gap-[5px]'>
            <AnchorLink href={`#${item}`} offset={50}>
              <p onClick={() => handleMenuItemClick(item)} className='whitespace-nowrap capitalize'>
                {item === "about" ? "About me" : item === "work" ? "Portfolio" : item}
              </p>
            </AnchorLink>
            {menu === item && <img src={Underline} alt="underline" className='mx-auto hidden md:flex' />}
          </li>
        ))}
      </ul>

      <div className='hidden md:flex items-center gap-[20px]'>
        <AnchorLink href='#contact' offset={50}>
          <button className='bg-gradient-to-r from-[#DA7C25] to-[#B923E1] rounded-[30px] px-[25px] py-[15px] hover:scale-[1.05] transition-transform duration-500 cursor-pointer text-[18px]'>
            Contact With Me
          </button>
        </AnchorLink>
      </div>
    </motion.div>
  );
}

export default Navbar;
