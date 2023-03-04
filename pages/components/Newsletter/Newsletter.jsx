import Subheading from "../Subheading/Subheading";
import { useState } from "react";
import styles from "../Newsletter/Newsletter.module.css"

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  return (
    <div className={`${"app__newsletter"} app__wrapper flex__center`}>
      <Subheading title={"Newsletter"} />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>

      <label>
        <input
          type="text"
          placeholder="email address"
          value={inputValue}
          onChange={() => {
            handleSubmit(e);
          }}
        />
      </label>
      <button type="submit" className="custom__button">
        subscribe
      </button>
    </div>
  );
};

export default Newsletter;
