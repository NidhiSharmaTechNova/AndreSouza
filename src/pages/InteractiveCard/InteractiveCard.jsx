import { useEffect, useState } from "react";
import "./InteractiveCard.css";

import img1 from "../../Components/assets/intercard1";
import img2 from "../../Components/assets/intercard2";
import img3 from "../../Components/assets/intercard3";


export default function InteractiveCard() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (

    <div
        className={`floating-card ${mounted ? "show" : ""}`}
        onClick={handleClick}
        style={{
          cursor:"pointer",
        }}
      >
        <img src={images[index]} alt="card" />
      </div>
  
    
  );
}
