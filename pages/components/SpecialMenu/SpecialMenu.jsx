import Subheading from "../Subheading/Subheading";
import data from "../../../public/data";
import styles from "./SpecialMenu.module.css";
import MenuItem from "../MenuItem/MenuItem";

const SpecialMenu = () => {
  return (
    <div
      className={`${styles["app__specialMenu"]} flex__center section__padding`}
      id="menu"
    >
      <div className={`${styles["app__specialMenu-title"]}`}>
        <img src="/images/spoon.png" />
        <Subheading title={"Menu that fits your palatte"} />
        <h1 className="headtext__cormornant"></h1>
      </div>

      <div className={`${styles["app__specialMenu-menu"]}`}>
        <div className={`${styles["app__specialMenu-menu_wine"]} flex__center`}>
          <p className={`${styles["app__specialMenu-menu_heading"]}`}>
            Wine & Beer
          </p>
          <div className={`${styles["app__specialMenu-menu_items"]}`}>
            {data.wines.map((wine, index) => {
              return (
                <MenuItem
                  key={wine.title}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>
        
        <div className={`${styles["app__specialMenu-menu_img"]}`}>
          <img src="/images/menu.png" />
        </div>

        <div
          className={`${styles["app__specialMenu-menu_cocktails"]} flex__center`}
        >
          <p className={`${styles["app__specialMenu-menu_heading"]}`}>
            Cocktails
          </p>
          <div className={`${styles["app__specialMenu-menu_items"]}`}>
            {data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={cocktail.title}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
