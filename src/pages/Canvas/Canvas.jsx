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
    "#ff9800", 
    "#6fe07f",
    "#4fa3ff",
    "#ff6b6b",
    "#ffd23f",
    "#9b5cff",
  ];


  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const scale = window.devicePixelRatio || 1;
  canvas.width = 360 * scale;
  canvas.height = 360 * scale;
  canvas.style.width = "360px";
  canvas.style.height = "360px";
  ctx.scale(scale, scale);

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
}, []);

  
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
