import React from "react"

function GifCard (props) {

    console.log(props.gifs[0].images)

    const display = props.gifs.map((gif,index)=> <img key={index} src={gif.images.original.url}></img>)

    return (
        <div>
            {/* <img src={props.gifs[0].images.original.url}></img> */}
            {display}
        </div>
    )

}

export default GifCard