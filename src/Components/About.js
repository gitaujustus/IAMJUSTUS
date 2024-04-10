import about from "../photos/about.png"
const About = () => {
  return (
    <div id="about" className="mx-auto mt-20  px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-center">
        About Me
      </h1>
      <img src={about} alt="About" className="h-28 moving-image" srcset="" />
      <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
        <div className="w-full md:w-1/2">
          <p>
            {/* Hi, I'm Justus, a software engineer from Nairobi, Kenya. As a senior
              student pursuing a degree in software engineering, I'm passionate
              about solving complex problems through programming. */}
            Hi, I&apos;m Justus, a software engineer from Nairobi, Kenya, and founder
            of  <span className="text-yellow-300">JASTUTE</span> — a tech and graphic company. I oversee  <span className="text-yellow-300">Centri Closet</span>, a
            popular ecommerce website based in  <span className="text-yellow-300">Baraton University</span> . As a senior software
            engineering student, I'm dedicated to problem-solving through
            programming.
          </p>
          <br />
          <p>
            I have experience with{" "}
            <span className="text-yellow-500">
              HTML, CSS, JavaScript, Node.js, React, MySQL, and Tailwind CSS
            </span>
            . I love exploring new technologies and creating user-friendly web
            interfaces with responsive design.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p>
            When I&apos;m not coding, I enjoy reading and going on adventures to new
            places. My goal is to use my skills to make a positive impact in
            society, by identifying and solving problems that affect people's
            lives.
          </p>
          <br />
          <p>
            Please check out my projects and skills pages to learn more about my
            work and capabilities. Thank you for taking the time to visit my
            portfolio website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
