import React, { useState } from "react";
import Search from "./components/Search";
import DisplayResult from "./components/DisplayResult";
const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  return (
    <div className="max-w-sm sm:mx-auto mt-5 mx-2">
      <Search setData={setData} setError={setError} />
      <DisplayResult data={data} error={error}/>
    </div>
  );
};

export default App;
