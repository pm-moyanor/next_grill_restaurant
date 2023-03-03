import styles from "./Intro.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { useRef ,useState} from "react";

const Intro = () => {

  const [playVideo,setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo=()=>{
setPlayVideo((prevPlayVideo)=>!prevPlayVideo)
if(playVideo){
  vidRef.current.pause()
}else{
  vidRef.current.play()
}
  }


  return(
  <div className={styles.app__video}>
    <video
      src="./images/meal.mp4"
      type="video/mp4"
      loop
      controls={false}
      muted
      ref={vidRef}
    />

    <div className={`${styles['app__video-overlay']} flex__center`}>
       <div className={`${styles['app__video-overlay_circle']} flex__center`}onClick={handleVideo}>

      {playVideo ?  <BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill color="#fff" fontSize={30}/> }
       </div>
    </div>


    
  </div>
)
  }

export default Intro;
