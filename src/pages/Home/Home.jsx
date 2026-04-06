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
import { useEffect, useRef } from "react";
import bgImg from "../../Components/assets/Layer-window.png";
import ScratchFloatCard from "../ScratchFloatCard/ScratchFloatCard";
import InteractiveCard from "../InteractiveCard/InteractiveCard";

export default function Home() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

 
 useEffect(() => {
    const centerCanvas = () => {
      const el = wrapRef.current;
      if (!el) return;

      // Responsive canvas size based on viewport width
      let size = 3200;
      if (window.innerWidth < 641) {
        size = 1200;
      } else if (window.innerWidth < 1025) {
        size = 2000;
      }
      
      el.scrollLeft = (size - window.innerWidth) / 2;
      el.scrollTop = (size - window.innerHeight) / 2;
    };

    centerCanvas();
    window.addEventListener("resize", centerCanvas);
    return () => window.removeEventListener("resize", centerCanvas);
  }, []);

  
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
      <div className="board-canvas" ref={canvasRef}>

        <img src={bgImg} className="canvas-bg-img" alt="" />
        <div className="cards-stack">
          <div className="center-card">
            {/* <div className="profile">
              <img src={img} alt="profile" />
              <div className="card-name">
                <h2>Andre Souza</h2>
                <span>Design Engineer</span>
              </div>
            </div> */}

            <div className="profile-wrapper">
              <div className="profile">
                <img src={img} alt="profile" />
                <div className="card-name">
                  <h2>Andre Souza</h2>
                  <span>Design Engineer</span>
                </div>
              </div>

              <svg
                className="profile-bg-svg"
                viewBox="0 0 170 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.984 57.6266C39.1262 37.9349 47.1632 14.0126 66.9347 4.19468C86.7063 -5.62326 110.726 2.38104 120.584 22.0727L165.788 112.373C175.646 132.065 167.609 155.987 147.838 165.805C128.066 175.623 104.047 167.619 94.1889 147.927L48.984 57.6266ZM112.699 38.9242C112.699 54.1243 100.327 66.4465 85.0649 66.4465C69.8029 66.4465 57.4306 54.1243 57.4306 38.9242C57.4306 23.7239 69.8029 11.4016 85.0649 11.4016C100.327 11.4016 112.699 23.7239 112.699 38.9242ZM4.2117 112.373L28.0668 64.7207L72.2659 153.625L72.3337 153.634C61.0496 169.079 39.8972 174.612 22.1623 165.805C2.3907 155.987 -5.64607 132.065 4.2117 112.373Z"
                  fill="currentColor"
                />
              </svg>
            </div>


            <p className="intro-text">
              Welcome to{" "}
              <span className="native-italic">my space on the internet</span>. I'm a design engineer
              who crafts interactions that spark joy, delight, and a sense of magic in users.
            </p>




            <p>
              Growing up, I spent hours playing Street Fighter, Donkey Kong, and Super Mario in a Super Nintendo with my dad, and somewhere between   levels, I developed high expectations for how interactions should feel.
            </p>

            <p>
              Have fun exploring my portfolio, and feel free to connect below.
            </p>

            <div className="links">
              <button><TwitterIcon className="icon" />Twitter</button>
              <button><LinkedInIcon className="icon" />LinkedIn</button>
              <button><GitHubIcon className="icon" />GitHub</button>
              <button><EmailIcon className="icon" />Mail</button>
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


        <img className="float img1" src={img1} alt="" />
        <img className="float img2" src={img2} alt="" />
        <img className="float img3" src={img3} alt="" />
        <img className="float img4" src={img4} alt="" />
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




















// "use client";
// import { useRef } from "react";
// import Image from "next/image";
// import img from "@/assets/profilePicture.png";

// import img2 from "@/assets/image-4.4d12de0fcbd61a44f04f.webp";
// import img1 from "@/assets/image-2.a5cee3fc830cea9eaa38.webp";
// import img3 from "@/assets/image-1.a0e60c1139f242a6d127.webp";
// import img4 from "@/assets/image-3.1fafa5dff81d6a6fb138.webp";

// import img5 from "@/assets/Ken.webp"
// import img6 from "@/assets/mario.webp"
// import img7 from "@/assets/vercel.webp"
// import img8 from "@/assets/react.webp"
// import img9 from "@/assets/next-js.webp"
// import img10 from "@/assets/react.webp"

