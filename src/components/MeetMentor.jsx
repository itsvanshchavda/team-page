import React from "react";
import BiologyMentors from '../data/mentors';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Main.css';

const MeetMentor = ({mentors , title , heading}) => {

    const settings = {
        dots: true,
        focusOnSelect: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3500,
  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

       
    };

    return (
        <div className='MeetMentors'>
            <h1>{heading}</h1>
            <h3>{title}</h3>
            <Slider {...settings}>
                {mentors.map((mentor) => (
                    <div key={mentor.id} className='' style={{ backgroundColor: '#f0f0f0' }}>
                        <div className="card-top">
                            <img src={mentor.logo} alt="" />
                            <p>{mentor.name}</p>
                        </div>
                        <div className="card-bottom">
                            <p>{mentor.univercity}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MeetMentor;
