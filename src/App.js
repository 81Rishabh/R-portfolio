import React, { useRef, useLayoutEffect } from "react";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const main = useRef();

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // header animaton when scroll positon is larget then 15
      gsap.to("#about", {
        duration: 8,
        ease: "power2",
        text: {
          value : "I help Startup Launch 🚀 And grow Their product, I'm largly framwork agnostic but technologies , i love right now react,modern javascript,styled-component,Nodejs,Mongodb",
          delimiter : "",
        },
      });

      // header animation
      gsap.from("nav", {
        duration: .5,
        y: -100,
        ease: "ease-in",
      });

      //  project section animation
      gsap.from(".project-wrapper", {
        duration: 0.5,
        y: 100,
        ease: "ease-in-out",
        opacity: 1,
        scrollTrigger: {
          trigger: ".project-wrapper",
          toggleActions: "restart none none none",
          start: "top bottom",
        },
      });

      // boxed animation
      gsap.from(".box", {
        duration: 1,
        y: 50,
        ease: "slow",
        scrollTrigger: {
          trigger: ".box",
          toggleActions: "restart none none none",
          start: "80% center",
          end: "top top",
          snap: true,
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App dark:bg-black" ref={main}>
      <Navbar />
      <Banner />
      <Projects />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