// import Book from "./Book";
// import book1 from "@/assets/graphic_design_visionaries (2).webp"
// import book2 from "@/assets/creativity_inc (1).webp"
// import book3 from "@/assets/nier_art (1).webp"
// import book4 from "@/assets/monster_hunter.webp"
// import book5 from "@/assets/weapons_of_math.webp"
// import book6 from "@/assets/elden_ring.webp"
// import book7 from "@/assets/dieter_rams.webp"
// import book8 from "@/assets/grid_systems.webp"
// import book9 from "@/assets/mega_man.webp"
// import book10 from "@/assets/made_in_japan.webp"
// import book11 from "@/assets/logo_modernism (1).webp"
// import book13 from "@/assets/the_making_of_prince_of_persia (14).webp"
// import BottomNav from "./BottomNav";
// import AlbumPlayer from "./CDPlayer";


// import album1 from "@/assets/download.webp";
// import vinyl1 from "@/assets/download.webp";
// import album2 from "@/assets/download (1).webp";
// import vinyl2 from "@/assets/download (1).webp";
// import album3 from "@/assets/download (2).webp";
// import vinyl3 from "@/assets/download (2).webp";
// import album4 from "@/assets/download (3).webp";
// import vinyl4 from "@/assets/download (3).webp";
// import album5 from "@/assets/download (4).webp";
// import vinyl5 from "@/assets/download (4).webp";
// import InteractiveCard from "./InteractiveCard";
// import Canvas from "./Canvas";
// import ScratchFloatCard from "./ScratchCard";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import EmailIcon from "@mui/icons-material/Email";



// export default function DragComponent() {
//   const rootRef = useRef<HTMLDivElement | null>(null);
//   const canvasRef = useRef<HTMLDivElement | null>(null);

//   const pos = useRef({ x: 0, y: 0 });
//   const start = useRef({ x: 0, y: 0 });
//   const dragging = useRef(false);
//   const float = "w-[190px] ";

//   const clamp = (v, min, max) =>
//     Math.min(max, Math.max(min, v));

//   const clampBounds = () => {
//     if (!rootRef.current || !canvasRef.current) return;

//     const root = rootRef.current.getBoundingClientRect();
//     const canvas = canvasRef.current.getBoundingClientRect();

//     const minX = root.width - canvas.width;
//     const minY = root.height - canvas.height;

//     pos.current.x = clamp(pos.current.x, minX, 0);
//     pos.current.y = clamp(pos.current.y, minY, 0);
//   };

//   const update = () => {
//     if (!canvasRef.current) return;
//     canvasRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
//   };

//   return (
//     <div>
//       <div>
//         <div className="md:hidden min-h-screen bg-black flex flex-col items-center justify-between py-10">

//           {/* CARD */}
//           <div className="w-full max-w-[560px] px-4">
//             <div className="bg-[#181717] text-white rounded-[7px] p-5 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">

//               {/* PROFILE */}
//               <div className="relative flex items-center justify-between mb-5">
//                 <div className="flex items-center gap-[14px]">
//                   <Image
//                     src={img}
//                     alt="profile"
//                     className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-full object-cover"
//                   />
//                   <div>
//                     <h2 className="text-[18px] md:text-[20px] font-medium">
//                       Andre Souza
//                     </h2>
//                     <span className="text-sm text-gray-400">
//                       Design Engineer
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* TEXT */}
//               <p className="text-sm md:text-base leading-[1.6] mb-3 text-gray-300">
//                 Welcome to{" "}
//                 <span className="italic font-serif">
//                   my space on the internet
//                 </span>
//                 . I'm a design engineer who crafts interactions that spark joy,
//                 delight, and a sense of magic in users.
//               </p>

//               <p className="text-sm md:text-base leading-[1.6] mb-4 text-gray-300">
//                 Growing up, I spent hours playing Street Fighter, Donkey Kong, and Super Mario in a Super Nintendo with my dad, and somewhere between levels, I developed high expectations for how interactions should feel.
//               </p>

//               <p className="text-sm md:text-base leading-[1.6] mb-4 text-gray-300">
//                 Have fun exploring my portfolio, and feel free to connect below.
//               </p>

//               {/* LINKS */}
//               <div className="flex gap-[12px] my-4">

