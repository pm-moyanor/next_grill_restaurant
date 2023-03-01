
import styles from "./Subheading.module.css";

const Subheading = ({ title }) => {
  return (
    <div>
      <p className="p__cormorant">{title}</p>

      <img src='/images/spoon.png' alt="spoon image" />
    </div>
  );
};

export default Subheading;
