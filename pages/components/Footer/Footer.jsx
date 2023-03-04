import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import Newsletter from "../Newsletter/Newsletter";
import FooterOverlay from "../FooterOverlay/FooterOverlay";

import styles from "./Footer.module.css";

const Footer = () => {
  console.log(Newsletter);
  return (
    <div className={`${styles["app__footer"]} section__padding`} id="login">
      <FooterOverlay />
      <Newsletter />

      <div className={`${styles["app__footer-links"]}`}>
        <div className={`${styles["app__footer-links_contact"]}`}>
          <h1 className={`${styles["app__footer-headtext"]}`}>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
