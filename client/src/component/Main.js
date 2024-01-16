import React from 'react'
import {useEffect, useState} from 'react'

function Main() {
    const [clicked, setClick] = useState(false);
  useEffect(() =>{
    fetch("/api/book", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: '{ "name": "' + document.getElementById("name").value +'", "author":"' + document.getElementById("author").value +'", "pages":"' + document.getElementById("pages").value +'" }'
    })
  }, [clicked])
  return (
    <div className="App">
        <input id={"name"} type={"string"}></input>
        <input id={"author"} type={"string"}></input>
        <input id={"pages"} type={"number"}></input>
        <input id={"submit"} type={"submit"} onClick={() => setClick(true)}></input>
      </div>
  )
}

export default Main