// import { useRef, useState, useEffect } from "react";
// import "./Home.css";

// import img from "../../Components/assets/profilePicture.png";
// import img1 from "../../Components/assets/image-1.webp";
// import img2 from "../../Components/assets/image-2.webp";

// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import EmailIcon from "@mui/icons-material/Email";

// export default function Home() {
//   const canvasRef = useRef(null);

// const [offset, setOffset] = useState({ x: -600, y: -400 });
// const isDragging = useRef(false);
// const start = useRef({ x: 0, y: 0 });

// const onMouseDown = (e) => {
//   isDragging.current = true;
//   start.current = {
//     x: e.clientX - offset.x,
//     y: e.clientY - offset.y
//   };
// };

// const onMouseMove = (e) => {
//   if (!isDragging.current) return;

//   setOffset({
//     x: e.clientX - start.current.x,
//     y: e.clientY - start.current.y
//   });
// };

// const onMouseUp = () => {
//   isDragging.current = false;
// };

//   const [offset, setOffset] = useState({ x: -600, y: -400 });
//   const isDragging = useRef(false);
//   const start = useRef({ x: 0, y: 0 });

//   const onMouseDown = (e) => {
//     isDragging.current = true;
//     start.current = {
//       x: e.clientX - offset.x,
//       y: e.clientY - offset.y
//     };
//   };

//   const onMouseMove = (e) => {
//     if (!isDragging.current) return;
//     setOffset({
//       x: e.clientX - start.current.x,
//       y: e.clientY - start.current.y
//     });
//   };

//   const onMouseUp = () => {
//     isDragging.current = false;
//   };



//   return (
//     <div
//       ref={canvasRef}
//       className="canvas"
//       onMouseDown={onMouseDown}
//       onMouseMove={onMouseMove}
//       onMouseUp={onMouseUp}
//       onMouseLeave={onMouseUp}
//       style={{
//         transform: `translate(${offset.x}px, ${offset.y}px)`
//       }}
//     >

//        <div className="bg-floating">


//         <img src={img1} className="bg-item r1 p1 float-slow" alt="" />
//         <img src={img2} className="bg-item r2 p2 float-medium" alt="" />


//         <div className="bg-book r4 b1 float-slow">HELLO</div>


//         <div className="bg-sticker r5 s1 float-fast">★</div>

//         <div className="bg-note r6 n1 float-medium">NEXT.JS</div>
//         <div className="bg-note r7 n2 float-slow">REACT</div>

//       </div>

//       <div className="cards-stack">

//         <div className="center-card">
//           <div className="profile">
//             <img src={img} alt="profile" />
//             <div className="card-name">
//               <h2>Andre Souza</h2>
//               <span>Design Engineer</span>
//             </div>
//           </div>

//           <p>
//             Welcome to <i>my space on the internet</i>. I'm a design engineer who
//             crafts interactions that spark joy, delight, and a sense of magic in users.
//           </p>

//           <p>
//             Growing up, I spent hours playing Street Fighter, Donkey Kong, and
//             Super Mario in a Super Nintendo with my dad, and somewhere between
//             levels, I developed high expectations for how interactions should feel.
//           </p>

//           <p>
//             Have fun exploring my portfolio, and feel free to connect below.
//           </p>

//           <div className="links">
//             <button><TwitterIcon />Twitter</button>
//             <button><LinkedInIcon />LinkedIn</button>
//             <button><GitHubIcon />GitHub</button>
//             <button><EmailIcon />Mail</button>
//           </div>

//           <div className="divider" />

//           <div className="experience">

//             <div className="row">
//               <div className="dot blue" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Praia Health</h3>
//                   <h4>Staff Product Designer</h4>
//                 </div>
//                 <p>2024 – Present</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot green" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Stone</h3>
//                   <h4>Specialist Product Designer</h4>
//                 </div>
//                 <p>2022 – 2024</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot darkgreen" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Pager.me</h3>
//                   <h4>Senior Product Designer</h4>
//                 </div>
//                 <p>2019 – 2022</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot orange" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Try</h3>
//                   <h4>UX Designer & Researcher</h4>
//                 </div>
//                 <p>2018 – 2019</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot darkblue" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>National Council of Science</h3>
//                   <h4>UX Designer</h4>
//                 </div>
//                 <p>2018</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         <div className="center-card experience-card">
//           <h3 className="section-title">Education</h3>

//           <div className="experience">

//             <div className="row">
//               <div className="dot ligthblue" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Meiuca</h3>
//                   <h4>Design system & Ops</h4>
//                 </div>
//                 <p>2021</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot black" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Interaction Design Foundation</h3>
//                   <h4>Psychology of Interaction</h4>
//                 </div>
//                 <p>2019</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot yellow" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Senac - BA</h3>
//                   <h4>Interaction Design</h4>
//                 </div>
//                 <p>2016 – 2019</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="dot darkorange" />
//               <div className="card-product">
//                 <div className="product-name">
//                   <h3>Adobe School of Arts</h3>
//                   <h4>3D & Motion Graphics</h4>
//                 </div>
//                 <p>2014 – 2016</p>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import "./Home.css";
import img from "../../Components/assets/profilePicture.png";
import img3 from "../../Components/assets/image-1.webp";
import img1 from "../../Components/assets/image-2.webp";
import img4 from "../../Components/assets/image-3.webp";
import img2 from "../../Components/assets/image-4.webp";

