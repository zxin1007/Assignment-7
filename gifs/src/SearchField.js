import React from "react"

function SearchFeirld(props) {

    const [input, setInput] = React.useState("");
    
    function handleChange(e){
        setInput (input => e.target.value)
        console.log("send input")
    }

    return (
            <div>
                <input onChange={handleChange}></input>
                <button onClick={()=>props.onClick(input)}>Search</button>
            </div>
    )

}

export default SearchFeirld