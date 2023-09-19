import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css'; 


function Gallery() {
  return (
    <section className='Gallery'>
      <h2 className='h2Clear'>All the Photos and Videos you would ever want</h2>
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        infiniteLoop={true} // Loop through items infinitely
        autoPlay={true} // Automatically play the carousel
        interval={3000} // Time between slides in milliseconds
      >
        <div>
          <iframe
            className="video-frame" // Add a class name here
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hU2m_Dh5mS4?start=54&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="legend">BEST SONG EVER WOULD SUGGEST A LISTEN SESH</p>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Lionel_Andr%C3%A9s_Messi_Cuccittini.jpg"
            alt="Image 1"
          />
          <p className="legend">Goalie Kicking Ball</p>
        </div>
        <div>
          <img
            src="https://picx.zhimg.com/70/v2-876538dac03b0a9a0dad3f1aec4f4f92_1440w.image?source=172ae18b&biz_tag=Post"
            alt="Headcoach of the Team"
          />
          <p className="legend">Headcoach of the Team</p>
        </div>
      </Carousel>
    </section>
  );
}

export default Gallery;
