import Header from "../components/header";
import Footer from "../components/footer";
import AboutImg from "../assests/AboutImg.png";
import FileGif from '../assests/file.gif';
import GrowthGif from '../assests/growth.gif';
import MoodGif from '../assests/mood.gif'
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function About() {
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
      delay: 200,
      reset: true,
      origin:"left",
      interval:150
    });
    ScrollReveal().reveal('.special-reveal4', {
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: true,
      origin:"right",
    });
  })
  return (
    <>
      <Header />
      <div className="flex items-center justify-center md:flex-col sm:flex-col">
        <div className="flex flex-col w-1/2 text-center items-center justify-center space-y-10 italic p-4 md:w-full sm:w-full">
        <h1 className="text-4xl special-reveal md:text-3xl sm:text-2xl">About D's SoulScribe</h1>
        <p className="text-xl special-reveal2 md:text-[1.2rem] sm:text-[1rem]">
          At D's SoulScribe, we believe in the power of reflection, mindfulness, and self-expression to nurture mental wellness. Our mission is to provide you with a safe space to journal your thoughts, track your moods, and reflect on your emotional journey. Whether you're looking for clarity, healing, or simply a way to connect with yourself, we're here to support you every step of the way.
        </p>
        <div className="flex justify-around items-center w-full p-4 md:flex-col sm:flex-col">
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_1 transition-all cursor-pointer  special-reveal3 md:p-3 sm:p-2 m-2">
            <img src={FileGif} alt="Journaling" className="mix-blend-multiply w-[10rem] h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[6rem] sm:h-[6rem]" />
            <h3 className="text-[1.5rem] md:text-[1.2rem sm:text-[1rem]">Journaling</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_2 transition-all cursor-pointer  special-reveal3 md:p-3 sm:p-2 m-2">
            <img src={MoodGif} alt="Mood Selection" className="mix-blend-multiply w-[10rem] h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[6rem] sm:h-[6rem]" />
            <h3 className="text-[1.5rem] md:text-[1.2rem sm:text-[1rem]">Mood Selection</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_3 transition-all cursor-pointer  special-reveal3 md:p-3 sm:p-2 m-2">
            <img src={GrowthGif} alt="Tracking"  className="mix-blend-multiply w-[10rem] h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[6rem] sm:h-[6rem]"/>
            <h3 className="text-[1.5rem] md:text-[1.2rem sm:text-[1rem]">Tracking</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>

        </div>
        </div>
        <div className="flex items-center justify-center w-1/2 special-reveal4 md:w-full sm:w-full">
          <img src={AboutImg} alt="About" className="w-[50rem] h-[50rem] pr-5 md:w-[35rem] md:h-[35rem] sm:w-[25rem] sm:h-[25rem]" id="aboutimg"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
