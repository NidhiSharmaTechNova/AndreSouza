import { useRef, useEffect, useState } from "react";
import "./ScratchFloatCard.css";

import frontImg from "../../Components/assets/chess-cover.png";
import backImg from "../../Components/assets/background.svg";
import sticker1 from "../../Components/assets/chess-poster.svg";
import sticker2 from "../../Components/assets/king-chess-poster.svg";
import cursorImg from "../../Components/assets/cursor.svg";

export default function ScratchFloatCard() {
  const canvasRef = useRef(null);
  const [scratching, setScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    canvas.width = w;
    canvas.height = h;

    const img = new Image();
    img.src = frontImg;

    img.onload = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, 0, 0, w, h);
    };
  }, []);

  const checkScratch = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let erased = 0;

    for (let i = 3; i < imgData.data.length; i += 4) {
      if (imgData.data[i] === 0) erased++;
    }

    const percent = erased / (imgData.data.length / 4);

    if (percent > 0.35) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setRevealed(true);
    }
  };

  const scratch = (e) => {
    if (!scratching || revealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkScratch();
  };

  return (
    <div className={`scratch-card ${revealed ? "revealed" : ""}`}
    >
      <div className="card-back">
        <img src={backImg} className="bg" alt="" />

        <div className="reveal-text">
          <div className="lines l1">
            PLAY   PLAY   PLAY   PLAY  PLAY  PLAY
          </div>
          <div className="lines l2">
            PLAY  PLAY  PLAY  PLAY  PLAY  PLAY
          </div>
        </div>

        <img src={sticker1} className="st s1" alt="" />
        <img src={sticker2} className="st s2" alt="" />
      </div>

      <canvas
        ref={canvasRef}
        className="scratch-canvas"
        onMouseDown={() => setScratching(true)}
        onMouseUp={() => setScratching(false)}
        onMouseLeave={() => setScratching(false)}
        onMouseMove={scratch}
         style={{
    cursor: `url(${cursorImg}) 16 16, auto`
  }}
      />
    </div>
  );
}