//                 <button className="w-15 h-9 flex items-center justify-center rounded-md bg-[#252525] hover:bg-[#2a2a2a]">
//                   <TwitterIcon />
//                 </button>

//                 <button className="w-15 h-9 flex items-center justify-center rounded-md bg-[#252525] hover:bg-[#2a2a2a]">
//                   <LinkedInIcon />
//                 </button>

//                 <button className="w-15 h-9 flex items-center justify-center rounded-md bg-[#252525] hover:bg-[#2a2a2a]">
//                   <GitHubIcon />
//                 </button>

//                 <button className="w-15 h-9 flex items-center justify-center rounded-md bg-[#252525] hover:bg-[#2a2a2a]">
//                   <EmailIcon />
//                 </button>

//               </div>

//               {/* DIVIDER */}
//               <div className="w-full h-[1px] bg-[#2a2a2a] my-5" />

//               {/* EXPERIENCE */}
//               <div className="flex flex-col gap-4">
//                 {[
//                   ["", "Praia Health", "Staff Product Designer", "2024 – Present"],
//                   ["", "Stone", "Specialist Product Designer", "2022 – 2024"],
//                   ["", "Pager.me", "Senior Product Designer", "2019 – 2022"],
//                   ["", "Try", "UX Designer & Researcher", "2018 – 2019"],
//                   ["", "National Council of Science", "UX Designer", "2018"],
//                 ].map(([color, company, role, year], i) => (
//                   <div key={i} className="flex items-center gap-[14px]">

//                     <div className="flex justify-between w-full items-center">
//                       <div>
//                         <h3 className="text-sm md:text-[16px]">{company}</h3>
//                         <h4 className="text-xs md:text-sm text-gray-400">{role}</h4>
//                       </div>

//                       <p className="text-[11px] md:text-xs px-2 py-[3px] rounded-md bg-[#1c1c1c] text-gray-300">
//                         {year}
//                       </p>
//                     </div>

//                   </div>
//                 ))}
//               </div>

//             </div>

//             {/* Spacer for footer */}
//             <div className="h-[120px]"></div>

//           </div>

//         </div>
//       </div>

//       <div ref={rootRef} className="hidden md:block relative w-full h-[75vh] min-h-[250px] max-h-[750px]overflow-hidden bg-neutral-200 select-none overscroll-none"
//         onWheel={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//           pos.current.x -= e.deltaX;
//           pos.current.y -= e.deltaY;
//           clampBounds();
//           update();
//         }}


//         onPointerDown={(e) => {
//           const target = e.target;

//           // Agar interactive element pe click hai to drag start mat karo
//           if (target.closest(".no-drag")) return;

//           dragging.current = true;
//           start.current = {
//             x: e.clientX - pos.current.x,
//             y: e.clientY - pos.current.y,
//           };
//         }}
//         onPointerMove={(e) => {
//           if (!dragging.current) return;
//           pos.current.x = e.clientX - start.current.x;
//           pos.current.y = e.clientY - start.current.y;
//           clampBounds();
//           update();
//         }}
//         onPointerUp={() => (dragging.current = false)}
//         onPointerCancel={() => (dragging.current = false)}
//       >


//         <div className="relative w-full h-full overflow-hidden">

//           {/* 🔥 BottomNav yaha rakho */}
//           <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
//             <BottomNav />
//           </div>
//           <div ref={canvasRef} className="absolute left-0 top-0 w-[3200px] h-[2200px] will-change-transform"
//             style={{
//               backgroundColor: "#2b78c5",
//               backgroundImage: `linear-gradient(rgba(255,255,255,0.28) 2px, transparent 2px),
//             linear-gradient(90deg, rgba(255,255,255,0.28) 2px, transparent 2px),
//             linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px),
//             linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.18) 49%, rgba(255,255,255,0.18) 50%, transparent 20%), linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.18) 49%, rgba(255,255,255,0.18) 50%, transparent 20%)`,
//               backgroundSize: `120px 120px, 120px 120px, 20px 20px, 20px 20px, 120px 120px, 120px 120px`,
//             }}
//           >



