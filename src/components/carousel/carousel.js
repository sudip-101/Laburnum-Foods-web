import React from "react";
import "../../variables.css";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "../carousel/carousel.css";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/img4.jpeg";
import img5 from "../../assets/img/img5.jpeg";

const flickityOptions = {
  initialIndex: 0,
};

function Carousel() {
  return (
    <div class="carousel-container">
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className="carousel-cell">
          <img src={img1} alt="" />
        </div>
        <div className="carousel-cell">
          <img src={img2} alt="" />
        </div>
        <div className="carousel-cell">
          <img src={img3} alt="" />
        </div>
        <div className="carousel-cell">
          <img src={img4} alt="" />
        </div>
        <div className="carousel-cell">
          <img src={img5} alt="" />
        </div>
      </Flickity>
    </div>
  );
}

export default Carousel;

// const CarouselSlider = () => {
//   return (
//     <div className="carousel-container">
//       <div className="carousel-slide">
//         <img src={img1} alt="" />
//         <img src={img2} alt="" />
//         <img src={img3} alt="" />
//         <img src={img4} alt="" />
//         <img src={img5} alt="" />
//       </div>
//     </div>
//   );
// };

// export default CarouselSlider;
