import React from "react";
import "./Book.css";
import bookImg from "../../Components/assets/the_making_of_prince_of_persia (1).webp";

export default function Book({
  cover,
  title = "The Making of Prince of Persia",
  backColor = "#0b4cff",
  pageColor = "#ffffff"
}) {

  const finalCover = cover || bookImg;

  return (
    <div className="book-wrapper">

      <div className="book-3d" tabIndex={0}>

     
        <div
          className="page back-blue"
          style={{ background: backColor }}
        ></div>

        
        <div
          className="page white-page"
          style={{ background: pageColor }}
        ></div>

      
        <div className="book">
          <img src={finalCover} alt={title} />
        </div>

      </div>

      <div className="book-title">{title}</div>

    </div>
  );
}
