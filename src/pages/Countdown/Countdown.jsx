//  import React from 'react'
//  import "./Countdown.css"

//  function Countdown() {
//    return (
//      <div className='flip-card flip'>
//         <div className='top'>4</div>
//         <div className='bottom'>4</div>
//      </div>
//    )
//  }

//  export default Countdown


// import React, { useEffect, useState } from "react";
// import "./Countdown.css";

// function FlipCard({ value, delay = 0 }) {
//   const [current, setCurrent] = useState(value);
//   const [prev, setPrev] = useState(value);
//   const [flip, setFlip] = useState(false);

//   useEffect(() => {
//     if (value !== current) {
//       setPrev(current);
//       setFlip(true);

//       setTimeout(() => {
//         setCurrent(value);
//         setFlip(false);
//       }, 500);
//     }
//   }, [value]);

//   return (
//     <div
//       className={`flip-card ${flip ? "flip" : ""}`}
//       data-prev={prev}
//       data-current={value}
//     >
//       <div className="top">
//         <span>{value}</span>
//       </div>
//       <div className="bottom">
//         <span>{value}</span>
//       </div>
//     </div>
//   );
// }

// export default function Countdown() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const t = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(t);
//   }, []);

//   const h = String(time.getHours()).padStart(2, "0");
//   const m = String(time.getMinutes()).padStart(2, "0");
//   const s = String(time.getSeconds()).padStart(2, "0");

//   return (
//     <div style={{ display: "flex", gap: "14px" }}>
//       <FlipCard value={h} />
//       <FlipCard value={m} />
//       <FlipCard value={s} />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import "./Countdown.css";

function FlipCard({ value }) {
  const [current, setCurrent] = useState(value);
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== current) {
      setPrev(current);
      setFlip(true);

      const t = setTimeout(() => {
        setCurrent(value);
        setFlip(false);
      }, 600);

      return () => clearTimeout(t);
    }
  }, [value, current]);

  return (
    <div className="flip-card">
      {/* STATIC */}
      <div className="card-upper">
        <div className="digit">{current}</div>
      </div>
      <div className="card-lower">
        <div className="digit">{current}</div>
      </div>

      {/* FLIP */}
      {flip && (
        <>
          <div className="flip-upper">
            <div className="digit">{prev}</div>
          </div>
          <div className="flip-lower">
            <div className="digit">{value}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const h = String(time.getHours()).padStart(2, "0");
  const m = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");

  return (
    <div className="flip-clock">
      <FlipCard value={h} />
      
      <FlipCard value={m} />
      
      <FlipCard value={s} />
    </div>
  );
}

