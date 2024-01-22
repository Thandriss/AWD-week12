import React from 'react'

function Main() {

  const clicked = () => {
    fetch("/api/book", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: '{ "name": "' + document.getElementById("name").value +'", "author":"' + document.getElementById("author").value +'", "pages":"' + document.getElementById("pages").value +'" }'
    })
  }

  return (
    <div className="App">
        <input id={"name"} type={"string"}></input>
        <input id={"author"} type={"string"}></input>
        <input id={"pages"} type={"number"}></input>
        <input id={"submit"} type={"submit"} onClick={() => clicked()}></input>
      </div>
  )
}

export default Main