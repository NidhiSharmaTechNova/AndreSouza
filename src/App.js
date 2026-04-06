import { Routes, Route, useLocation } from "react-router-dom"

import BottomNav from "./Components/BottomNav/BottomNav"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Craft from "./pages/Craft/Craft"
import Notes from "./pages/Notes/Notes"
import Photos from "./pages/Photos/Photos"
import { useState } from "react"
import DragMove from "./Components/DragMove/DragMove"

export default function App() {
  const location = useLocation();
  const [hideBottomNav, setHideBottomNav] = useState(false);

  const isHomePage = location.pathname === "/";
  return (
    <>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/craft" element={<Craft />} />
          <Route path="/notes" element={<Notes />} />
          <Route
            path="/photos"
            element={<Photos setHideBottomNav={setHideBottomNav} />}
          />
        </Routes>
      </div>

      {!hideBottomNav && <BottomNav />}

      {isHomePage && <DragMove />}
    </>
  )
}