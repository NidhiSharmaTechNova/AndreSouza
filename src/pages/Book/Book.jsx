// import React from "react";
// import "./Book.css";
// import bookImg from "../../Components/assets/the_making_of_prince_of_persia (1).webp";

// export default function Book() {
//   return (
//     <div className="book-wrapper">
//       <div className="book-stack">

//         <div className="page back-blue"></div>


//         <div className="page white-page"></div>


//         <div className="book">
//           <img src={bookImg} alt="book" />
//         </div>
//       </div>

//       <div className="book-title">
//         The Making of Prince of Persia
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import "./Book.css";
// import bookImg from "../../Components/assets/the_making_of_prince_of_persia (1).webp";

// export default function Book({ cover,
//   title,
//   backColor = "#0b4cff",
//   pageColor = "#ffffff" }) {
//   return (
//     <div className={`book-wrapper ${className}`}>
//       <div
//         className="book-3d"
//         data-state="closed"
//         tabIndex={0}
//       >
//         {/* BACK BLUE PAGE */}
//         <div className="page back-blue"></div>

//         {/* WHITE PAGE */}
//         <div className="page white-page"></div>

//         {/* FRONT BOOK */}
//         <div className="book">
//           <img src={bookImg} alt="book" />
//         </div>
//         <div className="book-title">
//         The Making of Prince of Persia
//       </div>
//       </div>


//     </div>
//   );
// }


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

        {/* BACK PAGE */}
        <div
          className="page back-blue"
          style={{ background: backColor }}
        ></div>

        {/* CENTER PAGE */}
        <div
          className="page white-page"
          style={{ background: pageColor }}
        ></div>

        {/* FRONT COVER */}
        <div className="book">
          <img src={finalCover} alt={title} />
        </div>

      </div>

      <div className="book-title">{title}</div>

    </div>
  );
}
