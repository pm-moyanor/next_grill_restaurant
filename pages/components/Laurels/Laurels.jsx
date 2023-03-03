import SubHeading from "../Subheading/Subheading";
import MenuItem from "../MenuItem/MenuItem";
import data from "../../../public/data";
import styles from "./Laurels.module.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className={`${styles["app__laurels_awards-card"]}`}>
    <img src={imgUrl} alt="awards" />
    <div className={`${styles["app__laurels_awards-card_content"]}`}>
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className={`${styles["app__laurels_awards"]}`}>
          {data.awards.map((award) => {
            return <AwardCard award={award} key={award.title} />;
          })}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src="images/laurels.png" ></img>
      </div>
    </div>
  );
};

export default Laurels;
