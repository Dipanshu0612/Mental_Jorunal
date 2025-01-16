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
      <div className="flex p-2 md:flex-wrap md:flex-col sm:flex-col">
        <div className="flex items-center justify-center w-1/2 special-reveal4 md:w-full sm:w-full">
          <img
            src={HomeImg1}
            alt="HomeImg"
            className="w-[49rem] h-[49rem] pl-5 md:w-[35rem] md:h-[35rem] sm:w-[25rem] sm:h-[25rem]"
            id="HomeImg"
          />
        </div>
        <div className="flex flex-col w-1/2 text-center items-center justify-center space-y-5 italic p-4 md:w-full sm:w-full">
          <h1 className="text-[4rem] special-reveal md:text-[3rem] sm:text-[2.5rem]">Welcome to D's SoulScribe!</h1>
          <h3 className="text-[2.5rem] special-reveal2 md:text-[2rem] sm:text-[1.5rem]">Your Personal Mental Journal!</h3>
          <p className="text-2xl p-2 special-reveal3 md:text-[1.2rem] sm:text-[0.8rem]">
            A safe space where you can express your thoughts, reflect on your day, and discover patterns in your emotions. Your personal journey begins here, one word at a time.Track your moods, write freely, and uncover insights into your emotional well-being. Every entry is a step towards better understanding yourself.
          </p>
          <button className="p-3 bg-blue-200 text-black rounded-md border border-white hover:bg-blue-300 transition-all hover:shadow-lg sm:text-[0.8rem]">
            <Link to="/write">Write Now! ✍🏼</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
