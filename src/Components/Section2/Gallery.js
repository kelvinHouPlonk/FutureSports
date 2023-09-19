import React from 'react';

function Gallery() {
  return (
    <section className='Gallery'>
      <h2>All the Photos and Videos you would ever want</h2>
      <div id="carousel">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hU2m_Dh5mS4?start=54&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <figcaption className="img_placehold">
            <b>BEST SONG EVER WOULD SUGGEST A LISTEN SESH</b>
          </figcaption>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Lionel_Andr%C3%A9s_Messi_Cuccittini.jpg"
            alt="Image 1"
          />
          <figcaption className="img_placehold">Goalie Kicking Ball</figcaption>
        </div>
        <div>
          <img src="https://picx.zhimg.com/70/v2-876538dac03b0a9a0dad3f1aec4f4f92_1440w.image?source=172ae18b&biz_tag=Post" alt="Headcoach of the Team" />
          <figcaption>Headcoach of the Team</figcaption>
        </div>
      </div>
      <button id="prevBtn">Previous</button>
      <button id="nextBtn">Next</button>
    </section>
  );
}

export default Gallery;