//sticker
import img5 from "../../Components/assets/image6";
import img6 from "../../Components/assets/image4";
import img7 from "../../Components/assets/image";
import img8 from "../../Components/assets/image2";
import img9 from "../../Components/assets/image3";
import img10 from "../../Components/assets/brazil-stamp (1).webp";

//books
import book1 from "../../Components/assets/graphic_design_visionaries (1).webp";
import book2 from "../../Components/assets/creativity_inc.webp";
import book3 from "../../Components/assets/nier_art.webp";
import book4 from "../../Components/assets/book4";
import book5 from "../../Components/assets/book5";
import book6 from "../../Components/assets/book6";
import book7 from "../../Components/assets/book7";
import book8 from "../../Components/assets/book8";
import book9 from "../../Components/assets/book9";
import book10 from "../../Components/assets/book10";
import book11 from "../../Components/assets/book11";
import book12 from "../../Components/assets/book12";
import book13 from "../../Components/assets/the_making_of_prince_of_persia (1).webp";


//album
import album1 from "../../Components/assets/album1";
import vinyl1 from "../../Components/assets/album1";
import album2 from "../../Components/assets/album2";
import vinyl2 from "../../Components/assets/album2";
import album3 from "../../Components/assets/album3";
import vinyl3 from "../../Components/assets/album3";
import album4 from "../../Components/assets/album4";
import vinyl4 from "../../Components/assets/album4";
import album5 from "../../Components/assets/album5";
import vinyl5 from "../../Components/assets/album5";
import album6 from "../../Components/assets/album6";
import vinyl6 from "../../Components/assets/album6";
import album7 from "../../Components/assets/album7";
import vinyl7 from "../../Components/assets/album7";



import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Book from "../Book/Book";
import Countdown from "../Countdown/Countdown";
import Canvas from "../Canvas/Canvas";
import AlbumPlayer from "../AlbumPlayer/AlbumPlayer";
import { useEffect, useRef, useState } from "react";
import bgImg from "../../Components/assets/Layer-window.png";
import ScratchFloatCard from "../ScratchFloatCard/ScratchFloatCard";
import InteractiveCard from "../InteractiveCard/InteractiveCard";

