// import { useEffect, useState } from "react";
// import supabase from "../config/supabase";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import picture from "../photos/contact us.png"
// import messageUs from "../photos/message.png"

// const Contacts = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, isLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const Messages = async () => {
//       const { data, error } = await supabase.from("Messages").select();
//       if (error) {
//         console.log(error);
//       } else {
//         // console.log(data);
//         setMessages(data);
//       }
//     };
//     Messages();
//   }, []);

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     isLoading(true);
//     const data = { name, email, message, source:'Message from Portifolio website' };
//     console.log(data);
//     //https://nodemailer-server-rouge.vercel.app/
//     try {
//       const res = await fetch("https://nodemailer-server-rouge.vercel.app/mails", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       if (res.ok) {
//       const responseJson = await res.json(); // parse response as JSON
//       console.log(responseJson);
//         isLoading(false);
//         e.target.reset();
//         toast.success("Message Sent Successfully!", {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 1000,
//         });
//       } else {
//         throw new Error("Failed to add item");
//       }
//     } catch (error) {
//       console.log(error);
//       isLoading(false);
//       toast.error("An Error Occured !", {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 1000,
//       });
//     }
//     //sending to supabase
//     // const { data, error } = await supabase
//     //   .from("Messages")
//     //   .insert({ Name, Email, Message });
//     // if (error) {
//     //   console.log(error);
//     // } else {
//     //   setSuccess(true);
//     //   e.target.reset();
//     //   setTimeout(() => {
//     //     setSuccess(false);
//     //   }, 3000);
//     // }
//     // isLoading(false);
//   };
//   return (
//     <div id="contacts" className="mx-auto px-6 sm:px-10 md:px-20 about">
//       <h1 className="text-2xl text-yellow-500 underline text-center">
//         Contact Me
//       </h1>
//       <div className="flex items-center md:items-center justify-center  md:justify-between p-12">
//       <img src={picture} alt="contact" className="h-10 hidden sm:block md:h-28 swinging-image" srcset="" />
//         <div className="mx-auto w-full max-w-[550px]">
//           <h2 className="text-center text-white text-xl underline">
//             Say Hi to Justus!
//           </h2>
//           <form onSubmit={handleSubmit} method="POST">
//             <div className="mb-3">
//               <label
//                 htmlFor="name"
//                 className="mb-3 block text-base font-medium text-white"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Full Name"
//                 required
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//               />
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="email"
//                 className="mb-3 block text-base font-medium text-white"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 placeholder="example@gmail.com"
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//               />
//             </div>
//             <div className="mb-5">
//               <label
//                 htmlFor="message"
//                 className="mb-3 block text-base font-medium text-white"
//               >
//                 Message
//               </label>
//               <textarea
//                 rows={4}
//                 name="message"
//                 id="message"
//                 placeholder="Type your message"
//                 required
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                 defaultValue={""}
//               />
//             </div>
//             <div>
//               <input
//               style={{cursor:"pointer"}}
//                 className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
//                 type="submit"
//                 value={loading ? "Loading..." : "Submit"}
//                 // disabled={loading}
//               />
//             </div>
//             {success && (
//               <div className="text-green-500">Message Sent Successfully!</div>
//             )}
//             <ToastContainer />
//           </form>
//         </div>
//             <img src={messageUs} alt="contact" className="h-10 md:h-28 hidden sm:block swinging-image" srcset="" />
//       </div>
//     </div>
//   );
// };

// export default Contacts;

'use client'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [isloading, setisLoading]=useState(false);
  // const [messageReceived, setMessageReceived]=useState(false);
  const [formMessages, setFormMessages] = useState({
    name: "",
    email: "",
    message: "",
    source:"Message from Portifolio Website ",
  });
  const handleInputChange = (event) => {
    setFormMessages({
      ...formMessages,
      [event.target.name]: event.target.value,
    });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true)
    try {
      const res = await fetch("https://nodemailer-server-rouge.vercel.app/mails", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formMessages),
      });
      if (res.ok) {
      await res.json(); // parse response as JSON
      // console.log(responseJson);
      setisLoading(false);
      setFormMessages("")
        toast.success("Message Sent Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      } else {
        throw new Error("Failed to add item");
      }
    } catch (error) {
      // console.log(error);
      setisLoading(false);
      toast.error("An Error Occured !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  }


  return (
    <div id="contacts" className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
      <div className="bg-[#2A97A5]  rounded-lg shadow-lg p-6 md:w-96">
        <div className="flex items-center mb-4">
          <AiOutlineMail className="text-black text-xl mr-2" />
          <span className="font-semibold">Email:</span>
          <a href="mailto:jgathiru02@gmail.com" className="text-blue-200 font-bold ml-2 underline">
          info@gitaujustus
          </a>
        </div>
        <div className="flex items-center mb-4">
          <AiOutlinePhone className="text-black text-xl mr-2" />
          <span className="font-semibold">Phone:</span>
          <span className="ml-2">+254-729-144-533</span>
        </div>
        <div className="flex items-center mb-4">
          <RiMapPin2Line className="text-black text-xl mr-2" />
          <span className="font-semibold">Address:</span>
          <span className="ml-2">2500, Eldoret, Kenya</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your cool name"
              className="border border-gray-300 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Leave an email i can reply to..."
              className="border border-gray-300 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.email}
                onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi, Justus..."
              className="border border-gray-300 bg-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
          type="submit"
          className="bg-blue-300 w-full text-black py-2 px-4 rounded-md hover:bg-blue-400"
          disabled={isloading}
          style={{ cursor: isloading ? 'not-allowed' : 'pointer' }}
      >
          {isloading ? 'Loading...' : 'Submit'}
      </button>

        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contacts;
