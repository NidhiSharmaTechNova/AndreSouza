// import React, { useEffect, useRef } from 'react'
// import img1 from "../../Components/assets/sales-home.webp"
// import img2 from "../../Components/assets/stone-link.webp"
// import img3 from "../../Components/assets/home.webp"
// import "./Projects.css"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function Projects() {
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const handleScroll = () => {
//       cardsRef.current.forEach((card) => {
//         const rect = card.getBoundingClientRect()
//         const viewportCenter = window.innerHeight / 2
//         const cardCenter = rect.top + rect.height / 2
//         const distanceFromCenter = Math.abs(cardCenter - viewportCenter)
//         const maxDistance = window.innerHeight / 2
        
//         const scale = 1.1 - (distanceFromCenter / maxDistance) * 0.25
        
//         gsap.to(card, {
//           scale: Math.max(0.85, scale),
//           duration: 0.2,
//           ease: "power2.out"
//         })
//       })
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className='projects'>
//       <div className="projects-header">
//         <h1>Projects</h1>
//       </div>

//       <div className='projects-card'>
//         <div className='project-card' ref={(el) => (cardsRef.current[0] = el)}
//         >
//           <img src={img1} alt=''></img>
//           <h2>Stone POS</h2>
//           <p>Redesigning the sales experience for small and medium businesses</p>
//         </div>

//         <div className='project-card' ref={(el) => (cardsRef.current[1] = el)}>
//           <img src={img2} alt=''></img>
//           <h2>Stone POS</h2>
//           <p>Redesigning the sales experience for small and medium businesses</p>
//         </div>

//         <div className='project-card' ref={(el) => (cardsRef.current[2] = el)}>
//           <img src={img3} alt=''></img>
//           <h2>Stone POS</h2>
//           <p>Redesigning the sales experience for small and medium businesses</p>
//         </div>

//       </div>
//     </div>
//   )
// }


import React, { useRef, useEffect } from "react";
import img1 from "../../Components/assets/sales-home.webp";
import img2 from "../../Components/assets/stone-link.webp";
import img3 from "../../Components/assets/home.webp";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.to(card, {
        scale: 1.15, // zoom effect
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
  }, []);

  const images = [img1, img2, img3];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-card-vertical">
        {images.map((img, index) => (
          <div
            className="project-card-vertical"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={img} alt="" />
            <div className="project-text">
              <h2>Stone POS</h2>
              <p>Redesigning the sales experience for small and medium businesses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}








// import React, { useLayoutEffect, useRef } from "react";
// import img1 from "../../Components/assets/sales-home.webp";
// import img2 from "../../Components/assets/stone-link.webp";
// import img3 from "../../Components/assets/home.webp";
// import "./Projects.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Projects() {
//   const cardsRef = useRef([]);

//   useLayoutEffect(() => {
//     cardsRef.current.forEach((card) => {
//       gsap.fromTo(
//         card,
//         { scale: 0.85 },
//         {
//           scale: 1.1,
//           scrollTrigger: {
//             trigger: card,
//             start: "top center+=150",
//             end: "top center-=150",
//             scrub: true,
//           },
//         }
//       );
//     });

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div className="projects">
//       <h1 className="projects-title">Projects</h1>

//       <div className="projects-card">
//         {/* CARD 1 */}
//         <div className="project-card">
//           <div
//             className="card-inner"
//             ref={(el) => (cardsRef.current[0] = el)}
//           >
//             <img src={img1} alt="" />
//             <h2>Stone POS</h2>
//             <p>Redesigning the sales experience for small and medium businesses</p>
//           </div>
//         </div>

//         {/* CARD 2 */}
//         <div className="project-card">
//           <div
//             className="card-inner"
//             ref={(el) => (cardsRef.current[1] = el)}
//           >
//             <img src={img2} alt="" />
//             <h2>Stone Link</h2>
//             <p>Connecting merchants with seamless digital payment solutions</p>
//           </div>
//         </div>

//         {/* CARD 3 */}
//         <div className="project-card">
//           <div
//             className="card-inner"
//             ref={(el) => (cardsRef.current[2] = el)}
//           >
//             <img src={img3} alt="" />
//             <h2>Stone Home</h2>
//             <p>Designing a modern dashboard for financial control and insights</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
