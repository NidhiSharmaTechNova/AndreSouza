import React, { useRef } from 'react'
import "./Craft.css"
import { useState } from "react";
import Countdown from '../Countdown/Countdown';
import Book from '../Book/Book';
import { useNavigate } from 'react-router';
import TurbulenceCanvas from '../Canvas/Canvas';
import AlbumPlayer from '../AlbumPlayer/AlbumPlayer';


const CraftHomeIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M3 10.5L12 3L21 10.5V21H14V14H10V21H3V10.5Z" />
  </svg>
);

const CraftProjectIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M12 2L3 7L12 12L21 7L12 2Z" />
    <path d="M3 7V17L12 22V12" />
    <path d="M21 7V17L12 22" />
  </svg>
);

const CraftCraftIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M14 3L21 10L10 21L3 14L14 3Z" />
    <path d="M8 8L16 16" />
  </svg>
);

const CraftNotesIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8H16M8 12H16M8 16H13" />
  </svg>
);

const CraftCameraIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <circle cx="12" cy="13" r="4" />
    <path d="M9 6L10.5 4H13.5L15 6" />
  </svg>
);

const tabs = [
  { id: "home", label: "Home", icon: <CraftHomeIcon /> },
  { id: "projects", label: "Project", icon: <CraftProjectIcon /> },
  { id: "craft", label: "Craft", icon: <CraftCraftIcon /> },
  { id: "notes", label: "Notes", icon: <CraftNotesIcon /> },
  { id: "Photos", label: "photos", icon: <CraftCameraIcon /> },
];



export default function Craft() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("home");

  const [tooltipId, setTooltipId] = useState("");
  const hoverTimer = useRef(null);


  const handleMouseEnter = (id) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setTooltipId(id);
    }, 2000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setTooltipId("");
  };

  const handleClick = (id, path) => {
    setActiveId(id);
    setTooltipId("");
    navigate(path);
  };


  return (
    <div className="craft">
      <div className="craft-cards">
        <div className='craft-card'>
          <div className='carft-left'>
            <h2>Menu Toolbar</h2>
            <h3>Toolbar that changes state to notify and enable information and actions. Try clicking on the buttons to change the state of the toolbar.</h3>
            <div className='carft-button'>
              <p>react</p>
              <p>tailwind</p>
              <p>framer motion</p>
            </div>
          </div>
          <div className="craft-right">
            <div className="toolbar-box">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-item ${activeId === tab.id ? "active" : ""}`}
                  onClick={() => handleClick(tab.id, tab.path)}
                  onMouseEnter={() => handleMouseEnter(tab.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="icon">{tab.icon}</span>
                  <span className="label">{tab.label}</span>

                  {/* Tooltip */}
                  <span className={`tooltip ${tooltipId === tab.id ? "show" : ""}`}>
                    {tab.label}
                  </span>
                </button>
              ))}

              {/* <span className="nav-divider" /> */}

              {/* <button className="extra-icon" onClick={() => setDark(!dark)}>
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </button> */}

              {/* <button className="extra-icon">
            <VolumeUpIcon />
          </button> */}
            </div>
          </div>
        </div>

        <div className="craft-card">

          <div className='carft-left'>
            <h2>Flip Clock</h2>
            <h3>A realistic flip clock animation with proper 3D perspective and sequential digit animations.</h3>
            <div className='carft-button'>
              <p>react</p>
              <p>css</p>
            </div>
          </div>


          <div className="craft-right">
            <Countdown />
          </div>
        </div>

        <div className='craft-card'>
          <div className='carft-left'>
            <h2>Simple Book</h2>
            <h3>A 3D book that slightly opens when hovered over</h3>
            <div className='carft-button'>
              <p>react</p>
              <p>css</p>
            </div>
          </div>
          <div className="craft-right">
            <Book />
          </div>
        </div>

        <div className='craft-card'>
          <div className='carft-left'>
            <h2>Turbulence Canvas</h2>
            <h3>Interactive canvas with animated turbulence effects that wiggle on hover</h3>
            <div className='carft-button'>
              <p>canvas</p>
              <p>webgl</p>
              <p>animation</p>
              <p>react</p>
            </div>
          </div>
          <div className="craft-right">
            <TurbulenceCanvas />
          </div>
        </div>

        <div className='craft-card'>
          <div className='carft-left'>
            <h2>Music Album Player</h2>
            <h3>Interactive vinyl album with play/pause functionality and spinning animation</h3>
            <div className='carft-button'>
              <p>animation</p>
              <p>react</p>
              <p>css</p>
            </div>
          </div>
          <div className="craft-right">
            <AlbumPlayer className='album-player'/>
          </div>
        </div>

      </div>
    </div >
  )
}

