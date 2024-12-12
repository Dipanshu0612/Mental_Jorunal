import Header from "../components/header";
import HomeImg1 from "../assests/HomeImg1.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    ScrollReveal().reveal('.special-reveal', {
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal('.special-reveal2', {
      distance: '100px',
      duration: 1000,
      delay: 400,
      reset: true,
    });
    ScrollReveal().reveal('.special-reveal3', {
      distance: '100px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
    ScrollReveal().reveal('.special-reveal4', {
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: true,
      origin:"left",
    });
  })
  return (
    <>
      <Header />
      <div className="flex p-2">
        <div className="flex items-center justify-center w-1/2 special-reveal4">
          <img
            src={HomeImg1}
            alt="HomeImg"
            className="w-[49rem] h-[49rem] pl-5"
            id="HomeImg"
          />
        </div>
        <div className="flex flex-col w-1/2 text-center items-center justify-center space-y-5 italic p-4">
          <h1 className="text-[4rem] special-reveal">Welcome to D's SoulScribe!</h1>
          <h3 className="text-[2.5rem] special-reveal2">Your Personal Mental Journal!</h3>
          <p className="text-2xl special-reveal3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            eos eligendi iure! Sit officiis esse assumenda placeat quod tempora?
            Sunt illo, explicabo in quas voluptates iure! Nesciunt suscipit
            aperiam voluptates doloribus eaque libero blanditiis in porro
            commodi necessitatibus, natus id!
          </p>
          <button className="p-3 bg-blue-200 text-black rounded-md border border-white hover:bg-blue-300 transition-all hover:shadow-lg">
            <Link to="/write">Write Now! ✍🏼</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