//             {/* ================= FLOATING IMAGES ================= */}
//             <img
//               src={img1.src}
//               className={`${float} absolute top-[53%] left-[42.6%] translate-x-[-260px] translate-y-[-220px] rotate-[-12deg] p-[7px_7px_30px_7px] bg-white rounded-[5px]
//     transition-transform duration-300 ease-in-out hover:scale-[1.03]`}
//             // style={{ ...floatStyle(-260, -220, 12) }}
//             />
//             <Image

//               src={img2}
//               alt="floting img"
//               className={`${float} absolute top-[50%] left-[54%] translate-x-[200px] translate-y-[-180px] rotate-[8deg] p-[7px_7px_30px_7px] bg-white rounded-[5px]`}
//             ></Image>
//             <Image
//               src={img3}
//               alt=""
//               className={`${float} absolute top-[20%] left-[39%] translate-x-[-300px] translate-y-[120px] rotate-[13deg] p-[7px_7px_30px_7px] bg-white rounded-[5px]`}
//             ></Image>
//             <Image
//               src={img4}
//               alt=""
//               className={`${float} absolute top-[18%] left-[58%] translate-x-[220px] translate-y-[160px] rotate-[2deg] p-[7px_7px_30px_7px] bg-white rounded-[5px]`}
//             // style={{ ...floatStyle(750, 400, 10, "1.5s") }}
//             />

//             <div
//               className="absolute  top-[21.7%] left-[53.9%] translate-x-[220px] translate-y-[160px] rotate-[-18deg] pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//               <Image src={img5} alt="" className=" w-[140px] block rounded-[10px]" />
//             </div>



//             <div
//               className="absolute  top-[53%] left-[13%] translate-x-[220px] translate-y-[160px] rotate-[25deg] pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//               <Image src={img6} alt="" className=" w-[90px] block rounded-[10px]" />
//             </div>

//             <div
//               className="absolute  top-[51.4%] left-[25.3%] translate-x-[220px] translate-y-[160px]  pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//               <Image src={img7} alt="" className=" w-[95px] block rounded-[10px]" />
//             </div>

//             <div
//               className="absolute  top-[70%] left-[62%] translate-x-[220px] translate-y-[160px]  pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//               <Image src={img8} alt="" />
//             </div>

//             <div
//               className="absolute  top-[57%] left-[74%] translate-x-[220px] translate-y-[160px] rotate-[10deg] pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//               <Image src={img9} alt="" />
//             </div>

//             {/* <div
//           className="absolute  top-[0%] left-[74%] translate-x-[220px] translate-y-[160px] rotate-[25deg] pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
//           <Image src={img10} alt="" />
//         </div> */}

//             <div className="absolute top-[23%] left-[10%] translate-x-[220px] translate-y-[160px] rotate-[3deg] transition-transform duration-300 [transform-style:preserve-3d] text-black">
//               <Book
//                 cover={book1}
//                 title="Graphic Design Visionaries"
//                 backColor="#e97e37"
//                 pageColor="#ffffff"
//               />
//             </div>



//             <div className="absolute top-[52%] left-[3%] translate-x-[220px] translate-y-[160px]rotate-[9deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book2}
//                 title="Creativity Inc"
//                 backColor="#e0240b"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[59%] left-[22%] translate-x-[220px] translate-y-[160px]rotate-[-16deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book3}
//                 title="Nier : Art"
//                 backColor="#3c3c3d"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[74%] left-[22%] translate-x-[220px] translate-y-[160px]rotate-[-9deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book4}
//                 title="Monstar hunter"
//                 backColor="#dddddd"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className=" absolute top-[72%] left-[34%] translate-x-[220px] translate-y-[160px] rotate-[-12deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book5}
//                 title="Weapons of math destruction"
//                 backColor="#e9c03a"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className=" absolute top-[78%] left-[57%] translate-x-[220px] translate-y-[160px] rotate-[9deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book6}
//                 title="Elden Ring"
//                 backColor="#0a0a0a"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[55%] left-[61%] translate-x-[220px] translate-y-[160px]rotate-[-20deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book7}
//                 title="Dieter Rams"
//                 backColor="#f15b16"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[26%] left-[72%] translate-x-[220px] translate-y-[160px]rotate-[18deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book8}
//                 title="grid systems"
//                 backColor="#ff500b"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[5.3%] left-[2%] translate-x-[220px] translate-y-[160px]rotate-[7deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book9}
//                 title="Made in Japan"
//                 backColor="#ffffff"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[0%] left-[80%] translate-x-[220px] translate-y-[160px]rotate-[15deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book10}
//                 title="Logo Modernism"
//                 backColor="#fc7a0f"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute bottom-[88%] left-[47%] translate-x-[220px] translate-y-[160px] rotate-[69deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book11}
//                 title="Japanese Graphic Design"
//                 backColor="#ff300b"
//                 pageColor="#ffffff"
//               />
//             </div>



