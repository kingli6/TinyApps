import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerStyles from './banner.module.css';
import carShow from '../../../assets/images/carExibitionMed.jpg' 
import pebbels from '../../../assets/images/pebbelsMed.jpg' 
import pilot from '../../../assets/images/FightPilotMed.jpg' 

const Banner = () => {
  return (
    <Carousel emulateTouch={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
      <div>
          <img className={bannerStyles.bannerImg} src={carShow} alt="A car exhibition" />
        <div className={bannerStyles.heading}>Testing Carousel Component</div>
        <div className={bannerStyles.desc}>Exhibition</div>
        <div className={bannerStyles.cta}>Button</div>
      </div>
      <div>
          <img className={bannerStyles.bannerImg} src={pebbels} />
          <div className={bannerStyles.heading}>Doc</div>

      </div>
      <div>
          <img className={bannerStyles.bannerImg} src={pilot} alt="A fight pilot"/>
          <div className={bannerStyles.heading}>Pilot</div>
      </div>
    </Carousel>
  )
}

export default Banner
