import React from 'react'
import Card from './Card'
import Heading from './Heading';
import gosocialPng from '../assets/gosocial.png';
import chatAppPng from '../assets/chatapp.png';
import sortingVisualerPng from '../assets/sortingVisualizer.png';
import cardGamepng from '../assets/HunTheAce.png';
import abstractJpg from '../assets/abstract.jpg';

function Project() { 
  const pngs = [
    {
      png : gosocialPng,
      title : "Go Social",
      text : "This is full stack mern social media application for make friends and share your post with tham"
    },
    {
        png : chatAppPng,
        title : "React Chat App",
        text : "This is full stack mern react chat application,signed up and creat room and start conversation"
    },
     {
        png : sortingVisualerPng,
        title : "Sorting Visualizer App",
        text : "This application will show you visual representation of sorting algorithm"
    },
    {
      png : cardGamepng,
      title : "Muliplayer Card Game (Hunt The Ace)",
      text : "This is simply a card game in which you can connect multiple players help socket.io and Tech used in HTML , CSS , JS , Nodejs , scoket.io"
    },
  ]
  return (
    <div className="w-11/12 h-auto mx-auto my-6 rounded  bg-gray-50 shadow-sm p-5" id="project" >
      <Heading text="Projects"/>
       <div className="projects flex w-10/12 mx-auto justify-between md:p-5 flex-wrap flex-col md:flex-row">
        {
            pngs.map(item => {
                return (
                    <Card 
                     item={item}
                    />
                )
            })
        }
        
       </div>
    </div>
  )
}

export default Project