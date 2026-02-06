import { useEffect } from "react";
import "./Countdown.css";

export default function Countdown() {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      flip(
        document.querySelector("[data-hours]"),
        String(now.getHours()).padStart(2, "0")
      );
      flip(
        document.querySelector("[data-minutes]"),
        String(now.getMinutes()).padStart(2, "0")
      );
      flip(
        document.querySelector("[data-seconds]"),
        String(now.getSeconds()).padStart(2, "0")
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function flip(flipCard, newValue) {
    const topHalf = flipCard.querySelector(".top");
    const startValue = topHalf.textContent;
    if (newValue === startValue) return;

    const bottomHalf = flipCard.querySelector(".bottom");

    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    topFlip.textContent = startValue;

    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");
    bottomFlip.textContent = newValue;

    bottomHalf.textContent = startValue;

    topFlip.addEventListener("animationstart", () => {
      topHalf.textContent = newValue;
    });

    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });

    bottomFlip.addEventListener("animationend", () => {
      bottomHalf.textContent = newValue;
      bottomFlip.remove();
    });

    flipCard.append(topFlip, bottomFlip);
  }

  return (
    <div className="container">
      <div className="container-segment">
        <div className="flip-card" data-hours>
          <div className="top">00</div>
          <div className="bottom">00</div>
        </div>
      </div>

      <div className="container-segment">
       
        <div className="flip-card" data-minutes>
          <div className="top">00</div>
          <div className="bottom">00</div>
        </div>
      </div>

      <div className="container-segment">
        <div className="flip-card" data-seconds>
          <div className="top">00</div>
          <div className="bottom">00</div>
        </div>
      </div>
    </div>
  );
}
