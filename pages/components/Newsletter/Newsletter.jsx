import Subheading from "../Subheading/Subheading";
import { useState } from "react";

import styles from "../Newsletter/Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { email: email };
//how to store in database ? local api ? 
    const JSONdata = JSON.stringify(data);

    setEmail('')
  }

  return (
    <div className={styles["app__newsletter"]}>
      <div className={styles["app__newsletter-heading"]}>
        <Subheading title={"Newsletter"} />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={styles["app__newsletter-input"]}
        action="pages/api/subscribe"
        method="post"
      >
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit" className="custom__button">
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
