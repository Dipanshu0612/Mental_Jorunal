import Header from "../components/header";
import Footer from "../components/footer";
import AboutImg from "../assests/AboutImg.png";
import FileGif from '../assests/file.gif';
import GrowthGif from '../assests/growth.gif';
import MoodGif from '../assests/mood.gif'

export default function About() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-1/2 text-center items-center justify-center space-y-10 italic p-4">
        <h1 className="text-4xl">About D's SoulScribe</h1>
        <p className="text-xl">
          At D's SoulScribe, we believe in the power of reflection, mindfulness, and self-expression to nurture mental wellness. Our mission is to provide you with a safe space to journal your thoughts, track your moods, and reflect on your emotional journey. Whether you're looking for clarity, healing, or simply a way to connect with yourself, we're here to support you every step of the way.
        </p>
        <div className="flex justify-around items-center space-x-7 w-full p-4">
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_1 transition-all cursor-pointer">
            <img src={FileGif} alt="Journaling" className="mix-blend-multiply w-[10rem] h-[10rem]" />
            <h3 className="text-[1.5rem]">Journaling</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_2 transition-all cursor-pointer">
            <img src={MoodGif} alt="Mood Selection" className="mix-blend-multiply w-[10rem] h-[10rem]" />
            <h3 className="text-[1.5rem]">Mood Selection</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>
          <div className="shadow-md p-4 bg-blue-100 flex flex-col items-center justify-center space-y-5 about_3 transition-all cursor-pointer">
            <img src={GrowthGif} alt="Tracking"  className="mix-blend-multiply w-[10rem] h-[10rem]"/>
            <h3 className="text-[1.5rem]">Tracking</h3>
            <p>Express yourself freely in a private journal. Writing down your thoughts can help you gain insight, release stress, and make sense of complex emotions.</p>
          </div>

        </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <img src={AboutImg} alt="About" className="w-[50rem] h-[50rem] pr-5" id="aboutimg"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
