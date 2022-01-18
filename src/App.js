import './App.css';
import Search from "./SearchField"
import GifCard from "./GifCard"
import Header from "./Header"
import React from 'react';


function App() {

  const [gifs, setGifs] = React.useState(0)
  const [title, setTitle] = React.useState("")

  async function handleSumbit(event,input,mode){
    event.preventDefault();
    if (mode===1&&input){
      setTitle(input)
      const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO`)
      const json =await res.json()
      setGifs(json.data.map(data => data))
    } else if (mode===2){
      setTitle("Trending Now")
      const res = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO`)
      const json =await res.json()
      setGifs(json.data.map(data => data))

      document.getElementById("input").value=""
    }else if (mode===3){
      setTitle("Random")
      const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO`)
      const json =await res.json()
      setGifs(()=>json.data.images.original)

      document.getElementById("input").value=""
  }
  }

  return (
    <div className="App">
        <header>
          <Header />
        </header>
          <Search 
            onClick={handleSumbit}
          />
        <GifCard
          gifs = {gifs}
          title ={title}
        />
    </div>
  );
}

export default App;
