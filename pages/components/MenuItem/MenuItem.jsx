import styles from "./MenuItem.module.css";

const MenuItem = ({ title, price, tags }) => (
  <div className={`${styles["app__menuitem"]}`}>
    <div className={`${styles["app__menuitem-head"]}`}>
      <div className={`${styles["app__menuitem-name"]}`}>
        <p className="p__opensans" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className={styles["app__menuitem-dash"]} />

      <div className={`${styles["app__menuitem-price"]}`}>
        <p className="p__opensans">{price}</p>
      </div>

      <div className={`${styles["app__menuitem-tags"]}`}>
        <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
