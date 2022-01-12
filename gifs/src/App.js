import './App.css';
import Search from "./SearchField"
import GifCard from "./GifCard"
import React from 'react';

function App() {

  const [gifs, setGifs] = React.useState([]);

  React.useEffect(function(){
      fetch("http://api.giphy.com/v1/gifs/trending?api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO")
      .then(res => res.json())
      .then(json => setGifs(json.data.map(data => data)))
  },[])

  console.log(gifs)

  function handleClick(input){
    console.log(input)
  }

  return (
    <div className="App">
        <Search 
          onClick={handleClick}
        />
        <GifCard 
          gifs={gifs}
        />
    </div>
  );
}

export default App;
