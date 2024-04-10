import GuessGame from '../photos/GuessGame.png'
import Hotel from '../photos/Hotel.png'
import project from '../photos/svgviewer-png-output.png'
import deliciousRecipe from '../photos/recipe3.jpeg'
import innovation from '../photos/innovation.jpeg'
import image from '../photos/image.png'
import project2 from '../photos/svgviewer-png-output (1).png'
import BlogWeb from '../photos/BlogWeb.png'
import landlord from '../photos/landlord.jpg'
import ueab from '../photos/ueab.png'
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
      <div className="flex flex-wrap  justify-center sm:justify-between ">
      
      {/* Justprenuer */}
      <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
          <div className='relative'>
              <a href="https://justpreneur.vercel.app/"  target="_blank" rel="noreferrer">
                <img className='rounded-t-md' src={BlogWeb} alt="InnovateZone" />
              </a> 
              <a href="https://justpreneur.vercel.app/"  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">Justprenuer</p>
              </a>
          </div>
        <p className='text-white px-2'>Blog Website made with React, Nodejs/express and MySQL</p>
        <div className='flex justify-between px-2 p-1'>
            <p className='text-yellow-500 border px-2 rounded-lg'><a href="https://blogging-website-five.vercel.app/">preview</a></p>
            {/* <p className='text-yellow-500 line-through'><a href="#">Source</a></p> */}
            <p><IoHeart color='red' size={26}/></p>
        </div>
        </div>

         {/* centri closet */}
         <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto  rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
            <div className='relative'>
            <a href="https://campus-closet.vercel.app/"   target="_blank" rel="noreferrer">
              <img className='rounded-t-md' src={closet} alt="Centri Closet" />
            </a> 
            <a href="https://campus-closet.vercel.app/" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">Centri Closet</p>
              </a>
            </div>
          <p className='text-white px-2'>Centri Closet is an online marketplace for Baraton University Student</p>
          <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://campus-closet.vercel.app/">Preview</a></p>
          <p><IoHeart color='red' size={26}/></p>
          </div>
        </div>

        {/* Délicieux Recipes */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto  rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
           <div className='relative'>
                <a href="https://dericieux.vercel.app/"  target="_blank" rel="noreferrer">
                  <img className='rounded-t-md' src={deliciousRecipe} alt="InnovateZone" />
                </a>
                <a href="https://dericieux.vercel.app/" class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p class="text-lg text-yellow-400 font-bold">Délicieux Recipes</p>
              </a>
           </div>
        <p className='text-white px-2'>Délicieux Recipes is a PWA  with fully offline capabilities</p>
        <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://dericieux.vercel.app/"  target="_blank" rel="noreferrer">Preview</a></p>
          <p>
            <a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/gitaujustus/Delicieux"  target="_blank" rel="noreferrer">Source</a>
          </p>
        </div>
        </div>

        {/* UEAB Innovation */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto  rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
           <div className='relative'>
                <a href="https://ueabinnovation.vercel.app/"  target="_blank" rel="noreferrer">
                  <img className='rounded-t-md' src={innovation} alt="InnovateZone" />
                </a>
                <a href="https://ueabinnovation.vercel.app/" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <span className="text-lg text-yellow-400 font-bold">UEAB Innovation</span>
              </a>
           </div>
        <p className='text-white px-2'>UEAB innovation is a react website for UEA Baraton</p>
        <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://ueabinnovation.vercel.app/"  target="_blank" rel="noreferrer">Preview</a></p>
          <p><IoHeart color='red' size={26}/></p>
        </div>
        </div>
        {/* 10 star hotel */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto  rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
           <div className='relative'>
                <a href="https://young-professor-github-io.vercel.app/"  target="_blank" rel="noreferrer">
                  <img className='rounded-t-md' src={Hotel} alt="InnovateZone" />
                </a>
                <a href="https://young-professor-github-io.vercel.app/" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">10 Star Hotel</p>
              </a>
           </div>
        <p className='text-white px-2'>Hotel MIS made with Html/Css, Javascript Languages</p>
        <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://young-professor-github-io.vercel.app/"  target="_blank" rel="noreferrer">Preview</a></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/Young-Professor/Young-Professor.github.io"  target="_blank" rel="noreferrer">Source</a></p>
        </div>
        </div>


        {/* front end clone */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
        <div className='relative'>
        <a href="https://the-challenge-blue.vercel.app/"  target="_blank" rel="noreferrer">
          <img className='rounded-t-md' src={challenge} alt="the challenge" />
        </a>
        <a href="https://the-challenge-blue.vercel.app/" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">Front End Clone</p>
        </a>
        </div>
          <p className='text-white px-2'>Front End Clone using react and Tailwind Css</p>
          <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://the-challenge-blue.vercel.app/"  target="_blank" rel="noreferrer">Preview</a></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/Young-Professor/Web.challenge"  target="_blank" rel="noreferrer">Source</a></p>
          </div>
        </div>

        {/* 30 day challenge */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
        <div className='relative'>
        <a href="https://the-challenge-blue.vercel.app/"  target="_blank" rel="noreferrer">
          <img className='rounded-t-md' src={image} alt="the challenge" />
        </a>
        <a href="https://the-challenge-blue.vercel.app/" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">30 Day Challenge</p>
        </a>
        </div>
          <p className='text-white px-2'>A productive app to record your notes and Todo&apos;s</p>
          <div className='flex justify-between px-2'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://the-challenge-blue.vercel.app/"  target="_blank" rel="noreferrer">Preview</a></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/Young-Professor/Web.challenge"  target="_blank" rel="noreferrer">Source</a></p>
          </div>
        </div>

        {/* Guess Game */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff] shadow-lg">

          <div className='relative cursor-pointer'>
              <a href="https://github.com/Young-Professor/Mind-GuessGame"  target="_blank" rel="noreferrer">
                <img className='rounded-t-md' src={GuessGame} alt="guessgame" />
              </a>
              <a href="https://github.com/Young-Professor/Mind-GuessGame" class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p class="text-lg text-yellow-400 font-bold">Guess Game</p>
              </a>
          </div> 
          <p className='text-white px-2'>Guess game made with Java Language</p>
          <div className='flex justify-between px-2'>
          <p><p><IoHeart color='red' size={26}/></p></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/Young-Professor/Mind-GuessGame"  target="_blank" rel="noreferrer">Source</a></p>
          </div>
        </div>

       

        {/* Ueab Applications */}
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] h-auto rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
            <div className='relative'>
              <a href="https://ueab.vercel.app/home.html"  target="_blank" rel="noreferrer">
                <img className='rounded-t-md hover:opacity-0' src={ueab} alt="guessgame" />
              </a>
              <a href="https://ueab.vercel.app/home.html" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 border-t-4 border-yellow-400 rounded-t-md">
                  <p className="text-lg text-yellow-400 font-bold">Ueab Applications</p>
              </a>
            </div>
          <p className='text-white px-2'>Ueab Application is a website made using plain HTML, CSS and Javascript. Gradutation & Supp Application</p>
          <div className='flex justify-between px-2 p-1'>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://ueab.vercel.app/home.html">Preview</a></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/gitaujustus/Ueab_Applications"  target="_blank" rel="noreferrer">Source</a></p>

          </div>
        </div>
      

        {/* TenantConnect App */} 
        <div className="w-80 sm:w-60 box-border bg-[#1F2235] hover:border-t-2 border-yellow-400 rounded-t-md h-auto p-2 rounded-lg my-3 shadow-[#00d0ff] shadow-lg">
        <div className='flex justify-around'>
           <div className='relative tenantconnect'>
           <a href="https://github.com/gitaujustus/TenantConnect-App"  target="_blank" rel="noreferrer">
              <img  src={landlord} className='h-48' alt="guessgame" />
            </a>
            <a href="https://github.com/gitaujustus/TenantConnect-App" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[#1F2235] text-white hover:opacity-100 ">
                  <p className="text-lg text-yellow-400 font-bold">Tenant Connect App</p>
              </a>
           </div>
          <div>
          <p className='text-white mr-auto'>TenantConnect App is a mobile based application developed using flutter and Dart</p>
          <div className='flex justify-between'>
          <p><IoHeart color='red' size={26}/></p>
          <p><a className='text-yellow-500 border px-2 rounded-lg' href="https://github.com/gitaujustus/TenantConnect-App">source</a></p>
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
