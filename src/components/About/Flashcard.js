import React from 'react'
import './about.css'

function Flashcard(props) {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
            <img src={props.imgUrl} alt="" />
        </div>
    )
}

export default Flashcard
