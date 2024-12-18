import { useCallback, useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../components/footer";
import ScrollReveal from 'scrollreveal';

export default function Qotd() {
  const [quote, setQuote] = useState<{
    q: string;
    a: string;
}>({
    q: "",
    a: "",
  });

  const fetchQuote = useCallback(async (): Promise<void> => {
    try {
      // console.log("Getting Quote from API!");
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/quotes?category=inspirational",
        {
          headers: {
            "X-Api-Key": `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      
      if (!response) {
        console.error("No response received from API.");
      } else {
        const data = await response.data;
        setQuote({
          q: data[0].quote,
          a: data[0].author,
        });
      }
    } catch (error: any) {
      console.error("Error fetching quote:", error);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
    ScrollReveal().reveal('.special-reveal', {
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: true,
      origin:'top'
    });

    // return () => {
    //   console.log("Unmounting!");
    // };
  }, [fetchQuote]); 

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-evenly text-center p-4 space-y-20 overflow-hidden h-[50rem] md:space-y-14 sm:space-y-7">
        <div className="p-5">
          <h2 className="qotd_title text-[6rem] tracking-widest special-reveal md:text-[4rem] sm:text-[3rem]">
            Quote of the Day!
          </h2>
        </div>
        <div className="p-5">
          <p className="text-[3rem] quote tracking-wide mb-4 md:text-[2.2rem] sm:text-[1.5rem]">
            <Typewriter
              options={{
                strings: [quote.q],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <h2 className="text-[2rem] author tracking-wide md:text-[1.5rem] sm:text-[1.2rem]">
            {quote.a || "Loading..."}
          </h2>
        </div>
        <div className="p-5">
          <button className="p-3 bg-blue-200 text-black rounded-md border border-white hover:bg-blue-300 transition-all hover:border-black hover:shadow-lg sm:text-[0.8rem]">
            <Link to="/write">Write Now! ✍🏼</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
