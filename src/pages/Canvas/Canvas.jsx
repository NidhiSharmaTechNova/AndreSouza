// import React, { useEffect, useRef, useState } from 'react';
// import './Canvas.css';

// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [hasWrittenHello, setHasWrittenHello] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     const width = canvas.width;
//     const height = canvas.height;


//     ctx.fillStyle = '#f5e6d3';
//     ctx.fillRect(0, 0, width, height);
//     ctx.strokeStyle = '#c9b896';
//     ctx.lineWidth = 4;
//     ctx.strokeRect(0, 0, width, height);


//     if (!hasWrittenHello) {
//       const text = 'hello';
//       ctx.font = 'italic 80px "Segoe Print", cursive';
//       ctx.fillStyle = '#5b7cfa';
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';

//       let charIndex = 0;
//       const drawChar = () => {
//         if (charIndex < text.length) {
//           const x = width / 2 - 80 + charIndex * 45;
//           const y = height / 2;
//           ctx.fillText(text[charIndex], x, y);
//           charIndex++;
//           setTimeout(drawChar, 150);
//         } else {
//           setHasWrittenHello(true);
//         }
//       };
//       drawChar();
//     }

//     const handleMouseDown = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       setIsDrawing(true);
//       ctx.beginPath();
//       ctx.moveTo(x, y);
//     };

//     const handleMouseMove = (e) => {
//       if (!isDrawing) return;

//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       ctx.lineTo(x, y);
//       ctx.strokeStyle = '#5b7cfa';
//       ctx.lineWidth = 2;
//       ctx.lineCap = 'round';
//       ctx.lineJoin = 'round';
//       ctx.stroke();
//     };

//     const handleMouseUp = () => {
//       setIsDrawing(false);
//       ctx.closePath();
//     };

//     const handleMouseLeave = () => {
//       setIsDrawing(false);
//       ctx.closePath();
//     };

//     canvas.addEventListener('mousedown', handleMouseDown);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     canvas.addEventListener('mouseup', handleMouseUp);
//     canvas.addEventListener('mouseleave', handleMouseLeave);

//     canvas.addEventListener('touchstart', (e) => {
//       const touch = e.touches[0];
//       const mouseEvent = new MouseEvent('mousedown', {
//         clientX: touch.clientX,
//         clientY: touch.clientY
//       });
//       canvas.dispatchEvent(mouseEvent);
//     });

//     canvas.addEventListener('touchmove', (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       const mouseEvent = new MouseEvent('mousemove', {
//         clientX: touch.clientX,
//         clientY: touch.clientY
//       });
//       canvas.dispatchEvent(mouseEvent);
//     });

//     canvas.addEventListener('touchend', (e) => {
//       const mouseEvent = new MouseEvent('mouseup', {});
//       canvas.dispatchEvent(mouseEvent);
//     });

//     return () => {
//       canvas.removeEventListener('mousedown', handleMouseDown);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       canvas.removeEventListener('mouseup', handleMouseUp);
//       canvas.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [isDrawing, hasWrittenHello]);

//   const handleClear = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = '#f5e6d3';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.strokeStyle = '#c9b896';
//     ctx.lineWidth = 4;
//     ctx.strokeRect(0, 0, canvas.width, canvas.height);
//     setHasWrittenHello(false);
//   };

//   return (
//     <div className="canvas-wrapper">
//       <canvas
//         ref={canvasRef}
//         width={500}
//         height={380}
//         className="drawing-canvas"
//       />
//       <button onClick={handleClear} className="clear-btn">🗑️</button>
//       <button className="color-picker"></button>
//     </div>
//   );
// };

// export default Canvas;

import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";
import BrushIcon from '@mui/icons-material/Brush';

export default function Canvas() {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const lastPoint = useRef({ x: null, y: null });

  const [color, setColor] = useState("#5b7cfa");
  const [showPicker, setShowPicker] = useState(false);

  const COLORS = [
    "#ff9800", // orange (bottom se start)
    "#6fe07f",
    "#4fa3ff",
    "#ff6b6b",
    "#ffd23f",
    "#9b5cff",
  ];

  /* setup canvas + hello animation */
  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const scale = window.devicePixelRatio || 1;
  canvas.width = 360 * scale;
  canvas.height = 360 * scale;
  canvas.style.width = "360px";
  canvas.style.height = "360px";
  ctx.scale(scale, scale);

  // background
  ctx.fillStyle = "#f3e6cc";
  ctx.fillRect(0, 0, 360, 360);

  const text = "hello";
  let i = 0;

  ctx.font = "64px Pacifico";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const centerX = 180;
  const centerY = 180;

  const type = () => {
    if (i <= text.length) {
      // clear only text area
      ctx.fillStyle = "#f3e6cc";
      ctx.fillRect(0, 0, 360, 360);

      ctx.fillStyle = color;

      const shakeX = (Math.random() - 0.5) * 2;
      const shakeY = (Math.random() - 0.5) * 2;

      ctx.fillText(
        text.slice(0, i),
        centerX + shakeX,
        centerY + shakeY
      );

      i++;
      setTimeout(type, 180);
    }
  };

  type();
}, []); // ✅ only once


  /* drawing */
  const startDraw = (e) => {
    drawing.current = true;
    lastPoint.current = { x: null, y: null };
    draw(e);
  };

  const endDraw = () => {
    drawing.current = false;
    lastPoint.current = { x: null, y: null };
  };

  const draw = (e) => {
    if (!drawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x += (Math.random() - 0.5) * 2;
    y += (Math.random() - 0.5) * 2;

    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();

    if (lastPoint.current.x !== null) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    lastPoint.current = { x, y };
  };

  /* erase */
  const eraseCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 360, 360);
    ctx.fillStyle = "#f3e6cc";
    ctx.fillRect(0, 0, 360, 360);
  };

  return (
    <div className="canvas-wrapper">
      <div className="andre-card">
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />

        {/* <div className="actions">
          <button className="btn" onClick={eraseCanvas}>🧽</button>

          <div className="color-pickers">
            <div
              className="main-color"
              style={{ background: color }}
              onClick={() => setShowPicker(!showPicker)}
            />

            <div className={`picker ${showPicker ? "show" : ""}`}>
              {COLORS.map((c) => (
                <div
                  key={c}
                  className="color-block"
                  style={{ background: c }}
                  onClick={() => {
                    setColor(c);
                    setShowPicker(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div> */}
        <div className="actions">
          <button className="btn" onClick={eraseCanvas}><BrushIcon/></button>

          <div className="color-pickers">
            <div
              className="main-color"
              style={{ background: color }}
              onClick={() => setShowPicker(!showPicker)}
            />

            <div className={`picker ${showPicker ? "show" : ""}`}>
              {COLORS.map((c) => (
                <div
                  key={c}
                  className="color-block"
                  style={{ background: c }}
                  onClick={() => {
                    setColor(c);
                    setShowPicker(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
