import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Data() {
    const {id} = useParams()
    const [name, setName] = useState("");
    const [author, setAutor] = useState("");
    const [pages, setPages] = useState(0);
    useEffect(() => {
        fetch('/book/' + id)
        .then ((result) => result.json())
        .then((data) => {
            if(data.message){
                setName("404: This is not the webpage you are looking for")
                setPages("")
            } else {
                setName(data.name)
                setAutor(data.author)
                setPages(data.pages)
            }
            
        })
    },)

  return (
    <div>
        <h2>{name}</h2>
        <h2>{author}</h2>
        <h2>{pages}</h2>
    </div>
  )
}

export default Data