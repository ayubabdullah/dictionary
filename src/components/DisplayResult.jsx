import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import Book from "../images/book.svg";

const DisplayResult = ({ data, error }) => {
  const handleClick = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <>
      {data &&
        data.map((data) => {
          return (
            <div className="my-3" key={uuidv4()}>
              <div className="w-full h-20 bg-violet-200 rounded-lg flex justify-between items-center px-3">
                <h1 className="uppercase font-extrabold">{data.word}</h1>
                <button
                  onClick={() => handleClick(data.phonetics[0].audio)}
                  className="text-3xl text-violet-700"
                >
                  <BsPlayFill />
                </button>
              </div>
              {data.meanings.map((meaning) => {
                return (
                  <div
                    className="w-full bg-violet-200 rounded-lg px-3 py-4 mt-2"
                    key={uuidv4()}
                  >
                    <h2 className="text-lg font-bold border-b-2 border-b-gray-100 my-3 pb-2 text-gray-800">
                      Part Of Speech
                    </h2>
                    <p className="capitalize">{meaning.partOfSpeech}</p>
                    {meaning.definitions.map((definition) => {
                      return (
                        <div key={uuidv4()}>
                          <h2 className="text-lg font-bold border-b-2 border-b-gray-100 my-3 pb-2 text-gray-800">
                            Definition
                          </h2>
                          <p className="capitalize">{definition.definition}</p>
                          {definition.example && (
                            <>
                              <h2 className="text-lg font-bold border-b-2 border-b-gray-100 my-3 pb-2 text-gray-800">
                                Example
                              </h2>
                              <p className="capitalize">{definition.example}</p>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="w-full bg-violet-200 rounded-lg px-3 py-4 mt-2">
                <h2 className="text-lg font-bold border-b-2 border-b-gray-100 my-3 pb-2 text-gray-800">
                  Origin
                </h2>
                <p className="capitalize">{data.origin}</p>
              </div>
            </div>
          );
        })}
      {error && (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl p-10 text-center font-bold">{error}</h1>
        </div>
      )}
      {!(data || error) && (
        <div className="flex justify-center items-center h-screen">
          <img className="h-72 " src={Book} alt="Book" />
        </div>
      )}
    </>
  );
};

export default DisplayResult;
