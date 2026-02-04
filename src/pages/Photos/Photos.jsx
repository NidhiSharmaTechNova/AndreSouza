import React, { useState } from "react";
import "./Photos.css";

import img1 from "../../Components/assets/DSCF1585.jpg";
import img2 from "../../Components/assets/DSCF1597.jpg";
import img3 from "../../Components/assets/DSCF1603.jpg";
import img4 from "../../Components/assets/DSCF1621.jpg";
import img5 from "../../Components/assets/DSCF1649.jpg";
import img6 from "../../Components/assets/DSCF1667.jpg";
import img7 from "../../Components/assets/DSCF1709.webp";
import img8 from "../../Components/assets/DSCF1728.jpg";
import img9 from "../../Components/assets/DSCF1816.jpg";
import img10 from "../../Components/assets/DSCF1817.jpg";
import img11 from "../../Components/assets/DSCF1870.jpg";
import img12 from "../../Components/assets/DSCF1439.webp";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

export default function Photos({ setHideBottomNav }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openSlider = (i) => {
    setIndex(i);
    setOpen(true);
    setHideBottomNav(true);  // 👈 bottom nav hide
  };

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

const closeSlider = () => {
  setOpen(false);
  setHideBottomNav(false);  // 👈 bottom nav show
};

  return (
    <>
      {/* GRID */}
      <div className="photos-page">
        {images.map((img, i) => (
          <img key={i} src={img} alt="" onClick={() => openSlider(i)} />
        ))}
      </div>

      {/* SLIDER */}
      {open && (
        <div className="white-slider">
          <div className="slider-wrapper">
            {/* close on image */}
            <span className="close" onClick={closeSlider}>×</span>

            {/* left arrow on image */}
            <span className="nav left" onClick={prev}>❮</span>

            <div className="slider-track">
              <div
                className="slider-inner"
                style={{ transform: `translateX(-${index * 33.33}%)` }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`slide ${i === index ? "active" : ""}`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            {/* right arrow on image */}
            <span className="nav right" onClick={next}>❯</span>
          </div>
        </div>
      )}
    </>
  );
}
