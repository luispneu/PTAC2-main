import { useState } from "react"
import { Link } from "react-router-dom"
export default function home() {
    const [name , steName] = useState()
    return (
            <div>
                <h1>Home</h1>
                <Link to="/todo">To do list</Link>
                <p>{name}</p>
                <input type="text" onChange={(e)=>{steName(e.target.value)}}></input>
            </div>
    )
}