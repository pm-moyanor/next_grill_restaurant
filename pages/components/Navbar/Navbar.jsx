import styles from "./Navbar.module.css";
//import { GiHamburgerMenu } from "react-icons/gi";
//import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../../constants/images"
import './Navbar.module.css'
// import image error in path? error when render as imeges.key

// work on adding module CSS to components as prop classname 
const Navbar = () => (
  <nav className={`${styles.app__navbar} app__navbar`} >
    <div className="app__navbar-logo">
      <img src="/_next/static/media/gericht.ef839da6.png" alt="app logo"></img>
    </div>
    <ul className="app__navbar-links">
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
  </nav>
);

export default Navbar;
