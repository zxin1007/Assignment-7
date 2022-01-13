import './App.css';
import Search from "./SearchField"
import GifCard from "./GifCard"
import Header from "./Header"
import React from 'react';

function App() {
  const [userInput, setUserInput] = React.useState("")
  function handleClick(input){
    setUserInput(input)
    console.log(userInput)
  }

  return (
    <div className="App">
        <header>
          <Header />
        </header>
        <Search 
          onClick={handleClick}
        />
        <GifCard
          input = {userInput}
        />
    </div>
  );
}

export default App;
