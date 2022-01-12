import React from "react"

function GifCard (props) {

    console.log(props.gifs[0].images.original.url)

    const display = props.gifs.map(gif=> <img src={gif.images.original.url}></img>)

    return (
        <div>
            <img src={props.gifs[0].images.original.url}></img>
        </div>
    )

}

export default GifCard