import Justus  from "../photos/Justus latest.png";
import "../index.css";
import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Home = () => {
  const scrollToContacts=()=>{
    setTimeout(() => {
        const ContactsElement = document.getElementById('contacts');
        ContactsElement.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}
  return (
    <div className="flex flex-col md:flex-row my-10 ">
      <div className=" md:mr-32">
        <img className="h-96 myImage mx-20" src={Justus} alt="Justus" />
      </div>
      <div className=" w-full md:w-1/2 mybio">
        <div className="welcome">
          <h1 className="text-2xl text-white welcomed">Welcome |</h1>
          <h1 className="text-xl text-yellow-500">I&apos;m a Software Engineer</h1>
        </div>
        <div className="w-96 Bio">
          <p className="text-white">
          I&apos;m <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/" className="text-blue-200">Justus Gitau</a>, CEO and Founder of <span className="text-blue-200">J'ASTUTE</span> and  a full-stack developer studying software
            engineering at University of Eastern Africa, Baraton. I have a
            strong interest in artificial intelligence and machine learning, and
            enjoy reading and listening to music in my free time. As an avid
            traveler and explorer, I incorporate my experiences and insights
            into my work, constantly pushing the boundaries of whatI&apos;s possible
            in software engineering. Get in touch to know more about me :
          </p>
        </div>
        <NavLink onClick={scrollToContacts} to="/contacts"  className="text-black w-36 font-bold py-6 h-8 rounded-md my-4 mx-auto md:mx-0 bg-gradient-to-r from-[#2A97A5] to-[#EEF3FF]  flex items-center p-2 gap-2">
          Get in touch  <FaArrowRight />
        </NavLink>

        <br />
        <div className="flex space-x-5 sociallize">
          <a href="https://www.facebook.com/@justoegitau1"><BsFacebook size={26} className="text-white" /></a>
          <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
          <a href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300" /></a>
          <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
          <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="" /></a>
          <a href="https://github.com/Young-Professor"><BsGithub size={26} className="" /></a>

        </div>
       <div className="mt-4 mx-5 md:mx-0">
       <a href="https://visitcount.itsvg.in">
            <img src="https://visitcount.itsvg.in/api?id=myportifolio&label=Views&color=2&icon=5&pretty=true" alt="" />
        </a>
       </div>
      </div>
    </div>
  );
};

export default Home;
