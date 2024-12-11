import React, { useEffect, useState } from "react";
import { NavLink as Link } from "react-router-dom";

export default function Header() {
  const [mood,setMood]=useState("😁")
  const isActiveStyle = {
    color: '#6b7280'
  };
  const handleMoodChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setMood(e.target.value);
  };
  useEffect(()=>{
    // console.log("Prev Mood: ",sessionStorage.getItem("Mood"));
    sessionStorage.setItem("Mood",mood);
    // console.log("Mew Mood: ",sessionStorage.getItem("Mood"));
  },[mood])
  return (
    <header className="header flex justify-around py-4 items-center sticky top-0 z-10">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">D's SoulScribe</h1>
      </div>
      <nav className="space-x-10 p-3 text-xl flex list-none">
        <li>
          <Link to="/" style={({ isActive }) => isActive ? isActiveStyle : {}}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={({ isActive }) => isActive ? isActiveStyle : {}}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/qotd" style={({ isActive }) => isActive ? isActiveStyle : {}}>
            QOTD
          </Link>
        </li>
        <li>
          <Link to="/write" style={({ isActive }) => isActive ? isActiveStyle : {}}>
            Write Now!
          </Link>
        </li>
        <li>
          <Link to="/analytics" style={({ isActive }) => isActive ? isActiveStyle : {}}>
            Analytics
          </Link>
        </li>
        <li>
          <label htmlFor="mood">Mood:</label>
          <select name="mood" id="mood" value={mood} className="bg-transparent" onChange={handleMoodChange}>
            <option value="😁">😁</option>
            <option value="🥲">🥲</option>
            <option value="😣">😣</option>
            <option value="😪">😪</option>
            <option value="😴">😴</option>
            <option value="😓">😓</option>
            <option value="😭">😭</option>
            <option value="😵‍💫">😵‍💫</option>
          </select>
        </li>
      </nav>
    </header>
  );
}
