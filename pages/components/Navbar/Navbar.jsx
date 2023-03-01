import styles from "./Navbar.module.css";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../../constants/images";

// import image error in path? error when render as imeges.key

// work on adding module CSS to components as prop classname



const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return(
  <nav className={`${styles.app__navbar} app__navbar`}>
    <div>
      <img
       
        style={{ width: 150 }}
        src="/_next/static/media/gericht.ef839da6.png"
        alt="app logo"
      ></img>
    </div>
    <ul className={`${styles["app__navbar-links"]} app__navbar-links`}>
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className={styles['app__navbar-login']}>
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
    <div className={styles['app__navbar-smallscreen']}>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />
      
      {toggleMenu && (
            <div className={styles['app__navbar-smallscreen_overlay']}>
            <MdOutlineRestaurantMenu
              
              className={styles["overlay__close"]}
              onClick={() => {setToggleMenu(false)}}
            />
         
    
          <ul className={styles['app__navbar-smallscreen_links']}>
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">About</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          </div>
      )}
  
    </div>
  </nav>
)};

export default Navbar;
