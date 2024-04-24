import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg1 from '../Images/carousel-1.png';
import bg2 from '../Images/carousel-2.png';
import bg3 from '../Images/carousel-3.png';
import './Header.css';
const Header = () => {
  return (
    <div className="carousel-wrapper">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      interval={5000} 
      showArrows={false}
      showIndicators={false}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
      centerMode={true}
      centerSlidePercentage={100} 
      responsive={[
        {
          breakpoint: 767, 
          settings: {
            centerMode: false,
          },
        },
      ]}
    >
      <div>
        <img src={bg1} alt="Image 1"  />
        <div className='nn1'>
            <p >Buy Less, Buy Better!<br/>Authentic source of truth for your sustainability needs</p>
            <button>About us</button>
        </div>
      </div>

      <div>
        <img src={bg2} alt="Image 2" />
        <div className='nn1'>
            <p >Follow us on Instagram<br/>For Climate news ,lifestyle, tips and updates</p>
            <button>Contact us</button>
        </div>
      </div>

      <div> 
        <img src={bg3} alt="Image 3" />
        <div className='nn1 nn2'>
        <p >Buy Less, Buy Better!<br/>Authentic source of truth for your sustainability needs.</p>
        <button>Get in Touch</button>
        </div>
      </div>
   
    </Carousel>
    </div>
  );
};

export default Header;
