import React from "react"

function SearchFeirld(props) {

    const [input, setInput] = React.useState("");

    function handleChange(e){
        setInput(e.target.value)
        console.log("send input")
    }

    return (
            <form>
                <input id="input" onChange={handleChange}></input>
                <button onClick={(event)=>props.onClick(event,input,1)}>Search</button>

                <div className='options'>
                    <button className="btn" onClick={(event)=>props.onClick(event,input,2)}>Trending</button>
                    <button className="btn" onClick={(event)=>props.onClick(event,input,3)}>Random</button>
                </div>
            </form>
            
    )

}

export default SearchFeirld