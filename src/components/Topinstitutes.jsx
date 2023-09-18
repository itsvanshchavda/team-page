import React from 'react';
import topInstitutes from '../data/institute';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.css';

const TopInstitutes = () => {
  const settings = {
    dots: true,
    infinite: true, 
    autoplay: true, 
    autoplaySpeed: 4000, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    
  };

  return (
    <div className='cards'>
      <Slider {...settings}>
        {topInstitutes.map((institute) => (
          <div key={institute.id} className='card' style={{ backgroundColor: '#f0f0f0'}}>
            <div className="card-top">
              {/* <img src={institute.logo} alt={institute.name + ' Logo'} /> */}
              <p>{institute.name}</p>
            </div>
            <div className="card-bottom">
              <p>{institute.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopInstitutes;
