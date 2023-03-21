import React from "react";
import chitChat from "../assets/chitChat.png";
import EShop from "../assets/Eshop.png";
import SVisualization from "../assets/SVisualization.png";
import WowMovies from "../assets/WowMovie.png";
import ProjectItems from "./ProjectItems";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";

function Projects() {
  const data = [
    {
      img: chitChat,
      title: "Real Time Chat App",
      description:
        "This is advance real-time chat web application built in  Html,css,JavaScript,Nodejs,ReactJS,Socket.io,MongoDB",
      date: "01/01/2023",
      deployLink: "https://chitchat-frontend-l8g9.onrender.com",
      githubLink: "https://github.com/81Rishabh/MERN-CHAT-APP",
    },
    {
      img: WowMovies,
      title: "Movies App (Wow Movies)",
      description:
        "This is movie app, get all the trending,top Rated,upcoming movie with rating and built in using Html,css,JavaScript,ReactJS",
      date: "5/01/2023",
      deployLink: "https://sage-lamington-183038.netlify.app/",
      githubLink: "https://github.com/81Rishabh/React-Movie-App",
    },
    {
      img: EShop,
      title: "Ecommerce Store",
      description:
        "This is Ecommerce web app built in using Html,css,JavaScript,ReactJS",
      date: "10/01/2023",
      deployLink: "https://stellular-cassata-93e1ba.netlify.app/",
      githubLink: "https://github.com/81Rishabh/Ecommerce-shop",
    },
    {
      img: SVisualization,
      title: "Sorting Visualization",
      description:
        "This sorting visulization website for visualzing sorting algorithm such as bubble-sort,selection-sort,insertion-sort,merge-sort built in using Html,Css,JavaScript,Nodejs,ReactJS,Socket.io,MongoDB",
      date: "10/09/2022",
      deployLink: "https://81rishabh.github.io/Sorting_Visulizer/",
      githubLink: "https://github.com/81Rishabh/Sorting_Visulizer",
    },
  ];
  return (
    <div id="projects" className="flex justify-center relative overflow-hidden">
      <div className="w-full lg:w-3/5 h-auto">
        <h1 className="text-xl font-bold text-white h-auto max-h-3/5 text-center md:text-left">
          Projects
        </h1>
        <div className="project-wrapper bg-transparent md:bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-xl p-8 mt-5 grid grid-rows-4 gap-y-10">
          {data &&
            data.map((it, index) => {
              return <ProjectItems it={it} key={index} />;
            })}
        </div>
      </div>
      <div id="content">
        <div
          data-leg="2"
          className="box w-32 h-32 rounded-[30px] bg-[#242329] rotate-45 absolute top-40 right-20 -z-10 flex justify-center items-center"
        >
          <img src={htmlLogo} className="w-12 h-12 object-contain -rotate-45" alt="logo"/>
        </div>
        <div
          data-leg="1"
          className="box w-24 h-24 rounded-[25px] bg-[#242329] rotate-45 absolute top-1/2 left-20 -z-10 hidden md:flex justify-center items-center"
        >
          <img src={cssLogo} className="w-12 h-12 object-contain -rotate-45" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
