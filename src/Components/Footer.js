import { NavLink } from "react-router-dom";
import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";


const footer = () => {
    
    const scrollToProjects = () => {
        setTimeout(() => {
            const projectsElement = document.getElementById('projects');
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToAbout=()=>{
        setTimeout(() => {
            const AboutsElement = document.getElementById('about');
            AboutsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToContacts=()=>{
        setTimeout(() => {
            const ContactsElement = document.getElementById('contacts');
            ContactsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToExperience=()=>{
        setTimeout(() => {
            const ExperienceElement = document.getElementById('experience');
            ExperienceElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    return ( 
        <div className="bg-cyan-700 block py-5 px-5 md:flex md:justify-around md:items-center mt-10">
            <ul className="text-white">
                <li><NavLink exact='true' to="/" ><b>&gt;Home</b></NavLink></li>
                <li><NavLink onClick={scrollToProjects} to="/projects"><b>&gt;Projects</b></NavLink></li>
                <li><NavLink onClick={scrollToExperience} to="/experience" ><b>&gt;Experience</b></NavLink></li>
                <li><NavLink onClick={scrollToContacts} to="/contacts" ><b>&gt;Contacts</b></NavLink></li>
                <li><NavLink onClick={scrollToAbout} to="/about" ><b>&gt;About</b></NavLink></li>
            </ul>
            {/* <p className="text-center text-white p-2">Copyright © 2023</p> */}
            <p className="text-white py-5 md:py-0 md:p-2">Copyright © 2024</p>
            <div className="flex space-x-5 md:sociallize">
          <a href="https://www.facebook.com/@justoegitau"><BsFacebook size={26} className="text-white" /></a>
          <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
          <a href="https://www.instagram.com/justoegitau1"><BsInstagram size={26} className="text-red-300" /></a>
          <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
          <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="" /></a>
          <a href="https://github.com/Young-Professor"><BsGithub size={26} className="" /></a>
        </div>
        </div>
     );
}
 
export default footer;