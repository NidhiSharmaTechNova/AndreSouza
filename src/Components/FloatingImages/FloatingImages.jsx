import { useEffect } from "react"
import gsap from "gsap"
import "./FloatingImages.css"

import book1 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"
import book2 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"
import photo1 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"
import photo2 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"
import sticker1 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"
import sticker2 from "../../Components/assets/the_making_of_prince_of_persia (1).webp"

export default function FloatingImages() {

  useEffect(() => {
    gsap.to(".float-item", {
      y: 18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    })
  }, [])

  return (
    <div className="floating-fixed">

      <div className="float-item book left one">
        <img src={book1} />
      </div>

      <div className="float-item photo left two">
        <img src={photo1} />
      </div>

      <div className="float-item sticker left three">
        <img src={sticker1} />
      </div>

     
      <div className="float-item photo right one">
        <img src={photo2} />
      </div>

      <div className="float-item book right two">
        <img src={book2} />
      </div>

      <div className="float-item sticker right three">
        <img src={sticker2} />
      </div>

    </div>
  )
}
