import BarChart from "../components/BarChart";
import Header from "../components/header";
import Footer from "../components/footer";
import { PieChart } from "@mui/x-charts";
import { useCallback, useEffect, useState } from "react";

export default function MoodAnalysis() {
  interface Journal {
    name: string;
    email: string;
    title: string;
    category: string;
    entry: string;
    mood: string;
    date:string;
  }
  const [data,setData]=useState<Journal[]>([])
  
  const getData =useCallback(() => {
    setData(JSON.parse(localStorage.getItem("formData") || '[]'))
    // console.log(data)
  },[])
  useEffect(()=>{
    getData();
  },[getData])
  return (
    <>
      <Header />
      <div className="flex items-center justify-evenly p-6 flex-col space-y-8 -z-10 overflow-hidden sm:space-y-1 sm:p-2 sm:justify-around">
        <div className="mood_1 p-10 w-full flex flex-col items-center justify-around space-y-5 sm:space-y-1 sm:p-2">
          <h3 className="text-4xl w-1/2 text-center md:text-3xl sm:text-2xl">Categroy Analysis</h3>
          <BarChart />
        </div>

        <div className="mood_2 p-6 w-full flex items-center justify-around flex-col space-y-5">
        <h3 className="text-4xl w-1/2 text-center md:text-3xl sm:text-2xl">Mood Analysis</h3>
          <PieChart
            series={[
              {
               data : [
                  { id: 0, value: data.filter((val) => val.mood === "😁").length, label: "😁" },
                  { id: 1, value: data.filter((val) => val.mood === "🥲").length, label: "🥲" },
                  { id: 2, value: data.filter((val) => val.mood === "😣").length, label: "😣" },
                  { id: 3, value: data.filter((val) => val.mood === "😪").length, label: "😪" },
                  { id: 4, value: data.filter((val) => val.mood === "😴").length, label: "😴" },
                  { id: 5, value: data.filter((val) => val.mood === "😓").length, label: "😓" },
                  { id: 6, value: data.filter((val) => val.mood === "😭").length, label: "😭" },
                  { id: 7, value: data.filter((val) => val.mood === "😵‍💫").length, label: "😵‍💫" },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={300}
            width={800}
          className="sm:!w-[400px] md:!w-[600px]"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
