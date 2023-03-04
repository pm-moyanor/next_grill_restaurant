import Subheading from "../Subheading/Subheading";
import { useState } from "react";
import styles from "../Newsletter/Newsletter.module.css";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  return (
    <div className={styles["app__newsletter"]}>
      <div className={styles["app__newsletter-heading"]}>
        <Subheading title={"Newsletter"} />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <div className={styles["app__newsletter-input"]}>
        <input
          type="text"
          placeholder="email address"
          value={inputValue}
          onChange={() => {
            handleSubmit(e);
          }}
        />

        <button type="submit" className="custom__button">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
