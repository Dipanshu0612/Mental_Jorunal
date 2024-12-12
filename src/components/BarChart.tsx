import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { valueFormatter } from "./dataset";
import { useCallback, useEffect, useState } from "react";

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
  interface Journal {
    name: string;
    email: string;
    title: string;
    category: string;
    entry: string;
    mood: string;
    date: string;
  }
  const [data, setData] = useState<Journal[]>([]);

  const getData = useCallback(() => {
    setData(JSON.parse(localStorage.getItem("formData") || "[]"));
    // console.log(data)
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
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
          Sad: 0,
          Anxious: 1,
          Excited: 0,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 0,
          Confused: 0,
          month: "Feb",
        },
        {
          Grateful: 1,
          Stressful: 1,
          Happy: 0,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 0,
          Confused: 0,
          month: "Mar",
        },
        {
          Grateful: 1,
          Stressful: 0,
          Happy: 0,
          Sad: 1,
          Anxious: 0,
          Excited: 0,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Apr",
        },
        {
          Grateful: 1,
          Stressful: 0,
          Happy: 0,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 1,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 0,
          Confused: 0,
          month: "May",
        },
        {
          Grateful: 1,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 1,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Jun",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Jul",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Aug",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Sep",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Oct",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
          month: "Nov",
        },
        {
          Grateful: 0,
          Stressful: 1,
          Happy: 1,
          Sad: 0,
          Anxious: 0,
          Excited: 1,
          Motivated: 0,
          Lonely: 0,
          Empowered: 0,
          Overwhelmed: 0,
          Tired: 1,
          Confused: 0,
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
      className="ml-2 pl-2 border-none w-1/2"
    />
  );
}
