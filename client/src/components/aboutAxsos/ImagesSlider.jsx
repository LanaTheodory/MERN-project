import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["/../../images/1.jpg", "/../../images/2.JPG"];

const ImagesSlider = () => {
  return (
    <div className="slide-container" style={{ overflow: "hidden" }}>
      <Slide>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              height: "600px",
              backgroundSize: "cover",
            }}
          >
            <span style={{ color: "white" }}>First Cohort</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              height: "600px",
              backgroundSize: "cover",
            }}
          >
            <span style={{ color: "white" }}>Seconed Cohort</span>
          </div>
        </div>
        {/* <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              height: "600px",
              backgroundSize: "cover",
            }}
          >
            <span>Slide 3</span>
          </div>
        </div> */}
      </Slide>
    </div>
  );
};
export default ImagesSlider;
