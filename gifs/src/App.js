import './App.css';
import Search from "./SearchField"
import GifCard from "./GifCard"
import React from 'react';

function App() {
  function handleClick(input){
    console.log(input)
  }

  return (
    <div className="App">
        <Search 
          onClick={handleClick}
        />
        <GifCard/>
    </div>
  );
}

export default App;
