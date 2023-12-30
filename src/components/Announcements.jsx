import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnnouncementCard from './AnnouncementCard';


const Announcements = () => {

    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        
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
                slidesToShow: 2,
                slidesToScroll: 2,
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
          ]
      };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold m-6 text-center text-[#30475E]">Announcements</h2>
   
        <Slider {...settings}>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
          <AnnouncementCard/>
        </Slider>
      </div>
  )
}

export default Announcements