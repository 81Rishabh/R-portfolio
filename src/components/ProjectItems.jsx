
import React ,{useContext} from "react";
import { ThemeContext } from "../App";


function ProjectItems({ it }) {
  const {theme} = useContext(ThemeContext);
  const { img, title, description, date, deployLink, githubLink } = it;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[40%_auto] bg-zinc-800 md:bg-transparent p-3 rounded-xl">
      <div className="left w-full flex justify-center items-start p-3">
        <img
          src={img}
          alt="chitchat"
          className="w-[20rem] object-contain border-2 rounded-lg border-zinc-600 "
          loading="lazy"
        />
      </div>
      <div className="right flex flex-col items-center text-center md:text-left md:items-start py-2 md:pl-4">
        <h1 className="text-white font-bold text-xl">{title}</h1>
        <p className="text-xs md:text-sm text-zinc-400 mt-3 tracking-wide leading-5 md:leading-6 break-words">
          {description}
        </p>
        <p className="inline-flex items-center text-zinc-400 text-xs mt-2">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <path d="M16 2v4"></path>
            <path d="M8 2v4"></path>
            <path d="M3 10h18"></path>
          </svg>
          <span className="ml-2 text-zinc-300">{date}</span>
        </p>
        <div className="buttons mt-4">
          <a href={deployLink}>
            <button
              type="button"
              style={{backgroundColor : theme}}
              className={`p-2 text-white font-medium rounded-md hover:opacity-90 shadow-md hover:scale-95 transition-all duraction-100`}
            >
              Preview 🚀
            </button>
          </a>
          <a href={githubLink}>
            <button
              type="button"
              className="ml-2 bg-gradient-to-r from-zinc-500 to-gray-600 py-2 px-3 text-white font-medium rounded-md hover:opacity-90 shadow-md hover:scale-95 transition-all duraction-100 inline-flex items-center"
            >
              Source Code
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