//             <div className=" absolute bottom-[95%] left-[42%] translate-x-[220px] translate-y-[160px] rotate-[-22deg] [backface-visibility:hidden] transition-transform duration-300">
//               <Book
//                 cover={book13}
//                 title="Mega Man"
//                 backColor="#0b4cff"
//                 pageColor="#ffffff"
//               />
//             </div>

//             <div className="absolute top-[38%] left-[13.5%] translate-x-[220px]  translate-y-[160px] rotate-[7deg]">
//               <AlbumPlayer
//                 albumImg={album1}
//                 vinylImg={vinyl1}
//               />
//             </div>

//             <div className="absolute top-[70%] left-[8%] translate-x-[220px] translate-y-[160px] rotate-[7deg]">
//               <AlbumPlayer
//                 albumImg={album2}
//                 vinylImg={vinyl2}
//               />
//             </div>

//             <div className="absolute top-[77%] left-[74%] translate-x-[220px] translate-y-[160px] rotate-[7deg]">
//               <AlbumPlayer
//                 albumImg={album3}
//                 vinylImg={vinyl3}
//               />
//             </div>

//             <div className="absolute top-[20%] left-[82%] translate-x-[220px] translate-y-[160px] rotate-[7deg]">
//               <AlbumPlayer
//                 albumImg={album4}
//                 vinylImg={vinyl4}
//               />
//             </div>

//             <div className="absolute top-[92%] left-[60%] translate-x-[220px] translate-y-[160px] rotate-[7deg]">
//               <AlbumPlayer
//                 albumImg={album5}
//                 vinylImg={vinyl5}
//               />
//             </div>

//             <div className="absolute top-[6%] left-[35%] rotate-[7deg]">
//               <InteractiveCard />
//             </div>

//             <div className="absolute top-[10.6%] left-[16%] -rotate-[5deg]">
//               <Canvas />
//             </div>

//             <div className="absolute top-[5%] left-[65%] rotate-[3deg]">
//               <ScratchFloatCard />
//             </div>


//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[150px]">


//               {/* ================= MAIN PROFILE CARD ================= */}
//               <div className="w-[560px] bg-white rounded-[7px]  p-7 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">

//                 {/* PROFILE */}
//                 <div className="relative flex items-center justify-between mb-5">
//                   <div className="flex items-center gap-[14px]">
//                     <Image
//                       src={img}
//                       alt="profile"
//                       className="w-[56px] h-[56px] rounded-full object-cover"
//                     />
//                     <div>
//                       <h2 className="text-[1.25rem] font-medium tracking-[-0.4px] leading-[1.7] text-black">
//                         Andre Souza
//                       </h2>
//                       <span className="text-base text-[#666] font-medium tracking-[-0.21px]">
//                         Design Engineer
//                       </span>
//                     </div>
//                   </div>


//                   <svg
//                     className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] text-black"
//                     viewBox="0 0 170 170"
//                     fill="none"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M48.984 57.6266C39.1262 37.9349 47.1632 14.0126 66.9347 4.19468C86.7063 -5.62326 110.726 2.38104 120.584 22.0727L165.788 112.373C175.646 132.065 167.609 155.987 147.838 165.805C128.066 175.623 104.047 167.619 94.1889 147.927L48.984 57.6266ZM112.699 38.9242C112.699 54.1243 100.327 66.4465 85.0649 66.4465C69.8029 66.4465 57.4306 54.1243 57.4306 38.9242C57.4306 23.7239 69.8029 11.4016 85.0649 11.4016C100.327 11.4016 112.699 23.7239 112.699 38.9242ZM4.2117 112.373L28.0668 64.7207L72.2659 153.625L72.3337 153.634C61.0496 169.079 39.8972 174.612 22.1623 165.805C2.3907 155.987 -5.64607 132.065 4.2117 112.373Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>

