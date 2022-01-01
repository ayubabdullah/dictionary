import React, { useState } from "react";
import fetchWord from "../api/fetchWord";
import { BsSearch } from "react-icons/bs";
const Search = ({ setData, setError }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search) {
      const data = await fetchWord(search);
      if (data) {
        setData(data);
        setSearch("");
        setError("");
      } else {
        setData();
        setError("Can not find this word, please check your spelling");
      }
    } else {
      setError("Please add a word");
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-center items-center "
    >
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 rounded-xl border-2 border-violet-700 "
      />
      <button
        type="submit"
        className="w-12 h-12 bg-violet-700 flex justify-center items-center text-2xl rounded-xl text-white ml-1"
      >
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
