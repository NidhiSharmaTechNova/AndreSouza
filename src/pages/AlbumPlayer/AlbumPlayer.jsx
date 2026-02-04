
// import img from "../../Components/assets/initial_d.webp"

// import { useState } from "react";
// import "./AlbumPlayer.css";

// export default function AlbumPlayer() {
//   const [open, setOpen] = useState(false);


//   return (
//     <div
//       className={`album-wrapper ${open ? "open" : ""}`}
//       onClick={() => setOpen(!open)}
//     >
      
//       <div className="vinyl">
//         <img src={img} alt="label" className="vinyl-label" />
//       </div>

      
//       <div className="album-cover">
//         <img src={img} alt="album" />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import "./AlbumPlayer.css";
import defaultAlbum from "../../Components/assets/album7";
import defaultVinyl from "../../Components/assets/album7";

export default function AlbumPlayer({ albumImg = defaultAlbum, vinylImg = defaultVinyl }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`album-wrapper ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      {/* Vinyl */}
      <div className="vinyl">
        <img src={vinylImg} alt="vinyl" className="vinyl-label" />
      </div>

      {/* Album Cover */}
      <div className="album-cover">
        <img src={albumImg} alt="album" />
      </div>
    </div>
  );
}
