import React from "react"


function GifCard (props) {

    let display = []

    if (props.gifs){
        if (props.gifs.length>1){
            display = props.gifs.map((gif,index)=> <img key={index} src={gif.images.original.url} alt="a gif"></img>)
        } else{
           display= <img src={props.gifs.url} alt="a gif"></img>
        }
    }

    return (
        <>
            <div className="gifs">
                {props.title && <h2>{props.title}:</h2>}
                {display}
            </div>
        </>
    )

}

export default GifCard