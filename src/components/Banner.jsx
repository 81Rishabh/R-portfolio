import React, { useRef, useLayoutEffect, useContext } from "react";
import gsap from "gsap";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import NodeLogo from "../assets/nodejs.png";
import { ThemeContext } from "../App";

function Banner() {
  const wrapper = useRef();
  const { theme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#heading", {
        duration: 1,
        y: "50px",
        ease: "ease-in",
        opacity: "0",
      });
      gsap.from("#sub-heading", {
        duration: 1,
        y: "50px",
        ease: "ease-in",
        opacity: "0",
        delay: 0.25,
      });
      gsap.from("#about", {
        duration: 1,
        y: "50px",
        ease: "ease-in",
        opacity: "0",
        delay: 0.5,
      });
    }, wrapper);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      className="banner h-auto min-h-[45rem] w-full overflow-hidden relative flex justify-center items-center"
      id="wrapper"
      ref={wrapper}
    >
      <div className="wrapper">
        <div className="box w-[40rem] h-[40rem] rounded-[150px] bg-[#242329] rotate-45 absolute -left-60 -top-12"></div>
        <div className="box  justify-center items-center w-20 h-20 rounded-[15px] bg-transparent md:bg-[#242329] opacity-90 rotate-45 absolute md:flex bottom-0 right-0  md:right-[16%] md:top-1/2">
          <img
            src={reactLogo}
            className="w-12 h-12 object-cover"
            alt="react-logo"
          />
        </div>
        <div className="box w-20 h-20 rounded-xl bg-[#242329] rotate-45 absolute md:flex justify-center items-center top-[15%] md:top-10 md:right-40 bottom-80">
          <img
            src={jsLogo}
            className="w-8 h-8 object-contain -rotate-45"
            alt="logo"
          />
        </div>
        <div className="box w-12 h-12 rounded-xl bg-transparent md:bg-[#46454a] rotate-45 absolute left-[25%] bottom-20 flex justify-center items-center">
          <img
            src={NodeLogo}
            className="w-8 h-8 object-contain -rotate-45"
            alt="logo"
          />
        </div>
      </div>

      <div className="content relative z-10 w-full h-72  md:w-1/2 mx-auto text-center flex justify-around flex-col items-center">
        <div>
          <h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-indigo-600 bg-clip-text"
            id="heading"
          >
            Hi' I'm Rishabh
          </h1>
          <h2
            className="text-xl text-zinc-400 mt-3 font-medium text-indigo-200"
            id="sub-heading"
          >
            Frontend Developer{" "}
          </h2>
          <p className="text-zinc-300 w-4/5 mx-auto mt-3" id="about"></p>
        </div>
        {/* mouse animation */}
        <div className="flex items-center animate-upDown">
          <div
            style={{ borderColor: theme !== "#242329" ? theme : "#fff" }}
            className="mouse-wraper border-4 w-6 h-10 rounded-full flex justify-center items-center"
          >
            <div
              style={{ borderColor: theme !== "#242329" ? theme : "#fff" }}
              className="wheel border-2 w-0 h-3 rounded-full"
            ></div>
          </div>
          <div className="flex items-center text-white ml-4 text-lg">
            <span className="mr-1">Scroll Down</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
