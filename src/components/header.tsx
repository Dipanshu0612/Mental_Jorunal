import React, { useEffect, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [mood, setMood] = useState("😁");
  let [menuicon, changemenuicon] = useState(false);
  const isActiveStyle = {
    color: "#6b7280",
  };
  const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(e.target.value);
  };
  useEffect(() => {
    // console.log("Prev Mood: ",sessionStorage.getItem("Mood"));
    sessionStorage.setItem("Mood", mood);
    // console.log("Mew Mood: ",sessionStorage.getItem("Mood"));
  }, [mood]);
  return (
    <header className="header flex justify-around py-4 items-center sticky top-0 z-10 sm:justify-between md:justify-between md:px-10 sm:px-10">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">D's SoulScribe</h1>
      </div>
      <nav className="space-x-10 p-3 text-xl flex list-none nav sm:space-x-0 sm:p-5 sm:space-y-3 md:space-x-0 md:p-5 md:space-y-3" id="nav">
        <li>
          <Link
            to="/"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/qotd"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            QOTD
          </Link>
        </li>
        <li>
          <Link
            to="/write"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            Write Now!
          </Link>
        </li>
        <li>
          <Link
            to="/journals"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            Journal
          </Link>
        </li>
        <li>
          <Link
            to="/analytics"
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
          >
            Analytics
          </Link>
        </li>
        <li>
          <label htmlFor="mood">Mood:</label>
          <select
            name="mood"
            id="mood"
            value={mood}
            className="bg-transparent"
            onChange={handleMoodChange}
          >
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
      {menuicon ? (
        <AiOutlineClose
          id="menuicon"
          onClick={() => {
            const navElement = document.getElementById("nav");
            if (navElement !== null) {
              navElement.style.display = "none";
            }
            changemenuicon((prevState) => !prevState);
          }}
        />
      ) : (
        <AiOutlineMenu
          id="menuicon"
          onClick={() => {
            const navElement = document.getElementById("nav");
            if (navElement !== null) {
              navElement.style.display = "block";
            }
            changemenuicon((prevState) => !prevState);
          }}
        />
      )}
    </header>
  );
}
