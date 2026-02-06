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
      
      <div className="vinyl">
        <img src={vinylImg} alt="vinyl" className="vinyl-label" />
      </div>

      <div className="album-cover">
        <img src={albumImg} alt="album" />
      </div>
    </div>
  );
}
