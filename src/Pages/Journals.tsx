import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Journals() {
  interface Journal {
    name: string;
    email: string;
    title: string;
    category: string;
    entry: string;
    mood: string;
    date:string;
  }
  const [journals, setJournals] = useState<Journal[]>([]);

  const getJorunalEntries = () => {
    try {
      const storedData = localStorage.getItem("formData");
      if (storedData) {
        setJournals(JSON.parse(storedData)); 
        // console.log(storedData);
      } else {
        setJournals([]);
      }
    } catch (error) {
      console.error("Error parsing data from localStorage", error);
      setJournals([]);
    }
  }
  const reversedJournals:Journal[] = [...journals].reverse();
  useEffect(() => {
    getJorunalEntries();
  },[]);
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-5 p-7 m-10 items-center justify-center">
        {reversedJournals.length > 0 ? <>
        {reversedJournals.map((journal: Journal,key:number) => {
          return (
            <div className="flex flex-col p-7 space-y-2 italic bg-slate-50 shadow-md rounded-lg w-[75%] journal_box">
              <h3 className="text-2xl">{journal.name}</h3>
              <h4 className="">{journal.email}</h4>
              <h5 className="">{journal.date}</h5>
              <details>
                <summary className="cursor-pointer">{journal.title}</summary>
                <p>
                  {journal.entry}
                </p>
              </details>
            </div>
          );
        })}
        </>
        : <>
        <div className="h-[40rem] flex flex-col items-center justify-center space-y-10">
          <h3 className="font-bold text-4xl">No Entries in the Jorunal</h3>
          <button className="p-3 bg-blue-200 text-black rounded-md border border-white hover:bg-blue-300 transition-all hover:border-black hover:shadow-lg">
            <Link to="/write">Write Now! ✍🏼</Link>
          </button>
        </div>
        </> }
      </div>
      <Footer />
    </>
  );
}
