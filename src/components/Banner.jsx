import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import NodeLogo from "../assets/nodejs.png";

function Banner() {
  const wrapper = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".banner", {
        duration: 1,
        y: "50px",
        ease: "ease-in",
        opacity: "0",
      });
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
        <div className="box justify-center items-center w-32 h-32 rounded-[30px] bg-[#242329] rotate-45 absolute md:flex top-40 right-20  md:right-[16%] md:top-1/2">
          <img
            src={reactLogo}
            className="w-12 h-12 object-cover"
            alt="react-logo"
          />
        </div>
        <div className="box w-20 h-20 rounded-xl bg-[#242329] rotate-45 absolute md:flex justify-center items-center top-[15%] md:top-10 md:right-40 bottom-80">
          <img src={jsLogo} className="w-8 h-8 object-contain -rotate-45" alt="logo"/>
        </div>
        <div className="box w-12 h-12 rounded-xl bg-[#46454a] rotate-45 absolute left-[25%] bottom-20 flex justify-center items-center">
          <img src={NodeLogo} className="w-8 h-8 object-contain -rotate-45" alt="logo"/>
        </div>
      </div>

      <div className="content relative z-10 w-full md:w-1/2 mx-auto h-56 text-center">
        <h1
          className="text-4xl md:text-6xl font-semibold text-white"
          id="heading"
        >
          Hi' I'm Rishabh
        </h1>
        <h2 className="text-xl text-zinc-400 mt-3 font-medium" id="sub-heading">
          Frontend Developer{" "}
        </h2>
        <p className="text-zinc-300 w-4/5 mx-auto mt-3" id="about"></p>
      </div>
    </div>
  );
}
export default Banner;