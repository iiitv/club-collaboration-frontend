import React from "react";
import { Slide } from "react-slideshow-image";
import "./slideshow.css";
import { connect } from "react-redux";
// import Image from "../../Datafiles/BannerSildeshowImage";

const Slideshow = (props) => {
  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };
  let Images = [];
  props.name.map((name) => {
    return (Images = [...Images, name]);
  });

  return (
    <div className="slide-container">
      <Slide {...properties} className="adjust">
        {Images.map((index) => (
          <div key={index.id}>
            <div className="each-slide">
              <img className="image-sizing" src={index.name} alt={index.alt} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

// export default Slideshow;
const mapStateToprops = (state) => {
  return {
    name: state.banner.name,
  };
};
export default connect(mapStateToprops)(Slideshow);
