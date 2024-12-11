import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Write() {
  const [entry, setEntry] = useState("");
  const [category, setCategory] = useState("Grateful");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Entry:", entry, "Category:", category);
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-3">
        <form className="flex flex-col items-center justify-center space-y-5 p-20 w-[50%] bg-slate-100 rounded-lg shadow-lg">
          <input type="text" placeholder="Enter Your Name" className="w-full p-3 bg-white rounded-md"/>
          <input type="email" name="" id="" placeholder="Enter Your Email" className="w-full p-3 bg-white rounded-md"/>
          <div className="w-full p-3">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="ml-2 p-2 bg-white rounded-md"
          >
            <option value="Grateful">Grateful</option>
            <option value="Stressful">Stressful</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Anxious">Anxious</option>
            <option value="Excited">Excited</option>
            <option value="Motivated">Motivated</option>
            <option value="Lonely">Lonely</option>
            <option value="Empowered">Empowered</option>
            <option value="Overwhelmed">Overwhelmed</option>
            <option value="Tired">Tired</option>
            <option value="Confused">Confused</option>
          </select>
          </div>
          <textarea
            id="entry"
            value={entry}
            onChange={handleEntryChange}
            placeholder="Write about your day..."
            className="w-full p-3 bg-white rounded-md"
            rows={13}
          />

          <button onClick={handleSubmit} className="p-3 bg-blue-100 rounded-md hover:bg-blue-300 transition-all">Save Entry</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

