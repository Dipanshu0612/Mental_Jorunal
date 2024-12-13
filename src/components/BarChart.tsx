import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { valueFormatter } from "./dataset";
// import { useCallback, useEffect, useState } from "react";

const chartSetting = {
  yAxis: [
    {
      label: "No. Of Entries",
    },
  ],
  width: 1500,
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

export default function BarsDataset() {
  // interface Journal {
  //   name: string;
  //   email: string;
  //   title: string;
  //   category: string;
  //   entry: string;
  //   mood: string;
  //   date: string;
  // }
  // const [data, setData] = useState<Journal[]>([]);

  // const getData = useCallback(() => {
  //   setData(JSON.parse(localStorage.getItem("formData") || "[]"));
  //   // console.log(data)
  // }, []);
  // useEffect(() => {
  //   getData();
  // }, [getData]);
  return (
    <BarChart
      dataset={[
        {
          Grateful: 3,
          Stressful: 2,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 0,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Jan",
        },
        {
          Grateful: 1,
          Stressful: 0,
          Happy: 1,
          Sad: 9,
          Anxious: 1,
          Excited: 0,
          Motivated: 5,
          Lonely: 0,
          Empowered:1,
          Overwhelmed: 0,
          Tired: 4,
          Confused: 0,
          month: "Feb",
        },
        {
          Grateful: 1,
          Stressful: 1,
          Happy: 8,
          Sad: 0,
          Anxious: 5,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 7,
          Confused: 0,
          month: "Mar",
        },
        {
          Grateful: 1,
          Stressful: 0,
          Happy: 0,
          Sad: 1,
          Anxious: 8,
          Excited: 8,
          Motivated: 0,
          Lonely: 0,
          Empowered: 6,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 11,
          month: "Apr",
        },
        {
          Grateful: 1,
          Stressful: 0,
          Happy: 8,
          Sad: 5,
          Anxious: 0,
          Excited: 7,
          Motivated: 1,
          Lonely: 2,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 8,
          Confused: 4,
          month: "May",
        },
        {
          Grateful: 1,
          Stressful: 1,
          Happy: 6,
          Sad: 4,
          Anxious: 0,
          Excited: 1,
          Motivated: 1,
          Lonely: 2,
          Empowered: 1,
          Overwhelmed: 3,
          Tired: 1,
          Confused: 6,
          month: "Jun",
        },
        {
          Grateful: 7,
          Stressful: 3,
          Happy: 6,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 5,
          Lonely: 3,
          Empowered: 0,
          Overwhelmed: 1,
          Tired: 10,
          Confused: 5,
          month: "Jul",
        },
        {
          Grateful: 5,
          Stressful: 3,
          Happy: 10,
          Sad: 6,
          Anxious: 3,
          Excited: 1,
          Motivated: 5,
          Lonely: 3,
          Empowered: 0,
          Overwhelmed: 1,
          Tired: 7,
          Confused: 10,
          month: "Aug",
        },
        {
          Grateful: 5,
          Stressful: 3,
          Happy: 6,
          Sad: 6,
          Anxious: 0,
          Excited: 1,
          Motivated: 5,
          Lonely: 5,
          Empowered: 0,
          Overwhelmed: 1,
          Tired: 7,
          Confused: 5,
          month: "Sep",
        },
        {
          Grateful: 7,
          Stressful: 3,
          Happy: 6,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 5,
          Lonely: 3,
          Empowered: 0,
          Overwhelmed: 1,
          Tired: 10,
          Confused: 5,
          month: "Oct",
        },
        {
          Grateful: 7,
          Stressful: 3,
          Happy: 6,
          Sad: 5,
          Anxious: 0,
          Excited: 10,
          Motivated: 5,
          Lonely: 3,
          Empowered: 3,
          Overwhelmed: 1,
          Tired: 5,
          Confused: 5,
          month: "Nov",
        },
        {
          Grateful: 4,
          Stressful: 3,
          Happy: 9,
          Sad: 0,
          Anxious: 3,
          Excited: 1,
          Motivated: 0,
          Lonely: 3,
          Empowered: 0,
          Overwhelmed: 2,
          Tired: 7,
          Confused: 9,
          month: "Dec",
        },
      ]}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "Grateful", label: "Grateful", valueFormatter },
        { dataKey: "Stressful", label: "Stressful", valueFormatter },
        { dataKey: "Happy", label: "Happy", valueFormatter },
        { dataKey: "Sad", label: "Sad", valueFormatter },
        { dataKey: "Anxious", label: "Anxious", valueFormatter },
        { dataKey: "Excited", label: "Excited", valueFormatter },
        { dataKey: "Motivated", label: "Motivated", valueFormatter },
        { dataKey: "Lonely", label: "Lonely", valueFormatter },
        { dataKey: "Empowered", label: "Empowered", valueFormatter },
        { dataKey: "Overwhelmed", label: "Overwhelmed", valueFormatter },
        { dataKey: "Tired", label: "Tired", valueFormatter },
        { dataKey: "Confused", label: "Confused", valueFormatter },
      ]}
      {...chartSetting}
      className="ml-2 p-10 border-none w-1/2 md:p-32 sm:!w-[450px]"
    />
  );
}
