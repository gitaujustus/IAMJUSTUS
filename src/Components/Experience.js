import { NavLink } from "react-router-dom";
import pic from "../photos/programming.png"
const Experience = () => {
  return (
    <div id="experience" className="mx-auto px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-center">
        My Experience
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
        <div className="w-full md:w-1/2">
          <p>
            I am a skilled PERN stack web developer experienced in{" "}
            <span className="text-yellow-300">
              HTML, CSS, JavaScript, Typescript, Prisma, Node.js, NextJs, React, MySQL, and Tailwind CSS
            </span>
            . I create efficient and user-friendly web applications. Check out
            my Projects{" "}
            <span className="text-blue-500 underline">
              <NavLink to="/projects">here</NavLink>
            </span>
          </p>
          <br />
          <p>
            As a graphic designer at the <span className="text-blue-500 underline"><a href="https://ueab.ac.ke">University of Eastern Africa Baraton Crested Crane</a></span>, I
            specialize in creating visually appealing designs using 
            {" "}
            <span className="text-yellow-300">
              Adobe Photoshop, Lightroom, Illustrator and Canva.  
            </span> {" "}
             I also excel in animation
            with <span className="text-yellow-300">Blender</span> and <span className="text-yellow-300"> After Effects</span>,  and editing
            videos using <span className="text-yellow-300">Premier Pro</span>. Committed to delivering exceptional results, I strive
            to exceed expectations and enhance the overall user experience
            through my creative and technical skills. 
          </p>
        </div>
        <div className="hidden md:block">
          <img src={pic} alt="programming" className="h-72 swinging-image" srcset="" />
        </div>
      </div>
      {/* progress bar of each skill */}
        <h3 className="text-xl text-yellow-500 font-bold my-3  text-center">
        Skill Spectrum: Development
        </h3>
      <div className="sm:flex justify-between flex-wrap">
        {/* JavaScript Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-3">
            <span className="text-base font-medium text-blue-700 dark:text-white">Javascript</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
          </div>
        </div>

         {/* Typescript Skill */}
        <div className="sm:w-[45%] mb-10 ">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Typescript</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
        </div>

         {/* JavaScript Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Node.js</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
          </div>
        </div>

        {/* React Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">React</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">98%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "98%"}}></div>
          </div>
        </div>

        {/* NextJs Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">NextJs</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
          </div>
        </div>
         {/* MySQL/Postgres Skill */}
         <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">MySQL/Postgres</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">98%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "98%"}}></div>
          </div>
         </div>

         {/* Prisma Skill */}
         <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Prisma</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
          </div>
         </div>
         {/* Tailwind Skill */}
         <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Tailwind CSS</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
          </div> 
          </div> 
          {/* PERN Stack Skill */}
          <div className="sm:w-[45%] mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">PERN Stack</span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
            </div>
          </div>

          {/* Flutter and Dart Skill(mobile development) */}
          <div className="sm:w-[45%] mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-base font-medium text-blue-700 dark:text-white">Flutter and Dart</span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
            </div>
          </div>
      </div>
      <h3 className="text-xl text-yellow-500 font-bold my-3  text-center">
        Skill Spectrum: Designing
      </h3>
       <div className="sm:flex justify-between flex-wrap">
        {/* Adobe Photoshop Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Photoshop</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
          </div>
        </div>
        {/* Adobe Lightroom Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Lightroom</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
          </div>
        </div>
        {/* Adobe Illustrator Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Illustrator</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
          </div>
        </div>
        {/* Adobe InDesign Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Adobe InDesign</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
          </div>
        </div>
        {/* Figma Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Figma</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
        </div>
        {/* Canva Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Canva</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
          </div>
        </div>

        {/* Adobe Premier Pro Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Adobe Premier Pro</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "65%"}}></div>
          </div>
        </div>
        {/* Capcut Skill */}
        <div className="sm:w-[45%] mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-blue-700 dark:text-white">Capcut</span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Experience;
