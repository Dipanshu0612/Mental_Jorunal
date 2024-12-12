import Header from "../components/header";
import HomeImg1 from "../assests/HomeImg1.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex p-2">
        <div className="flex items-center justify-center w-1/2">
          <img
            src={HomeImg1}
            alt="HomeImg"
            className="w-[49rem] h-[49rem] pl-5"
            id="HomeImg"
          />
        </div>
        <div className="flex flex-col w-1/2 text-center items-center justify-center space-y-5 italic p-4">
          <h1 className="text-[4rem]">Welcome to D's SoulScribe!</h1>
          <h3 className="text-[2.5rem]">Your Personal Mental Journal!</h3>
          <p className="text-2xl">
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
