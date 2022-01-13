import React from "react"

function GifCard (props) {
    const [gifs, setGifs] = React.useState([]);

    React.useEffect(function(){
        if (props){
            fetch(`http://api.giphy.com/v1/gifs/search?q=${props.input}&api_key=G00w4FBpmxpQL21Nv3OMxMMoB9FPvLBO`)
            .then(res => res.json())
            .then(json => setGifs(json.data.map(data => data)))
        }
    },[props])

    console.log(gifs)
    const display = gifs.map((gif,index)=> <img key={index} src={gif.images.original.url} alt="a gif"></img>)

    return (
        <div className="gifs">
            <h2>{props.input}:</h2>
            {display}
        </div>
    )

}

export default GifCard