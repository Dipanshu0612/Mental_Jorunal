import {FaSquareWhatsapp} from "react-icons/fa6"
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-around footer tracking-wide text-gray-500 my-5">
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <h2 className="text-3xl">D's SoulScribe</h2>
          <h4 className="text-xl">You Personal Mental Joural!</h4>
        </div>
        <div className="flex items-center justify-center flex-col cursor-pointer">
            <h2 className="text-xl">Made By Dipanshu!</h2>
            <h4>Copyright &copy; 2024 | All Rights Reserved</h4>
        </div>
        <div className="flex items-center justify-center space-x-8 text-[2rem] cursor-pointer">
          <a
            href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a"
            className="text-gray-500 hover:text-pink-300 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Dipanshu0612"
            className="text-gray-500 hover:text-pink-300 transition-all"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918485974624&text=Hello, more information!"
            className="text-gray-500 hover:text-pink-300 transition-all"
          >
            <FaSquareWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/_.dipanshu._06/"
            className="text-gray-500 hover:text-pink-300 transition-all"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </>
  );
}
