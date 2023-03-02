import { useState } from "react";

import Subheading from "../Subheading/Subheading";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div
      className={`${styles["app__header"]} app__wrapper section__padding`}
      id="home"
    >
      <div className="app__wraper_info">
        <Subheading title="Chase the new flavour" />
        <h1 className={styles["app__header-h1"]}>The key to fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img
          src="/images/welcome.png"
          style={{ width: "500px" }}// added inline sizing instead !!
          alt="header img"
        />
      </div>
    </div>
  );
};

export default Header;
