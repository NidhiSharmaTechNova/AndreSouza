import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./BottomNav.css";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const HomeIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M3 10.5L12 3L21 10.5V21H14V14H10V21H3V10.5Z" />
  </svg>
);

const ProjectIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M12 2L3 7L12 12L21 7L12 2Z" />
    <path d="M3 7V17L12 22V12" />
    <path d="M21 7V17L12 22" />
  </svg>
);

const CraftIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <path d="M14 3L21 10L10 21L3 14L14 3Z" />
    <path d="M8 8L16 16" />
  </svg>
);

const NotesIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8H16M8 12H16M8 16H13" />
  </svg>
);

const CameraIcon = () => (
  <svg className="nav-svg" width="22" height="22" viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <circle cx="12" cy="13" r="4" />
    <path d="M9 6L10.5 4H13.5L15 6" />
  </svg>
);

const tabs = [
  { id: "home", label: "Home", path: "/", icon: <HomeIcon /> },
  { id: "projects", label: "Project", path: "/projects", icon: <ProjectIcon /> },
  { id: "craft", label: "Craft", path: "/craft", icon: <CraftIcon /> },
  { id: "notes", label: "Notes", path: "/notes", icon: <NotesIcon /> },
  { id: "camera", label: "Photos", path: "/photos", icon: <CameraIcon /> },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  const [tooltipId, setTooltipId] = useState("");
  const hoverTimer = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleMouseEnter = (id) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setTooltipId(id);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setTooltipId("");
  };

  const handleClick = (path) => {
    setTooltipId(""); 
    navigate(path);
  };

  return (

   <div className="bottom-nav">
  {tabs.map((tab) => (
    <div key={tab.id} className="nav-item-wrapper">
      <button
        className={`nav-item ${
          location.pathname === tab.path ||
          (location.pathname.startsWith(tab.path) && tab.path !== "/")
            ? "active"
            : ""
        }`}
        onClick={() => handleClick(tab.path)}
        onMouseEnter={() => handleMouseEnter(tab.id)}
        onMouseLeave={handleMouseLeave}
      >
        <span className="icon">{tab.icon}</span>
        <span className="label">{tab.label}</span>
      </button>

      {/* Tooltip for this button only */}
      <span className={`tooltip ${tooltipId === tab.id ? "show" : ""}`}>
        {tab.label}
      </span>
    </div>
  ))}

  <span className="nav-divider" />

  <button className="extra-icon" onClick={() => setDark(!dark)}>
    {dark ? <LightModeIcon /> : <DarkModeIcon />}
  </button>

  {/* <button className="extra-icon">
    <VolumeUpIcon />
  </button> */}
</div>
  );
}
