import React from "react";
import {Slide } from "react-slideshow-image";
import "./slideshow.css";
import Image from "../../Datafiles/BannerSildeshowImage";


const Slideshow = () => {

    const properties = {
      duration: 5000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
     
    }

      return (
        <div className="slide-container">
          <Slide  {...properties} className="adjust">
           {Image.map((article,index)=><div key={index}>
              <div className="each-slide">
           <img  className="image-sizing" src={article.name}></img>
            </div>
             </div>
            )}
         </Slide>
        </div>)
  }
  
  export default Slideshow;