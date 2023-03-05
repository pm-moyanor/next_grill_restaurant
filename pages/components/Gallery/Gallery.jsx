import styles from "../Gallery/Gallery.module.css";
import { useRef } from "react";
import Subheading from "../Subheading/Subheading";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  let images = [];
  function makeArray() {
    for (let i = 1; i < 5; i++) {
      images.push(`images/gallery0${i}.png`);
    }
    return images;
  }
  makeArray();
  //console.log(images[0]);

  const random = () => Math.floor(Math.random() * 100000)
  console.log(random())
  return (
    <div className={`${styles["app__gallery"]} flex__center`}>
      <div className={`${styles["app__gallery-content"]}`}>
        <Subheading title={"Instagram"} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas
        </p>
        <button type="button" className="custom__button"></button>
      </div>
      <div className={`${styles["app__gallery-images"]}`}>
        <div
          className={`${styles["app__gallery-images_container"]}`}
           ref={scrollRef}
        >
          {images.map((image, index) => {
            return(
              <div key={random()} className={`${styles["app__gallery-images_card"]}`}>
              <img src={`${image}`} alt="gallery" />
            </div>
            )
     
          })}
        </div>
        <div className={`${styles["app__gallery-images_arrows"]}`}>
          <BsArrowLeftShort
            className={`${styles["app__gallery-arrow-icon"]}`}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={`${styles["app__gallery-arrow-icon"]}`}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
