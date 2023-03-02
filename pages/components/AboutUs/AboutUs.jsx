
import styles from "./AboutUs.module.css";

export default function AboutUs (){     
  return (
  <div
    className={`${styles['app__aboutus']} ${'app__bg'} flex__center section__padding`}
    id="about"
  >
    <div className={`${styles['app__aboutus-overlay']} flex__center`}>
      <img src="/images/G.png"></img>
    </div>
    <div className={`${styles['app__aboutus-content']} flex__center`}>
    <div className={`${styles['app__aboutus-content_about']} flex__center`}>
      <h1 className="headtext__cormorant">About us</h1>
      <img src="/images/spoon.png"/>
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button" className="custom__button">Know more</button>
    </div>
      <div className={`${styles['app__aboutus-content_knife']} flex__center`}>
        <img src="/images/knife.png"/>
      </div>
    <div className={`${styles['app__aboutus-content_history']} flex__center`}>
      <h1 className="headtext__cormorant">Our History</h1>
      <img src="/images/spoon.png"/>
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button" className="custom__button">Know more</button>
    </div>
  </div>
  </div>
)

};

