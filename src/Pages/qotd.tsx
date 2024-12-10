import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function Qotd() {
  const [quote, setQuote] = useState({
    q: "",
    a: "",
  });

  useEffect(() => {
    async function fetchQuote(): Promise<void> {
      try {
        console.log("Getting Quote from API!");
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes?category=inspirational",
          {
            headers: {
              "X-Api-Key": "skj/e8ziAnNwcj0xgfam4A==MRMQkgHVafAmff0v",
            },
          }
        );
        if (!response) {
          console.error(response);
        }
        const data = await response.data;
        setQuote({
          q: data[0].quote,
          a: data[0].author,
        });
        console.log(data);
      } catch (error: any) {
        console.log("Error: ", error);
      }
    }
    fetchQuote();

    return () => {
      console.log("Unmounting!");
    };
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-evenly text-center p-4 space-y-20 overflow-hidden h-[50rem]">
        <div className="p-5">
          <h2 className="qotd_title text-[6rem] tracking-widest">
            Quote of the Day!
          </h2>
        </div>
        <div className="p-5">
          <p className="text-[3rem] quote tracking-wide mb-4">
          <Typewriter
            options={{
              strings: [quote.q],
              autoStart: true,
              loop: true,
            }}
          />
          </p>
          
          <h2 className="text-[2rem] author tracking-wide">
            {quote.a || "Loading..."}
          </h2>
        </div>
        <div className="p-5">
          <button className="p-3 bg-blue-200 text-black rounded-md border border-white hover:bg-blue-300 transition-all hover:border-black hover:shadow-lg">
            <Link to="/write">Write Now! ✍🏼</Link>
          </button>
        </div>
      </div>
    </>
  );
}
