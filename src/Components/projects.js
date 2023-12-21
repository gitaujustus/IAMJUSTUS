import GuessGame from '../photos/GuessGame.png'
import Hotel from '../photos/Hotel.png'
import project from '../photos/svgviewer-png-output.png'
import project2 from '../photos/svgviewer-png-output (1).png'
import BlogWeb from '../photos/BlogWeb.png'
import landlord from '../photos/landlord.jpg'

import closet from '../photos/closet.jpg'
import challenge from '../photos/challenge.png'
import { IoHeart } from "react-icons/io5";


const projects = () => {
  return (
    
    <div id='projects' className="mx-auto px-6 sm:px-10 md:px-20 about">
      <div className='flex mt-20 mb-10'>
        <img src={project2} alt="project" className="h-52 swinging-image m-auto" srcset="" />
        <img src={project} alt="project" className="h-52 hidden md:flex md:m-auto " srcset="" />
      </div>
      <h1 className="text-2xl text-yellow-500 underline text-center p-4">Projects</h1>
      <div>
        <p className="text-white my-2">These are some of the projects which i have been working on:</p>
      <div className="flex flex-wrap justify-between projects">
      <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
           <a href="https://blogging-website-five.vercel.app/" target="_blank"><img src={BlogWeb} alt="InnovateZone" /></a> 
        <p className='text-white'>Blog Website made with React, Nodejs/express and MySQL</p>
        <div className='flex justify-between'>
            <p className='text-yellow-500 border px-2 rounded-lg'><a href="https://blogging-website-five.vercel.app/">preview</a></p>
            {/* <p className='text-yellow-500 line-through'><a href="#">Source</a></p> */}
            <p><IoHeart color='red' size={26}/></p>
        </div>
        </div>
        <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
           <a href="https://young-professor.github.io/" target="_blank"><img src={Hotel} alt="Hotel MIS" /></a> 
        <p className='text-white'>Hotel MIS made with Html/Css, Javascript Languages</p>
        <div className='flex justify-between'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://young-professor.github.io/" target="_blank">Preview</a></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Young-Professor.github.io" target="_blank">Source</a></p>
        </div>

        </div>
        <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
        <a href="https://the-challenge-blue.vercel.app/" target="_blank"><img src={challenge} alt="the challenge" /></a>
          <p className='text-white'>Front End Clone using react and Tailwind Css</p>
          <div className='flex justify-between'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://the-challenge-blue.vercel.app/" target="_blank">Preview</a></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Web.challenge" target="_blank">Source</a></p>
          </div>
        </div>
        <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
          <a href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank"><img src={GuessGame} alt="guessgame" /></a> 
          <p className='text-white'>Guess game made with Java Language</p>
          <div className='flex justify-between'>
          <p><p><IoHeart color='red' size={26}/></p></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank">Source</a></p>
          </div>
        </div>
        <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
        <a href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank"><img src={closet} alt="guessgame" /></a> 
          <p className='text-white'>Centri Closet is an online marketplace for Baraton University Student</p>
          <div className='flex justify-between'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://campus-closet.vercel.app/">Preview</a></p>
          <p><IoHeart color='red' size={26}/></p>
          </div>
        </div>
        <div className="w-60 box-border bg-[#1F2235] h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
          
        <div className='flex justify-around'>
        <a href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank"><img src={landlord} className='h-48' alt="guessgame" /></a> 
          <div>
          <p className='text-white w-[70%] md:w-24 mr-auto'>Centri Closet is an online marketplace for Baraton University Student</p>
          <div className='flex justify-between'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://campus-closet.vercel.app/">Preview</a></p>
          <p><IoHeart color='red' size={26}/></p>
          </div>
          </div>
        </div>
        </div>
        
      </div>
      </div>
      <br />
    </div>
  );
};

export default projects;
