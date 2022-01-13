import React from "react"

function GifCard (props) {
    const [gifs, setGifs] = React.useState([]);

    React.useEffect(function(){
        fetch("http://api.giphy.com/v1/gifs/search?q=cars&api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO")
        .then(res => res.json())
        .then(json => setGifs(json.data.map(data => data)))
    },[])

    console.log(gifs)
    const display = gifs.map((gif,index)=> <img key={index} src={gif.images.original.url} alt="a gif"></img>)

    return (
        <div>
            {/* <img src={props.gifs[0].images.original.url}></img> */}
            {display}
        </div>
    )

}

export default GifCard