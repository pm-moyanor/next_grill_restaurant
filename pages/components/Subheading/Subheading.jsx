
import styles from "./Subheading.module.css";

const Subheading = ({ title }) => {
  return (
    <div style={{marginBottom : '1rem'}}>
      <p className="p__cormorant">{title}</p>

      <img src='/images/spoon.png' alt="spoon_image" className="spoon__img"/>
    </div>
  );
};

export default Subheading;
