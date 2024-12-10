import React from "react";
import { NavLink as Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header flex justify-around py-4 items-center">
      <div>
        <h1 className="font-bold text-2xl tracking-wide">D's SoulScribe</h1>
      </div>
      <nav className="space-x-10 p-3 text-xl flex list-none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/qotd">QOTD</Link></li>
        <li><Link to="/write">Write Now!</Link></li>
        <li><select name="mood" id="mood" className="bg-transparent">
          <option value="😁">😁</option>
          <option value="🥲">🥲</option>
          <option value="😣">😣</option>
          <option value="😪">😪</option>
          <option value="😴">😴</option>
          <option value="😓">😓</option>
          <option value="😭">😭</option>
          <option value="😵‍💫">😵‍💫</option>
          </select></li>
      </nav>
    </header>
  );
}
