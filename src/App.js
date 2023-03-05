import React, { useRef, useLayoutEffect, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Sidebar from "./components/Sidebar";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// contenxt
export const ThemeContext = React.createContext();

const colors = {
  indigo: "#4f46e5",
  cyan: "#0891b2",
  teal: "#0d9488",
  gray: "#242329",
};

function App() {
  const [theme, settheme] = useState("#4f46e5");
  const [open, setopen] = useState(false);

  const main = useRef();

  const changeTheme = (theme) => {
    settheme(colors[theme]);
  };

  const handleOpen = () => setopen(!open);

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
          value:
            "I help Startup Launch 🚀 And grow Their product, I'm largly framwork agnostic but technologies , i love right now react,modern javascript,styled-component,Nodejs,Mongodb",
          delimiter: "",
        },
      });

      // header animation
      gsap.from("nav", {
        duration: 0.5,
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
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Sidebar open={open} handleOpen={handleOpen} />
        <Navbar handleOpen={handleOpen} />
        <Banner />
        <Projects />
        <Footer scrollTo={scrollTo} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