export default function Home() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  // 👉 load pe center scroll
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const size = 3200;
    el.scrollLeft = (size - window.innerWidth) / 2;
    el.scrollTop = (size - window.innerHeight) / 2;
  }, []);

  // 👉 cursor rotate / parallax
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * -6;

      if (canvasRef.current) {
        canvasRef.current.style.transform =
          `rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);


  return (

    <div className="board-wrapper" ref={wrapRef}>
      <div className="board-canvas" ref={canvasRef} >

        <img src={bgImg} className="canvas-bg-img" alt="" />
        <div className="cards-stack">
          <div className="center-card">
            <div className="profile">
              <img src={img} alt="profile" />
              <div className="card-name">
                <h2>Andre Souza</h2>
                <span>Design Engineer</span>
              </div>
            </div>

            <p>
              Welcome to <i>my space on the internet</i>. I'm a design engineer who
              crafts interactions that spark joy, delight, and a sense of magic in users.
            </p>

            <p>
              Growing up, I spent hours playing Street Fighter, Donkey Kong, and Super Mario in a Super Nintendo with my dad, and somewhere between   levels, I developed high expectations for how interactions should feel.
            </p>

            <p>
              Have fun exploring my portfolio, and feel free to connect below.
            </p>

            <div className="links">
              <button><TwitterIcon />Twitter</button>
              <button><LinkedInIcon />LinkedIn</button>
              <button><GitHubIcon />GitHub</button>
              <button><EmailIcon />Mail</button>
            </div>

            <div className="divider" />

            <div className="experience">
              <div className="row">
                <div className="dot blue" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Praia Health</h3>
                    <h4>Staff Product Designer</h4>
                  </div>
                  <p>2024 – Present</p>
                </div>
              </div>

              <div className="row">
                <div className="dot green" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Stone</h3>
                    <h4>Specialist Product Designer</h4>
                  </div>
                  <p>2022 – 2024</p>
                </div>
              </div>

              <div className="row">
                <div className="dot darkgreen" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Pager.me</h3>
                    <h4>Senior Product Designer</h4>
                  </div>
                  <p>2019 – 2022</p>
                </div>
              </div>

              <div className="row">
                <div className="dot orange" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Try</h3>
                    <h4>UX Designer & Researcher</h4>
                  </div>
                  <p>2018 – 2019</p>
                </div>
              </div>

              <div className="row">
                <div className="dot darkblue" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>National Council of Science</h3>
                    <h4>UX Designer</h4>
                  </div>
                  <p>2018</p>
                </div>
              </div>
            </div>
          </div>


          <div className="center-card experience-card">
            <h3 className="section-title">Education</h3>

            <div className="experience">
              <div className="row">
                <div className="dot ligthblue" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Meiuca</h3>
                    <h4>Design system & Ops</h4>
                  </div>
                  <p>2021</p>
                </div>
              </div>

              <div className="row">
                <div className="dot black" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Interaction Design Foundation</h3>
                    <h4>Psychology of Interaction</h4>
                  </div>
                  <p>2019</p>
                </div>
              </div>

              <div className="row">
                <div className="dot yellow" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Senac - BA</h3>
                    <h4>Interaction Design</h4>
                  </div>
                  <p>2016 – 2019</p>
                </div>
              </div>

              <div className="row">
                <div className="dot darkorange" />
                <div className="card-product">
                  <div className="product-name">
                    <h3>Adobe School of Arts</h3>
                    <h4>3D & Motion Graphics</h4>
                  </div>
                  <p>2014 – 2016</p>
                </div>
              </div>
            </div>
          </div>


        </div>


        <img className="float img1" src={img1} />
        <img className="float img2" src={img2} />
        <img className="float img3" src={img3} />
        <img className="float img4" src={img4} />
        <div className="sticker img5">
          <img className='sticker5' src={img5} alt="" />
        </div>
        <div className="sticker img6">
          <img className='sticker6' src={img6} alt="" />
        </div>
        <div className="sticker img7">
          <img className='sticker7' src={img7} alt="" />
        </div>
        <div className="sticker img8">
          <img className='sticker8' src={img8} alt="" />
        </div>
        <div className="sticker img9">
          <img className='sticker9' src={img9} alt="" />
        </div>

         <div className="sticker img10">
          <img className='sticker10' src={img10} alt="" />
        </div>

        <div className="book-pos b1">
          <Book
            cover={book1}
            title="Graphic Design Visionaries"
            backColor="#e97e37"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b2">
          <Book
            cover={book2}
            title="Creativity Inc"
            backColor="#e0240b"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b3">
          <Book
            cover={book3}
            title="Nier : Art"
            backColor="#3c3c3d"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b4">
          <Book
            cover={book4}
            title="Monstar hunter"
            backColor="#dddddd"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b5">
          <Book
            cover={book5}
            title="Weapons of math destruction"
            backColor="#e9c03a"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b6">
          <Book
            cover={book6}
            title="Elden Ring"
            backColor="#0a0a0a"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b7">
          <Book
            cover={book7}
            title="Dieter Rams"
            backColor="#f15b16"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b8">
          <Book
            cover={book8}
            title="grid systems"
            backColor="#ff500b"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b9">
          <Book
            cover={book9}
            title="Made in Japan"
            backColor="#ffffff"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b10">
          <Book
            cover={book10}
            title="Logo Modernism"
            backColor="#fc7a0f"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b11">
          <Book
            cover={book11}
            title="Japanese Graphic Design"
            backColor="#ff300b"
            pageColor="#ffffff"
          />
        </div>

        <div className="book-pos b12">
          <Book
            cover={book12}
            title="Mega Man"
            backColor="#0b4cff"
            pageColor="#ffffff"
          />
        </div>

         <div className="book-pos b13">
          <Book
            cover={book13}
            title="Mega Man"
            backColor="#0b4cff"
            pageColor="#ffffff"
          />
        </div>


        <div className="clock-pos">
          <Countdown />
        </div>

        <div className="canvas-pos">
          <Canvas />
        </div>

        <div className="inter-pos">
          <InteractiveCard />
        </div>


        <div className="album-pos pos1">
          <AlbumPlayer
            albumImg={album1}
            vinylImg={vinyl1}
          />
        </div>

        <div className="album-pos pos2">
          <AlbumPlayer
            albumImg={album2}
            vinylImg={vinyl2}
          />
        </div>

        <div className="album-pos pos3">
          <AlbumPlayer
            albumImg={album3}
            vinylImg={vinyl3}
          />
        </div>

        <div className="album-pos pos4">
          <AlbumPlayer
            albumImg={album4}
            vinylImg={vinyl4}
          />
        </div>

        <div className="album-pos pos5">
          <AlbumPlayer
            albumImg={album5}
            vinylImg={vinyl5}
          />
        </div>

        <div className="album-pos pos6">
          <AlbumPlayer
            albumImg={album6}
            vinylImg={vinyl6}
          />
        </div>

        <div className="album-pos pos7">
          <AlbumPlayer
            albumImg={album7}
            vinylImg={vinyl7}
          />
        </div>


        <div className="scratch-pos">
          <ScratchFloatCard />
        </div>

        <div className="inter-pos">
          <InteractiveCard />
        </div>

      </div>
    </div>
  );
}