//                 {/* TEXT */}
//                 <p className="text-base leading-[1.6] tracking-[-0.4px] mb-3 text-black">
//                   Welcome to{" "}
//                   <span className="italic font-serif">
//                     my space on the internet
//                   </span>
//                   . I'm a design engineer who crafts interactions that spark joy,
//                   delight, and a sense of magic in users.
//                 </p>

//                 <p className="text-base leading-[1.6] tracking-[-0.4px] mb-3 text-black">
//                   Growing up, I spent hours playing Street Fighter, Donkey Kong, and Super Mario
//                   in a Super Nintendo with my dad.
//                 </p>

//                 <p className="text-base leading-[1.6] tracking-[-0.4px] mb-4 text-black">
//                   Have fun exploring my portfolio, and feel free to connect below.
//                 </p>

//                 {/* LINKS */}
//                 <div className="flex gap-[14px] my-4 text-black">
//                   {["Twitter", "LinkedIn", "GitHub", "Mail"].map((item) => (
//                     <button
//                       key={item}
//                       className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-[#f2f2f2] text-[15px] hover:bg-[#e4e4e4]"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>

//                 {/* DIVIDER */}
//                 <div className="w-full h-[1px] bg-[#e5e5e5] my-5" />

//                 {/* EXPERIENCE */}
//                 <div className="flex flex-col gap-4">
//                   {[
//                     ["#4fa3ff", "Praia Health", "Staff Product Designer", "2024 – Present"],
//                     ["#6fe07f", "Stone", "Specialist Product Designer", "2022 – 2024"],
//                     ["#2f8f4e", "Pager.me", "Senior Product Designer", "2019 – 2022"],
//                     ["#ff9800", "Try", "UX Designer & Researcher", "2018 – 2019"],
//                     ["#3f51b5", "National Council of Science", "UX Designer", "2018"],
//                   ].map(([color, company, role, year], i) => (
//                     <div key={i} className="flex items-center gap-[14px]">
//                       <div
//                         className="w-[40px] h-[40px] rounded-md"
//                         style={{ backgroundColor: color }}
//                       />
//                       <div className="flex justify-between w-full items-center">
//                         <div>
//                           <h3 className="text-[16px] font-medium text-black">{company}</h3>
//                           <h4 className="text-[14px] text-[#777] text">{role}</h4>
//                         </div>
//                         <p className="text-xs px-3 py-[2px] border rounded-md bg-[#f4f4f566] border-[#f4f4f5] hover:bg-[#f4f4f5] cursor-pointer text-black">
//                           {year}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ================= EDUCATION CARD ================= */}
//               <div className="w-[560px] bg-white rounded-[7px] p-7 shadow-[0_40px_80px_rgba(0,0,0,0.25)] text-black">

//                 <h3 className="text-[16px] font-semibold mb-5">Education</h3>

//                 <div className="flex flex-col gap-4">
//                   {[
//                     ["#7ecbff", "Meiuca", "Design system & Ops", "2021"],
//                     ["#000000", "Interaction Design Foundation", "Psychology of Interaction", "2019"],
//                     ["#ffd23f", "Senac - BA", "Interaction Design", "2016 – 2019"],
//                     ["#ff6b2d", "Adobe School of Arts", "3D & Motion Graphics", "2014 – 2016"],
//                   ].map(([color, name, role, year], i) => (
//                     <div key={i} className="flex items-center gap-[14px]">
//                       <div
//                         className="w-[40px] h-[40px] rounded-md"
//                         style={{ backgroundColor: color }}
//                       />
//                       <div className="flex justify-between w-full items-center">
//                         <div>
//                           <h3 className="text-[16px] font-medium">{name}</h3>
//                           <h4 className="text-[14px] text-[#777]">{role}</h4>
//                         </div>
//                         <p className="text-xs px-3 py-[2px] border rounded-md bg-[#f4f4f566] border-[#f4f4f5]">
//                           {year}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <style jsx global>{`
//         @keyframes float {
//           0% {
//             transform: translate(var(--tw-translate-x), var(--tw-translate-y))
//               translateY(0);
//           }
//           50% {
//             transform: translate(var(--tw-translate-x), var(--tw-translate-y))
//               translateY(-20px);
//           }
//           100% {
//             transform: translate(var(--tw-translate-x), var(--tw-translate-y))
//               translateY(0);
//           }
//         }
//       `}</style>

//             </div>

//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }