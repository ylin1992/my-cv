import React from 'react'
import Flashcard from './Flashcard'
import './about.css'

function Flashcards() {
    return (
        <div className="slider">
            <div className="flashcards-container">
                <Flashcard title="Web developer" content="Full stack" />
                <Flashcard title="AR Optical design" content="Lens design"/>
                <Flashcard title="AR Software engineer" content="Testing setups"/>
            </div>
        </div>
    )
}

export default Flashcards
